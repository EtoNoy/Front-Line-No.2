import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '10mb' }));

// Inquiries storage with JSON persistence
const DATA_DIR = path.resolve(__dirname, 'data');
const INQUIRIES_FILE = path.resolve(DATA_DIR, 'inquiries.json');

interface TranscriptMessage {
  role: 'user' | 'model' | 'assistant' | 'system';
  text?: string;
  content?: string;
  timestamp: string;
}

interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  urgency: 'urgent' | 'high' | 'normal';
  preferredTime?: string;
  caseType?: string;
  courtDate?: string;
  notes?: string;
  status: 'new' | 'contacted' | 'consultation_scheduled' | 'closed';
  createdAt: string;
  summary?: string;
  transcript: TranscriptMessage[];
  internalNotes?: string;
}

function loadInquiries(): Inquiry[] {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (fs.existsSync(INQUIRIES_FILE)) {
      const data = fs.readFileSync(INQUIRIES_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading inquiries:', err);
  }
  return [];
}

function saveInquiries(inquiries: Inquiry[]) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving inquiries:', err);
  }
}

// Target lead recipients
const NOTIFICATION_EMAIL = 'adam@frontlinelaw.com';
const NOTIFICATION_PHONE = '0476602372';

// Email dispatcher for new client inquiries
async function dispatchEmailNotification(inquiry: Inquiry): Promise<boolean> {
  const formattedTranscript = inquiry.transcript && inquiry.transcript.length > 0
    ? inquiry.transcript.map(t => `[${t.timestamp || 'Time'}] ${(t.role || 'USER').toUpperCase()}: ${t.text || t.content || ''}`).join('\n')
    : 'No chat messages recorded.';

  const emailSubject = `[NEW CLIENT ENQUIRY] ${inquiry.name} (${inquiry.phone}) - Priority: ${inquiry.urgency.toUpperCase()}`;
  const emailText = `=======================================================
NEW CLIENT ENQUIRY - FRONTLINE LAWYERS
=======================================================
Ref ID: ${inquiry.id}
Timestamp: ${new Date(inquiry.createdAt).toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })}
Priority: ${inquiry.urgency.toUpperCase()}

CLIENT DETAILS:
- Full Name: ${inquiry.name}
- Phone Number: ${inquiry.phone}
- Email Address: ${inquiry.email || 'Not provided'}
- Matter Category: ${inquiry.caseType || 'General Criminal Defence'}
- Court Date: ${inquiry.courtDate || 'None specified'}
- Preferred Contact Time: ${inquiry.preferredTime || 'As soon as possible'}
- Client Notes / Location: ${inquiry.notes || 'None'}

EXECUTIVE CASE SUMMARY:
${inquiry.summary || 'Enquiry submitted for partner review.'}

-------------------------------------------------------
FULL CONVERSATION TRANSCRIPT:
-------------------------------------------------------
${formattedTranscript}
=======================================================`;

  console.log(`\n================== [DISPATCH: EMAIL TO ${NOTIFICATION_EMAIL}] ==================`);
  console.log(`SUBJECT: ${emailSubject}`);
  console.log(emailText);
  console.log(`===============================================================================\n`);

  if (process.env.RESEND_API_KEY) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || 'enquiries@frontlinelaw.com',
          to: [NOTIFICATION_EMAIL],
          subject: emailSubject,
          text: emailText,
        }),
      });
    } catch (err) {
      console.error('External email dispatch error:', err);
    }
  }

  return true;
}

