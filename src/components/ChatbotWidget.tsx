import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Phone, 
  ShieldCheck, 
  User, 
  Calendar, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight,
  Maximize2,
  Minimize2,
  Lock,
  ArrowRight,
  Scale
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Executive Legal Concierge Emblem (Scales of Justice in gold & charcoal - completely non-AI)
function LegalConciergeBadge({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-9 h-9",
    lg: "w-10 h-10"
  }[size];

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-4.5 h-4.5",
    lg: "w-5 h-5"
  }[size];

  return (
    <div className={`relative flex-shrink-0 ${sizeClasses} rounded-full bg-charcoal-900 border border-gold-400/80 flex items-center justify-center shadow-md`}>
      <Scale className={`${iconSizes} text-gold-300`} />
      {/* Active Online Indicator */}
      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-charcoal-900 rounded-full" />
    </div>
  );
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
}

interface ChatbotWidgetProps {
  onInquirySubmitted?: () => void;
}

const QUICK_PROMPTS = [
  "Police requested an interview",
  "I have an upcoming court appearance",
  "DUI / Drink driving charge",
  "Urgent bail application",
  "Arrange consultation with partners"
];

// Completely hard-coded deterministic response generator (Zero AI, fully hard-coded into website)
function getHardcodedConciergeResponse(userInput: string): string {
  const lower = userInput.toLowerCase();

  // 1. Police interview / questioning / arrest / station / caution / silence
  if (
    lower.includes('police') || 
    lower.includes('interview') || 
    lower.includes('arrest') || 
    lower.includes('question') || 
    lower.includes('station') || 
    lower.includes('caution') || 
    lower.includes('erisp') ||
    lower.includes('statement') ||
    lower.includes('silence')
  ) {
    return "Under Section 89 of the Evidence Act and LEPRA, you are legally required to provide only your name, address, and driver licence (if driving). You have an absolute right to silence and are not required to participate in an electronically recorded interview (ERISP) or answer police questions. Anything you say will be recorded and used against you in court.\n\nNever attend a police interview unrepresented. Principal Counsel Adam Ashley attends police stations across Northern Rivers and South East Queensland to protect clients' rights. You should contact Frontline Lawyers before answering any questions.\n[SHOW_CONTACT_BUTTON]";
  }

  // 2. Court appearance / court date / summons / mention / trial
  if (
    lower.includes('court') || 
    lower.includes('date') || 
    lower.includes('summons') || 
    lower.includes('appear') || 
    lower.includes('mention') || 
    lower.includes('magistrate') || 
    lower.includes('judge') ||
    lower.includes('hearing')
  ) {
    return "At your first court mention, entering a plea without first having a criminal solicitor examine the full police brief of evidence can permanently prejudice your defence. Appearing unrepresented leaves you vulnerable to immediate convictions and severe penalties.\n\nFrontline Lawyers represents clients across local and magistrates courts from Tweed Heads, Byron Bay, and Lismore through to Southport, Coolangatta, and Brisbane. Contact our defence team to arrange representation.\n[SHOW_CONTACT_BUTTON]";
  }

  // 3. Drink driving / drug driving / DUI / PCA / licence / traffic / speeding
  if (
    lower.includes('traffic') || 
    lower.includes('dui') || 
    lower.includes('drink') || 
    lower.includes('drug driving') || 
    lower.includes('pca') || 
    lower.includes('license') || 
    lower.includes('licence') || 
    lower.includes('drive') || 
    lower.includes('driving') || 
    lower.includes('speed')
  ) {
    return "Drink driving (PCA) and drug driving offences carry mandatory licence disqualifications, interlock requirements, and criminal records under NSW and Queensland traffic laws. Technical challenges regarding breath analysis calibrations and roadside detention timelines require thorough legal scrutiny.\n\nDo not risk losing your licence and receiving a criminal record. Adam Ashley and our defence solicitors frequently defend driving charges and advocate for non-conviction outcomes across Northern Rivers and South East Queensland. Contact Frontline Lawyers to review your charge.\n[SHOW_CONTACT_BUTTON]";
  }

  // 4. Bail / remand / custody / lockup / show cause
  if (
    lower.includes('bail') || 
    lower.includes('remand') || 
    lower.includes('custody') || 
    lower.includes('lockup') || 
    lower.includes('show cause')
  ) {
    return "Under the Bail Act, strict 'Show Cause' provisions and 'unacceptable risk' tests apply. In the Local Court, an unrepresented applicant generally only gets one opportunity to apply for release; if refused, you may be remanded in custody for months awaiting trial.\n\nAdam Ashley provides urgent bail advocacy in Local, Magistrates, District, and Supreme Courts across NSW and Queensland. Contact Frontline Lawyers to discuss bail representation.\n[SHOW_CONTACT_BUTTON]";
  }

  // 5. Domestic violence / AVO / DVO / restraining order
  if (
    lower.includes('domestic') || 
    lower.includes('violence') || 
    lower.includes('avo') || 
    lower.includes('dvo') || 
    lower.includes('advo') || 
    lower.includes('restraining')
  ) {
    return "Domestic violence allegations and AVO / DVO applications trigger immediate court orders that can exclude you from your home and affect employment or child contact. Consenting to orders 'without admissions' still exposes you to criminal charges if any alleged breach occurs.\n\nOur solicitors represent clients in contested AVO hearings and negotiations across Northern Rivers and South East Queensland. Contact Frontline Lawyers to protect your position.\n[SHOW_CONTACT_BUTTON]";
  }

  // 6. Assault / affray / fighting / gbh / self defence
  if (
    lower.includes('assault') || 
    lower.includes('fight') || 
    lower.includes('punch') || 
    lower.includes('affray') || 
    lower.includes('wounding') || 
    lower.includes('gbh') || 
    lower.includes('self-defence') || 
    lower.includes('self defence')
  ) {
    return "Assault charges carry significant penalties and permanent criminal records. Under Australian law, you have the fundamental legal right to defend yourself or others using reasonable force, and the prosecution must disprove self-defence beyond reasonable doubt.\n\nCritical CCTV footage and witness evidence must be preserved promptly before it is overwritten. Do not give statements to police. Contact Frontline Lawyers to review the prosecution brief.\n[SHOW_CONTACT_BUTTON]";
  }

  // 7. Drug offences / possession / supply / deemed supply / cannabis / ice / cocaine
  if (
    lower.includes('drug') || 
    lower.includes('possession') || 
    lower.includes('supply') || 
    lower.includes('weed') || 
    lower.includes('cannabis') || 
    lower.includes('cocaine') || 
    lower.includes('ice')
  ) {
    return "Drug charges under NSW and Queensland legislation carry severe consequences, particularly where police apply 'deemed supply' provisions based on arbitrary weights. Search procedures, warrants, and police powers must be scrutinised for lawful reasonable suspicion.\n\nYou have an absolute right to silence. Do not provide passcodes or make statements regarding ownership. Contact Frontline Lawyers to review your case.\n[SHOW_CONTACT_BUTTON]";
  }

  // 8. Fees / costs / price / pricing / how much
  if (
    lower.includes('cost') || 
    lower.includes('fee') || 
    lower.includes('price') || 
    lower.includes('quote') || 
    lower.includes('rate') || 
    lower.includes('how much')
  ) {
    return "Frontline Lawyers offers transparent fee structures for standard court mentions, bail applications, sentence hearings, and police station attendances. For complex trials, we collaborate closely with Australia's leading criminal defence barristers.\n\nPlease provide your details below and our partners will review your matter and contact you to arrange an initial conference.\n[SHOW_CONTACT_BUTTON]";
  }

  // 9. Speak to partner / Adam Ashley / arrange consultation / appointment
  if (
    lower.includes('partner') || 
    lower.includes('adam') || 
    lower.includes('ashley') || 
    lower.includes('consult') || 
    lower.includes('appointment') || 
    lower.includes('speak') || 
    lower.includes('call') || 
    lower.includes('conference')
  ) {
    return "To speak with one of the partners at Frontline Lawyers, we invite you to contact us via our Contact form.\n\nOnce we have reviewed your enquiry, we will contact you to arrange an initial conference, which can be conducted either in person or by video. You can also call us directly on 0421 066 608.\n[SHOW_CONTACT_BUTTON]";
  }

  // 10. Default response
  return "To speak with one of the partners at Frontline Lawyers, we invite you to contact us via our Contact form.\n\nOnce we have reviewed your enquiry, we will contact you to arrange an initial conference, which can be conducted either in person or by video. You can also call our direct defence line at 0421 066 608.\n[SHOW_CONTACT_BUTTON]";
}

