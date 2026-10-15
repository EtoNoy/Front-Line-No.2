import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function DisclaimerPage() {
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
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Legal Disclaimer</h1>
            <p className="text-neutral-300">Effective Date: May 23, 2026. Review Period: Annual.</p>
          </div>

          <div className="prose prose-invert prose-gold max-w-none text-neutral-100 font-normal space-y-8 leading-relaxed">
            <p className="text-xl text-neutral-200 font-normal">
              Please read this Legal Disclaimer carefully before using, reading, or acting upon any informational resources, articles, case summaries, or checklists provided on this website.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">1. Not Legal Advice</h2>
              <p>
                The content, information, and publications displayed on this website are provided strictly for general informational, educational, and resource purposes. They do not constitute formal legal advice, tailored case planning, or professional legal opinions.
              </p>
              <p>
                Criminal law is highly complex and depends heavily on the specific facts and circumstances of each individual case. Minor variations in police procedures, evidence, or personal backgrounds can completely alter the appropriate legal strategy. You must not act or refrain from acting based on any content read on this Site. We strongly advise that you seek professional, personalized legal counsel regarding your specific situation before making any decisions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">2. No Solicitor-Client Relationship formed</h2>
              <p>
                Accessing this website, reading its pages, or initiating contact with Frontline Lawyers via email, phone, text message, or web form does not establish a solicitor-client relationship between you and our Firm.
              </p>
              <p>
                A formal solicitor-client relationship is only created when you have completed our enquiry process, we have confirmed we have no conflicts of interest, and both parties have signed a formal Costs Agreement & Retainer in accordance with applicable state laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">3. Information Accuracy and Updates</h2>
              <p>
                While we make every effort to ensure the information on this website is accurate and up to date, laws in New South Wales, Queensland, and Australia are subject to frequent and unexpected changes.
              </p>
              <p>
                As a result, some content on this Site may not reflect the most recent legislative amendments, court decisions, sentencing guidelines, or police policies. Frontline Lawyers makes no guarantees, representations, or warranties (express or implied) regarding the accuracy, completeness, currency, or reliability of any information displayed on this website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">4. Past Case Results and Outcomes</h2>
              <p>
                Any summaries of past cases, client reviews, testimonials, or legal results mentioned on this website are intended solely to illustrate our experience and our dedication to our work.
              </p>
              <p>
                These outcomes do not guarantee, promise, or predict similar results for your own case. Every legal matter involves a unique set of facts, evidence, and judicial considerations, and must be evaluated on its own independent merits.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">5. Statutory Limitation of Liability</h2>
              <p className="font-semibold text-white">
                Liability is limited by a scheme approved under Professional Standards Legislation.
              </p>
              <p>
                Our professional liability is strictly capped in accordance with professional schemes approved under the state legislation of New South Wales, Queensland, and other applicable Australian jurisdictions. Our legal practitioners maintain valid professional indemnity insurance policies required by regional licensing boards.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">6. External Links and Third-Party Resources</h2>
              <p>
                This website may contain links to third-party web portals, government websites, legal directories, or external databases (such as Doyle's Guide). These links are provided solely for your convenience.
              </p>
              <p>
                Frontline Lawyers does not control, supervise, endorse, or verify the content of these external websites. We are not responsible for the privacy practices, terms of use, or accuracy of the information found on third-party platforms. Your use of external links is entirely at your own risk.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">7. Security of Electronic Communications</h2>
              <p>
                While we use secure servers and standard encryption, the transmission of information over the internet is never entirely secure.
              </p>
              <p>
                Unencrypted emails or contact form submissions may be intercepted by unauthorized third parties. Frontline Lawyers is not liable for any breaches of confidentiality, interceptions, or data security incidents that occur when communicating with us electronically prior to securing our formal representation services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">8. Licensing and Jurisdiction</h2>
              <p>
                Adam Ashley is admitted as a legal practitioner in the Supreme Court of New South Wales and is authorized to practice throughout Australia.
              </p>
              <p>
                Our legal practice focuses primarily on criminal defense matters within the courts of New South Wales and Queensland. This website is not intended to advertise or solicit legal services in any jurisdiction where our practitioners are not licensed or authorized to practice.
              </p>
            </section>

            <section className="space-y-4 border-t border-white/10 pt-8">
              <h2 className="text-2xl font-serif text-white">9. Urgent Legal Advice Warning</h2>
              <p className="text-red-400 font-normal">
                If you have been arrested, are currently in police custody, have had your bail refused, are facing an active police interview, or have a critical court deadline, you must not rely on online resources to manage your situation.
              </p>
              <p>
                Please contact a qualified criminal defense attorney immediately to obtain urgent legal representation and protect your rights. Our crisis consultation contact line is available directly at:
              </p>
              <div className="bg-white/5 border border-white/10 p-6 rounded-sm text-sm space-y-2 mt-4">
                <p className="font-serif text-white text-base">Frontline Lawyers — Immediate Consultation</p>
                <p>Telephone Hotline: <a href="tel:0421066608" className="text-gold-400 font-bold hover:underline">0421 066 608</a></p>
                <p>Email Enquiry: <a href="mailto:adam@frontlinelaw.com" className="text-gold-400 hover:underline">adam@frontlinelaw.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