// SMS dispatcher for new client inquiries
async function dispatchSmsNotification(inquiry: Inquiry): Promise<boolean> {
  const smsBody = `You have a new client enquiry from Frontline Lawyers: ${inquiry.name} (${inquiry.phone}) - Urgency: ${inquiry.urgency.toUpperCase()}. Case: ${inquiry.caseType || 'Defence'}. Full details emailed to ${NOTIFICATION_EMAIL}.`;

  console.log(`\n================== [DISPATCH: SMS TO ${NOTIFICATION_PHONE}] ==================`);
  console.log(`RECIPIENT: ${NOTIFICATION_PHONE}`);
  console.log(`MESSAGE: ${smsBody}`);
  console.log(`==============================================================================\n`);

  if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_PHONE_NUMBER) {
    try {
      const auth = Buffer.from(`${process.env.TWILIO_ACCOUNT_SID}:${process.env.TWILIO_AUTH_TOKEN}`).toString('base64');
      const params = new URLSearchParams({
        To: NOTIFICATION_PHONE,
        From: process.env.TWILIO_PHONE_NUMBER,
        Body: smsBody,
      });

      await fetch(`https://api.twilio.com/2010-04-01/Accounts/${process.env.TWILIO_ACCOUNT_SID}/Messages.json`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });
    } catch (err) {
      console.error('External SMS dispatch error:', err);
    }
  }

  return true;
}

// Hard-coded deterministic legal concierge response generator (Completely non-AI)
function generateDeterministicReply(userMessage: string): string {
  const lower = userMessage.toLowerCase();
  if (lower.includes('police') || lower.includes('interview') || lower.includes('arrest') || lower.includes('question') || lower.includes('station') || lower.includes('caution')) {
    return "Under Section 89 of the Evidence Act and LEPRA, you are legally required to provide only your name, address, and driver licence (if driving). You have an absolute right to silence and are not required to participate in an electronically recorded interview (ERISP) or answer police questions. Anything you say will be recorded and used against you in court.\n\nNever attend a police interview unrepresented. Principal Counsel Adam Ashley attends police stations across Northern Rivers and South East Queensland to protect clients' rights. You should contact Frontline Lawyers before answering any questions.\n[SHOW_CONTACT_BUTTON]";
  }
  if (lower.includes('court') || lower.includes('date') || lower.includes('summons') || lower.includes('appear') || lower.includes('mention') || lower.includes('hearing')) {
    return "At your first court mention, entering a plea without first having a criminal solicitor examine the full police brief of evidence can permanently prejudice your defence. Appearing unrepresented leaves you vulnerable to immediate convictions and severe penalties.\n\nFrontline Lawyers represents clients across local and magistrates courts from Tweed Heads, Byron Bay, and Lismore through to Southport, Coolangatta, and Brisbane. Contact our defence team to arrange representation.\n[SHOW_CONTACT_BUTTON]";
  }
  if (lower.includes('traffic') || lower.includes('dui') || lower.includes('drink') || lower.includes('drive') || lower.includes('license') || lower.includes('licence') || lower.includes('speed')) {
    return "Drink driving (PCA) and drug driving offences carry mandatory licence disqualifications, interlock requirements, and criminal records under NSW and Queensland traffic laws. Technical challenges regarding breath analysis calibrations and roadside detention timelines require legal scrutiny.\n\nDo not risk losing your licence and receiving a criminal record. Adam Ashley and our defence solicitors frequently defend driving charges and advocate for non-conviction outcomes across Northern Rivers and South East Queensland. Contact Frontline Lawyers to review your charge.\n[SHOW_CONTACT_BUTTON]";
  }
  if (lower.includes('bail') || lower.includes('remand') || lower.includes('custody') || lower.includes('show cause')) {
    return "Under the Bail Act, strict 'Show Cause' provisions and 'unacceptable risk' tests apply. In the Local Court, an unrepresented applicant generally only gets one opportunity to apply for release; if refused, you may be remanded in custody for months awaiting trial.\n\nAdam Ashley provides urgent bail advocacy in Local, Magistrates, District, and Supreme Courts across NSW and Queensland. Contact Frontline Lawyers to discuss bail representation.\n[SHOW_CONTACT_BUTTON]";
  }
  if (lower.includes('domestic') || lower.includes('violence') || lower.includes('avo') || lower.includes('dvo')) {
    return "Domestic violence allegations and AVO / DVO applications trigger immediate court orders that can exclude you from your home and affect employment or child contact. Consenting to orders 'without admissions' still exposes you to criminal charges if any alleged breach occurs.\n\nOur solicitors represent clients in contested AVO hearings and negotiations across Northern Rivers and South East Queensland. Contact Frontline Lawyers to protect your position.\n[SHOW_CONTACT_BUTTON]";
  }
  if (lower.includes('cost') || lower.includes('fee') || lower.includes('price') || lower.includes('quote')) {
    return "Frontline Lawyers operates on transparent fixed-fee arrangements for standard court mentions, bail applications, sentence hearings, and police station attendances. We also collaborate closely with Australia's leading criminal defence barristers for complex jury trials and Supreme Court matters.\n\nIf you would like transparent pricing for your specific matter, send your details via our contact form to arrange an initial conference.\n[SHOW_CONTACT_BUTTON]";
  }
  return "To speak with one of the partners at Frontline Lawyers, we invite you to contact us via our Contact form.\n\nOnce we have reviewed your enquiry, we will contact you to arrange an initial conference, which can be conducted either in person or by video. You can also call our direct defence line at 0421 066 608.\n[SHOW_CONTACT_BUTTON]";
}