export function ChatbotWidget({ onInquirySubmitted }: ChatbotWidgetProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTeaser, setShowTeaser] = useState(true);
  const [activeTab, setActiveTab] = useState<'chat' | 'contact'>('chat');
  
  // Chat state
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      role: 'assistant',
      content: "Welcome to Frontline Lawyers. I am your legal concierge.\n\nWhether you are facing police questioning, an upcoming court appearance, or urgent charges, our principal counsel Adam Ashley is here to protect your rights. How can we assist you today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Contact Form State (Direct in concierge widget)
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [urgency, setUrgency] = useState<'urgent' | 'high' | 'normal'>('normal');
  const [courtDate, setCourtDate] = useState('');
  const [caseType, setCaseType] = useState('Criminal Defence Enquiry');
  const [notes, setNotes] = useState('');
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<{ id: string; name: string } | null>(null);
  const [formError, setFormError] = useState('');

  // Auto scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && activeTab === 'chat') {
      scrollToBottom();
    }
  }, [messages, isOpen, activeTab]);

  // Handle dismiss teaser
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTeaser(false);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  // Listen for open-legal-chat events from other pages
  useEffect(() => {
    const handleOpenChat = (event: CustomEvent<{ message?: string }>) => {
      setIsOpen(true);
      setActiveTab('chat');
      if (event.detail?.message) {
        handleSendMessage(event.detail.message);
      }
    };

    window.addEventListener('open-legal-chat', handleOpenChat as EventListener);
    return () => {
      window.removeEventListener('open-legal-chat', handleOpenChat as EventListener);
    };
  }, [messages, isLoading]);

  // Completely hard-coded message handler (Zero AI, deterministic, fast)
  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInputText('');
    setIsLoading(true);

    // Natural brief response delay (300ms) with hardcoded lookup
    setTimeout(() => {
      const reply = getHardcodedConciergeResponse(text);
      setMessages(prev => [
        ...prev,
        {
          id: `concierge-${Date.now()}`,
          role: 'assistant',
          content: reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsLoading(false);
    }, 300);
  };

  // Submit Contact info with full conversation transcript to partners
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!fullName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!phone.trim()) {
      setFormError('Please provide a contact phone number.');
      return;
    }

    setIsSubmittingContact(true);

    // Format transcript for partners
    const transcriptPayload = messages.map(m => ({
      role: m.role,
      text: m.content,
      timestamp: m.timestamp
    }));

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName.trim(),
          phone: phone.trim(),
          email: email.trim(),
          urgency,
          courtDate: courtDate.trim(),
          caseType,
          notes: notes.trim(),
          transcript: transcriptPayload
        })
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit enquiry');
      }

      setSubmissionSuccess({ id: data.inquiryId, name: fullName });
      
      // Inject receipt into chat thread
      setMessages(prev => [
        ...prev,
        {
          id: `sys-receipt-${Date.now()}`,
          role: 'system',
          content: `Enquiry Ref #${data.inquiryId} Dispatched. Your contact info and complete chat transcript have been delivered to Frontline Lawyers. Our defence solicitors will review your matter and contact you to arrange an initial conference.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);

      if (onInquirySubmitted) {
        onInquirySubmitted();
      }
    } catch (err: unknown) {
      console.error('Submission error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Unable to dispatch details at this time. Please call 0421 066 608 directly.';
      setFormError(errorMessage);
    } finally {
      setIsSubmittingContact(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button & Teaser in Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Teaser Bubble (when closed) */}
        <AnimatePresence>
          {!isOpen && showTeaser && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="mb-3 max-w-xs bg-charcoal-900/95 backdrop-blur-md border border-gold-400/40 text-white rounded-xl p-3.5 shadow-2xl relative cursor-pointer group"
              onClick={() => {
                setIsOpen(true);
                setShowTeaser(false);
              }}
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTeaser(false);
                }}
                className="absolute -top-2 -right-2 bg-charcoal-800 text-gray-400 hover:text-white rounded-full p-1 border border-white/10"
                aria-label="Dismiss teaser"
              >
                <X className="w-3 h-3" />
              </button>
              <div className="flex items-start gap-3">
                <LegalConciergeBadge size="md" />
                <div>
                  <p className="text-xs font-semibold text-gold-400 flex items-center gap-1">
                    <Scale className="w-3.5 h-3.5 text-gold-300" />
                    Legal Concierge
                  </p>
                  <p className="text-xs text-neutral-200 mt-0.5 leading-snug">
                    Facing court or police questioning? Connect with our legal concierge to have our criminal defence partners review your matter.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Bubble Button */}
        {!isOpen && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setIsOpen(true);
              setShowTeaser(false);
            }}
            className="group relative flex items-center gap-3 bg-charcoal-950 border border-gold-400 text-white px-4 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.6)] hover:border-gold-300 transition-colors duration-200"
            aria-label="Open legal concierge chat"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-charcoal-900 border border-gold-400/40">
              <MessageSquare className="w-4 h-4 text-gold-400" />
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>

            <div className="relative text-left hidden sm:block pr-1">
              <span className="block text-xs font-bold uppercase tracking-wider text-white">
                Legal Concierge
              </span>
              <span className="block text-[10px] text-gold-400 font-medium">
                Confidential & Direct
              </span>
            </div>
          </motion.button>
        )}
      </div>

      {/* Expandable Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className={`fixed z-50 bg-charcoal-950 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden transition-all duration-300
              ${isExpanded 
                ? 'bottom-4 right-4 sm:right-6 w-[94vw] sm:w-[540px] h-[85vh] max-h-[820px] rounded-2xl' 
                : 'bottom-4 right-4 sm:right-6 w-[94vw] sm:w-[410px] h-[78vh] sm:h-[620px] max-h-[720px] rounded-2xl'
              }
            `}
          >
            {/* Header */}
            <div className="bg-charcoal-900 border-b border-white/10 px-4 py-3.5 flex items-center justify-between relative">
              <div className="flex items-center gap-3">
                <LegalConciergeBadge size="lg" />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-white tracking-wide">
                      Frontline Lawyers
                    </h3>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-gold-400/20 text-gold-300 border border-gold-400/30">
                      Concierge
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-300 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-gold-400" />
                    Legal Defence Assistant
                  </p>
                </div>
              </div>

              {/* Header Action Controls */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors hidden sm:block"
                  title={isExpanded ? "Collapse" : "Expand window"}
                  aria-label={isExpanded ? "Collapse window" : "Expand window"}
                >
                  {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sub-Header Navigation Tabs: Chat vs Direct Contact Info */}
            <div className="bg-charcoal-900/60 border-b border-white/10 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('chat')}
                  className={`text-xs px-3 py-1 rounded-full font-medium transition-all ${
                    activeTab === 'chat'
                      ? 'bg-gold-400 text-charcoal-950 font-bold shadow'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Live Chat
                </button>
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`text-xs px-3 py-1 rounded-full font-medium transition-all flex items-center gap-1 ${
                    activeTab === 'contact'
                      ? 'bg-gold-400 text-charcoal-950 font-bold shadow'
                      : 'text-gold-400 hover:text-gold-300 hover:bg-gold-400/10 border border-gold-400/30'
                  }`}
                >
                  <Phone className="w-3 h-3" />
                  Send Details to Counsel
                </button>
              </div>
            </div>

            {/* TAB CONTENT 1: CHAT */}
            {activeTab === 'chat' && (
              <div className="flex-1 flex flex-col overflow-hidden">
                {/* Confidentiality Notice */}
                <div className="bg-charcoal-900/40 border-b border-white/5 px-4 py-1.5 flex items-center justify-between text-[11px] text-gray-400">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3 h-3 text-gold-400" />
                    Strict Legal Professional Confidentiality
                  </span>
                  <a href="tel:0421066608" className="text-gold-400 hover:underline flex items-center gap-1 font-semibold">
                    <Phone className="w-3 h-3" /> 0421 066 608
                  </a>
                </div>

                {/* Message Thread */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-thin scrollbar-thumb-white/10">
                  {messages.map((msg) => {
                    if (msg.role === 'system') {
                      return (
                        <div key={msg.id} className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl p-3 text-xs text-emerald-300">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-semibold text-emerald-200">Enquiry Received by Partners</p>
                              <p className="mt-1 text-emerald-300/90 leading-relaxed">{msg.content}</p>
                              <p className="text-[10px] text-emerald-400/60 mt-1">{msg.timestamp}</p>
                            </div>
                          </div>
                        </div>
                      );
                    }

                    const isUser = msg.role === 'user';
                    const hasContactMarker = msg.content.includes('[SHOW_CONTACT_BUTTON]');
                    const cleanContent = msg.content.replace(/\[SHOW_CONTACT_BUTTON\]/g, '').trim();
                    const suggestsContact = !isUser && (
                      hasContactMarker ||
                      cleanContent.toLowerCase().includes('send your details') ||
                      cleanContent.toLowerCase().includes('send details') ||
                      cleanContent.toLowerCase().includes('contact counsel') ||
                      cleanContent.toLowerCase().includes('connect with counsel') ||
                      cleanContent.toLowerCase().includes('contact us via our contact form')
                    );

                    return (
                      <div
                        key={msg.id}
                        className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed ${
                            isUser
                              ? 'bg-neutral-800 border border-neutral-700 text-white font-medium rounded-br-none shadow-sm'
                              : 'bg-charcoal-800 border border-white/20 text-neutral-100 font-normal rounded-bl-none shadow-md'
                          }`}
                        >
                          <div className="whitespace-pre-wrap">{cleanContent}</div>

                          {!isUser && suggestsContact && (
                            <div className="mt-3 pt-2.5 border-t border-white/15 flex flex-col gap-1.5">
                              <button
                                type="button"
                                onClick={() => setActiveTab('contact')}
                                className="inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-500 text-charcoal-950 font-bold text-xs px-3.5 py-2 rounded-xl transition-colors shadow-sm w-full sm:w-auto"
                              >
                                <FileText className="w-3.5 h-3.5 text-charcoal-950" />
                                <span>Send Details to Counsel</span>
                                <ChevronRight className="w-3.5 h-3.5 text-charcoal-950" />
                              </button>
                            </div>
                          )}
                        </div>
                        <span className="text-[10px] text-neutral-400 mt-1 px-1 font-medium">
                          {isUser ? 'You' : 'Defence Concierge'} • {msg.timestamp}
                        </span>
                      </div>
                    );
                  })}

                  {/* Typing Indicator */}
                  {isLoading && (
                    <div className="flex items-center gap-2 text-xs text-gray-400 py-2 px-3 bg-charcoal-900 rounded-2xl w-fit border border-white/10">
                      <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                      <span className="text-[11px] text-gray-400 ml-1">Consulting practice resources...</span>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Prompts Bar (when conversation is short) */}
                {messages.length <= 3 && !isLoading && (
                  <div className="px-4 py-2 bg-charcoal-950 border-t border-white/5">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 mb-1.5">
                      Common Scenarios:
                    </p>
                    <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                      {QUICK_PROMPTS.map((prompt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(prompt)}
                          className="flex-shrink-0 text-[11px] bg-charcoal-900 hover:bg-gold-400/20 text-neutral-300 hover:text-gold-300 border border-white/10 hover:border-gold-400/40 px-2.5 py-1 rounded-full transition-colors"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Chat Input Bar */}
                <div className="p-3 bg-charcoal-900 border-t border-white/10">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendMessage();
                    }}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="Describe your legal matter or question..."
                      disabled={isLoading}
                      className="flex-1 bg-charcoal-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={!inputText.trim() || isLoading}
                      className="bg-gold-400 hover:bg-gold-500 disabled:opacity-40 disabled:hover:bg-gold-400 text-charcoal-950 p-2.5 rounded-xl font-bold transition-colors flex items-center justify-center flex-shrink-0"
                      aria-label="Send message"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </form>

                  {/* Prompt to send contact details */}
                  <div className="mt-2 flex items-center justify-between text-[11px] text-gray-400 px-1">
                    <span>Need Frontline Lawyers to review this?</span>
                    <button
                      type="button"
                      onClick={() => setActiveTab('contact')}
                      className="text-gold-400 hover:text-gold-300 font-medium flex items-center gap-1 transition-colors"
                    >
                      Add Contact Info <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 2: SEND CONTACT INFO & TRANSCRIPT DIRECTLY */}
            {activeTab === 'contact' && (
              <div className="flex-1 overflow-y-auto p-4 sm:p-5 flex flex-col bg-charcoal-950">
                {submissionSuccess ? (
                  <div className="my-auto text-center py-6 px-4 bg-charcoal-900 border border-gold-400/30 rounded-2xl">
                    <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3 border border-emerald-500/30">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono tracking-widest text-gold-400 bg-gold-400/10 px-2 py-0.5 rounded border border-gold-400/20">
                      REF #{submissionSuccess.id}
                    </span>
                    <h4 className="text-base font-serif font-bold text-white mt-2">
                      Enquiry Transmitted to Frontline Lawyers
                    </h4>
                    <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                      Thank you, <span className="text-white font-medium">{submissionSuccess.name}</span>. Your case details and conversation transcript have been dispatched directly to the partners at Frontline Lawyers.
                    </p>
                    <div className="mt-4 p-3 bg-charcoal-950 rounded-xl border border-white/5 text-left text-xs text-gray-400">
                      <p className="font-semibold text-gray-200 mb-1">Next Steps:</p>
                      <ul className="list-disc pl-4 space-y-1">
                        <li>Our partners will review your enquiry details.</li>
                        <li>We will contact you at {phone} to arrange an initial conference.</li>
                        <li>Do not participate in any police interviews before we speak.</li>
                      </ul>
                    </div>

                    <div className="mt-5 flex gap-2 justify-center">
                      <button
                        onClick={() => {
                          setSubmissionSuccess(null);
                          setActiveTab('chat');
                        }}
                        className="bg-gold-400 text-charcoal-950 hover:bg-gold-500 text-xs font-bold px-4 py-2 rounded-lg transition-colors"
                      >
                        Return to Chat
                      </button>
                      <a
                        href="tel:0421066608"
                        className="bg-charcoal-800 text-white hover:bg-charcoal-700 border border-white/10 text-xs font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-gold-400" />
                        Call Now
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
                        <FileText className="w-4 h-4" />
                        Direct Contact Form
                      </div>
                      <h4 className="text-sm font-serif font-bold text-white mt-1">
                        Send Details & Arrange Initial Conference
                      </h4>
                      <p className="text-[11px] text-gray-400 mt-0.5 leading-relaxed">
                        To speak with one of the partners at Frontline Lawyers, provide your details below. Once we have reviewed your enquiry, we will contact you to arrange an initial conference.
                      </p>
                    </div>

                    {formError && (
                      <div className="p-2.5 bg-red-950/40 border border-red-500/40 rounded-xl text-xs text-red-300 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
                        <span>{formError}</span>
                      </div>
                    )}

                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-gray-300 font-semibold mb-1">
                        Full Name <span className="text-gold-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Marcus Vance"
                          className="w-full bg-charcoal-900 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gold-400"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-gray-300 font-semibold mb-1">
                        Phone Number <span className="text-gold-400">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 0421 066 608"
                          className="w-full bg-charcoal-900 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gold-400"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-gray-300 font-semibold mb-1">
                        Email Address <span className="text-gold-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. contact@domain.com"
                        className="w-full bg-charcoal-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gold-400"
                      />
                    </div>

                    {/* Urgency */}
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setUrgency('urgent')}
                        className={`text-center py-2 px-1 rounded-xl text-[11px] font-semibold border transition-all ${
                          urgency === 'urgent'
                            ? 'bg-red-950/60 border-red-500 text-red-200 ring-1 ring-red-500/50'
                            : 'bg-charcoal-900 border-white/10 text-gray-400 hover:text-white'
                        }`}
                      >
                        <span className="block font-bold">Urgent</span>
                        <span className="text-[9px] text-gray-400">Within hours</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setUrgency('high')}
                        className={`text-center py-2 px-1 rounded-xl text-[11px] font-semibold border transition-all ${
                          urgency === 'high'
                            ? 'bg-amber-950/60 border-amber-500 text-amber-200 ring-1 ring-amber-500/50'
                            : 'bg-charcoal-900 border-white/10 text-gray-400 hover:text-white'
                        }`}
                      >
                        <span className="block font-bold">Today</span>
                        <span className="text-[9px] text-gray-400">Same day</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setUrgency('normal')}
                        className={`text-center py-2 px-1 rounded-xl text-[11px] font-semibold border transition-all ${
                          urgency === 'normal'
                            ? 'bg-charcoal-800 border-gold-400 text-gold-300 ring-1 ring-gold-400/50'
                            : 'bg-charcoal-900 border-white/10 text-gray-400 hover:text-white'
                        }`}
                      >
                        <span className="block font-bold">Standard</span>
                        <span className="text-[9px] text-gray-400">Next business day</span>
                      </button>
                    </div>

                    {/* Court Date & Matter Type in row */}
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-gray-300 font-semibold mb-1">
                          Court Date <span className="text-gray-500 text-[10px]">(If any)</span>
                        </label>
                        <div className="relative">
                          <Calendar className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2.5" />
                          <input
                            type="text"
                            value={courtDate}
                            onChange={(e) => setCourtDate(e.target.value)}
                            placeholder="e.g. 24 Oct / Next Tue"
                            className="w-full bg-charcoal-900 border border-white/10 rounded-xl pl-8 pr-2 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gold-400"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-gray-300 font-semibold mb-1">
                          Matter Category
                        </label>
                        <select
                          value={caseType}
                          onChange={(e) => setCaseType(e.target.value)}
                          className="w-full bg-charcoal-900 border border-white/10 rounded-xl px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-gold-400"
                        >
                          <option value="Police Interview / Arrest">Police Interview / Station</option>
                          <option value="Court Attendance Notice">Court Appearance</option>
                          <option value="Bail Application">Bail Application</option>
                          <option value="Drink Driving / Traffic">DUI / Traffic Offence</option>
                          <option value="Drug Charges">Drug Charges</option>
                          <option value="Assault / Violence">Assault Allegations</option>
                          <option value="Other Criminal Matter">Other Matter</option>
                        </select>
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-gray-300 font-semibold mb-1">
                        Brief Note / Location
                      </label>
                      <textarea
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="e.g. Tweed Heads Police Station, court date next week..."
                        className="w-full bg-charcoal-900 border border-white/10 rounded-xl p-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gold-400 resize-none"
                      />
                    </div>

                    {/* Conversation Packaging Notice */}
                    <div className="bg-charcoal-900/90 border border-gold-400/30 rounded-xl p-3 flex items-start gap-2 text-xs">
                      <Scale className="w-4 h-4 text-gold-300 flex-shrink-0 mt-0.5" />
                      <div className="text-[11px] text-gray-300">
                        <span className="font-semibold text-white">Full Context Included:</span> All {messages.length} messages from your current chat will be securely sent to our partners so you won't have to repeat your story.
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmittingContact}
                      className="w-full bg-gold-400 hover:bg-gold-500 text-charcoal-950 font-bold py-3 rounded-xl text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                    >
                      {isSubmittingContact ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-charcoal-950 border-t-transparent rounded-full animate-spin"></span>
                          <span>Dispatching to Counsel...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Details to Frontline Lawyers</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
