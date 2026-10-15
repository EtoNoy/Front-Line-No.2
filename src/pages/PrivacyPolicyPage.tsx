import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-charcoal-950 font-sans selection:bg-gold-500/30 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-gold-400 hover:text-white transition-colors text-xs tracking-widest uppercase font-bold mb-12">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="mb-12 border-b border-white/10 pb-8">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Privacy Policy</h1>
            <p className="text-neutral-400">Effective Date: May 23, 2026. Review Period: Annual.</p>
          </div>

          <div className="prose prose-invert prose-gold max-w-none text-neutral-300 font-light space-y-8 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">1. Statement of Commitment</h2>
              <p>
                Frontline Lawyers (referred to in this document as "the Firm", "we", "us", or "our") has established this Privacy Policy to ensure the secure, confidential, and compliant management of all personal and sensitive information gathered from clients, prospective clients, and general visitors to our digital platforms.
              </p>
              <p>
                We conform strictly to the Australian Privacy Principles (APPs) as set forth in the <em>Privacy Act 1988</em> (Cth), alongside appropriate professional regulatory framework guidelines mandated by the Law Society of New South Wales, the Queensland Law Society, and the Legal Profession Uniform Law. Your privacy is not merely a digital design consideration; it is integrated into our professional obligation as Legal Practitioners.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">2. Scope of Information Gathered</h2>
              <p>
                The nature of relationship-based criminal defense and advocacy demands the processing of complex information. Depending on the depth of your communication with us, we may collect the following classes of data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-400">
                <li>
                  <strong className="text-white">Identity Credentials:</strong> Full legal name, title, date of birth, proof of identification (e.g., driver's licenses, passports, or government-issued identities).
                </li>
                <li>
                  <strong className="text-white">Contact Anchors:</strong> Residential addresses, billing addresses, direct telephone contacts, secure personal email addresses, and alternative family contacts.
                </li>
                <li>
                  <strong className="text-white">Case-Related Legal Matter Data:</strong> Court indexes, charging sheets, police statements, summons, current bail configurations, historical offense profiles, and ongoing law enforcement communications.
                </li>
                <li>
                  <strong className="text-white">Sensitive Information:</strong> By nature of our duties, we may collect sensitive data as defined under Section 6 of the Privacy Act, including but not limited to racial or ethnic origins, political beliefs, trade union memberships, physical or psychiatric medical histories, substance rehabilitation profiles, and criminal records.
                </li>
                <li>
                  <strong className="text-white">Digital Telemetry:</strong> Network IP addresses, geographical location data derived from browsing sessions, referrer sources, search terms used, browser types, and behavioral patterns mapped on our web portal via standard non-tracking or diagnostic cookies.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">3. Collection Methodologies</h2>
              <p>
                We execute collection efforts transparently, utilizing fair and lawful processes. You directly supply the vast majority of our analytical material. Instances of information ingestion include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-400">
                <li>
                  Direct submission of form elements on this website, including consultation booking utilities, direct contact pages, and contact portals.
                </li>
                <li>
                  Direct conversations with our representing advocates, either via authenticated telephone setups, private emails, or in-person legal diagnostic services.
                </li>
                <li>
                  Transmission of official letters from prosecution agencies, police officers, government courts, correction facilities, and judicial administrators.
                </li>
                <li>
                  Referrals from designated community care units, mental health support staff, or family members seeking representation on your direct instruction.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">4. Underlying Purpose of Ingestion</h2>
              <p>
                We strictly limit the application of personal data. Your details are accessed and deployed for the following key purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-400">
                <li>
                  Evaluating the viability of representation, reviewing conflict-of-interest databases, and preparing comprehensive representation pathways.
                </li>
                <li>
                  Constructing active court-room defense strategies, filing legal motions, drafting petitions, and advocating at correctional jurisdictions.
                </li>
                <li>
                  Issuing administrative communications, updates to service agreements, and standard corporate accounting.
                </li>
                <li>
                  Fulfilling regulatory, anti-money laundering, and compliance tasks required by the legal service boards of both NSW and Queensland.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">5. Client Confidentiality & Legal Professional Privilege</h2>
              <p>
                As an accredited legal practice, our collection of contact profiles and client information transitions beyond standard corporate privacy models. Most communications aimed at seeking, formulating, or receiving advice are legally shielded under <strong className="text-white">Legal Professional Privilege</strong>.
              </p>
              <p>
                Unlike standard digital environments, information covered under privilege cannot be requested by state police forces, regulatory boards, or opposing litigation forces without your explicit and voluntary waiving of this right. This privilege is held by you, and we guard it continuously.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">6. Sharing and Third-Party Disclosures</h2>
              <p>
                Frontline Lawyers will never trade, lease, or distribute your email database lists or personal profiles to marketing firms. We only share information with third parties when it is essential for your case, or legally mandated, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-400">
                <li>
                  Authorized Barristers or specialized Counsel engaged to co-defend your matters in higher courts.
                </li>
                <li>
                  Duly authorized medical professionals, professional psychologists, or forensic experts tasked with producing evaluations for court presentation.
                </li>
                <li>
                  Court officials, registers, and processing administrators during filing motions.
                </li>
                <li>
                  Other parties where you have granted written authority, or where we are forced under statutory subpoena.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">7. Secure Storage and Digital Safeguards</h2>
              <p>
                We employ robust physical, administrative, and technological barriers to secure database entries against loss, alteration, or illegitimate intrusion.
              </p>
              <p>
                These safeguards include state-of-the-art server-side end-to-end encryption, strict user-access audits, network firewalls, and air-gapped archives for sensitive client paperwork. All offline case files are safely housed in locked high-security filing facilities with physical surveillance.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">8. Retention and Systematic Disposal</h2>
              <p>
                According to state directives and statutory criteria, client records must be kept for a minimum of <strong className="text-white">seven (7) years</strong> following the formal closure of a legal matter.
              </p>
              <p>
                Once this timeframe passes and we determine there is no ongoing legal reason to keep the records, files are systematically destroyed using high-level physical cross-cut shredding services and secure digital partition wiping.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">9. Access and Dispute Resolutions</h2>
              <p>
                Under individual provisions of the APPs, you have the right to request a formal copy of the personal information we hold about you. You can also request corrections to any errors or outdated fields in your file.
              </p>
              <p>
                If you believe your privacy has been handled incorrectly, please contact our designated privacy officer at the email address provided below. If we are unable to resolve your concern internally, you can escalate your complaint to the Office of the Australian Information Commissioner (OAIC).
              </p>
            </section>

            <section className="space-y-4 border-t border-white/10 pt-8">
              <h2 className="text-2xl font-serif text-white">10. Contact Information</h2>
              <p>
                Please address all queries or requests regarding this Privacy Policy to our Principal Lawyer:
              </p>
              <div className="bg-white/5 border border-white/10 p-6 rounded-sm text-sm space-y-2">
                <p className="font-serif text-white text-base">Frontline Lawyers — Privacy Division</p>
                <p>Attention: Privacy Compliance Officer</p>
                <p>Email: <a href="mailto:adam@frontlinelaw.com" className="text-gold-400 hover:underline">adam@frontlinelaw.com</a></p>
                <p>Jurisdiction: Northern Rivers, NSW, Australia</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