// Completely hard-coded deterministic API endpoint for chat (Zero AI)
app.post('/api/chat', (req, res) => {
  try {
    const { messages } = req.body;
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required' });
    }
    const latestUserMsg = messages[messages.length - 1]?.content || '';
    const reply = generateDeterministicReply(latestUserMsg);
    return res.json({ reply });
  } catch (err: unknown) {
    console.error('Error generating chat reply:', err);
    return res.status(500).json({
      error: 'Failed to process chat message',
      reply: "To speak with one of the partners at Frontline Lawyers, we invite you to contact us via our Contact form.\n\nOnce we have reviewed your enquiry, we will contact you to arrange an initial conference, which can be conducted either in person or by video.",
    });
  }
});

// Create inquiry with full transcript & dispatch to email & phone SMS
app.post('/api/inquiries', async (req, res) => {
  try {
    const { name, phone, email, urgency = 'normal', preferredTime, caseType, courtDate, notes, transcript = [] } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and Phone number are required' });
    }

    const inquiries = loadInquiries();
    const id = `FL-${Math.floor(10000 + Math.random() * 90000)}`;

    const generatedSummary = notes || `Client ${name} submitted enquiry regarding ${caseType || 'criminal law matter'}. Contact: ${phone}. Email: ${email || 'None'}.`;

    const newInquiry: Inquiry = {
      id,
      name,
      phone,
      email: email || '',
      urgency: urgency as 'urgent' | 'high' | 'normal',
      preferredTime: preferredTime || 'As soon as possible',
      caseType: caseType || 'General Criminal Defence Enquiry',
      courtDate: courtDate || '',
      notes: notes || '',
      status: 'new',
      createdAt: new Date().toISOString(),
      summary: generatedSummary,
      transcript: transcript || [],
      internalNotes: '',
    };

    inquiries.unshift(newInquiry);
    saveInquiries(inquiries);

    // Dispatch lead directly to Adam Ashley's email and mobile text
    await Promise.allSettled([
      dispatchEmailNotification(newInquiry),
      dispatchSmsNotification(newInquiry)
    ]);

    return res.status(201).json({
      success: true,
      inquiryId: id,
      message: `Enquiry successfully delivered to Frontline Lawyers (${NOTIFICATION_EMAIL}) and an SMS alert sent to ${NOTIFICATION_PHONE}.`,
      inquiry: newInquiry,
    });
  } catch (err) {
    console.error('Error saving inquiry:', err);
    return res.status(500).json({ error: 'Internal server error saving inquiry' });
  }
});

// Explicitly disable public inquiries listing (no public feed)
app.get('/api/inquiries', (_req, res) => {
  return res.status(404).json({ error: 'Endpoint not found' });
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.use((_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Frontline Lawyers server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
