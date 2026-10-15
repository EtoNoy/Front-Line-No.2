import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function TermsOfServicePage() {
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
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Terms of Service</h1>
            <p className="text-neutral-400">Effective Date: May 23, 2026. Review Period: Annual.</p>
          </div>

          <div className="prose prose-invert prose-gold max-w-none text-neutral-300 font-light space-y-8 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">1. Contractual Bindings and Acceptance</h2>
              <p>
                By accessing, browsing, interacting with, or inputting data into this website (referred to as "the Site"), you enter into a legally binding agreement to comply with the terms, conditions, notices, and rules outlined in this document (referred to as "the Terms"). If you do not accept these Terms, you must stop using the Site immediately.
              </p>
              <p>
                We reserve the right, at our absolute discretion, to revise, modify, or replace any part of these Terms without prior notice. Any updates will take effect immediately upon being posted on this page. Your continued use of the Site represents your acceptance of those updates.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">2. Exclusion of Solicitor-Client Relationship</h2>
              <p className="text-red-400 font-normal border-l-2 border-red-500 pl-4">
                <strong>No legal representation or solicitor-client contract exists between you and the Firm purely by virtue of your access to the Site, transmission of webforms, direct calls, emails, or receipt of general statutory explanations.</strong>
              </p>
              <p>
                We do not accept representation duties over any legal matter until:
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-neutral-400">
                <li>
                  We have conducted a thorough, formal conflict-of-interest check within our existing systems.
                </li>
                <li>
                  We have officially accepted your case and issued a detailed formal Costs Agreement under the <em>Legal Profession Uniform Law (NSW)</em> or equivalent state framework.
                </li>
                <li>
                  A formal, written retainer or contract documents are physically or digitally executed by both the client and Adam Ashley or an authorized representative of Frontline Lawyers.
                </li>
              </ol>
              <p>
                Please do not transmit confidential information through this website's contact forms unless we have formally confirmed in writing that we represent you. Any unilateral data submitted prior to this confirmation may not be protected by solicitor-client privilege.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">3. Informational Nature of Web Materials</h2>
              <p>
                All informational materials, checklists, sub-articles, court locations, guides, and pages displayed on the Site are provided for general educational purposes within the States of New South Wales (NSW) and Queensland (QLD), Australia.
              </p>
              <p>
                The information provided is not tailored legal advice, and you should not rely on it as a substitute for professional legal advice. Laws change quickly, and static website content may not reflect recent legislative updates, judicial rulings, or changes to court procedures. You use this informational content entirely at your own risk.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">4. Acceptable Conduct and Submission Restrictions</h2>
              <p>
                By using the Site, you agree not to engage in any behavior that could compromise the platform's security or integrity. The following rules apply to your use of this Site:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-400">
                <li>
                  You must not submit misleading, fraudulent, vexatious, or malicious information through our booking portals or contact utilities.
                </li>
                <li>
                  You must not upload, inject, or transmit any malware, viruses, trojans, SQL injection scripts, or other destructive data aimed at disrupting the Site.
                </li>
                <li>
                  You must not use automated scripts, web scrapers, data miners, or bots to extract code, visual designs, assets, or text from this website without our prior written consent.
                </li>
                <li>
                  You must not use the contact information provided on this Site to distribute spam, promotional messages, or unsolicited advertising.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">5. Intellectual Property Safeguards</h2>
              <p>
                This website and its entire contents (including layouts, typography, logos, text, code, custom style metrics, domain designations, images, graphics, and illustrations) are protected by intellectual property laws.
              </p>
              <p>
                You are granted a limited, non-exclusive, non-transferable, and revocable license to access the Site for informational and non-commercial purposes. You must not copy, modify, distribute, reproduce, create derivative works from, or publicly display any part of this Site without the explicit written permission of Frontline Lawyers. All rights not explicitly granted are reserved by the Firm.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">6. High-Impact Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Frontline Lawyers, its managers, employees, barristers, consultants, and agents exclude all liability for any loss, damage, cost, expense, or inconvenience (including direct, indirect, incidental, special, or consequential damages) arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-400">
                <li>
                  Your reliance on, or use of, any informational content published on the Site.
                </li>
                <li>
                  Any transmission errors, communication failures, data loss, or server interruptions that occur while using our contact forms or booking systems.
                </li>
                <li>
                  Any malicious software, viruses, or cyber incidents that may affect your computer hardware or files as a result of accessing the Site.
                </li>
                <li>
                  Decisions made or actions taken by you or third parties in relation to police investigations, arrests, court filings, or bail requirements prior to officially retaining our services.
                </li>
              </ul>
              <p className="font-semibold text-white">
                Our liability is strictly limited by a scheme approved under Professional Standards Legislation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">7. Indemnity Provisions</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Frontline Lawyers, its principal advocates, staff, and representatives from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable legal costs) resulting from your violation of these Terms, your misuse of the Site, or your infringement of any third-party rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">8. Severability & Entire Agreement</h2>
              <p>
                If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, that specific provision will be modified to the minimum extent necessary to make it valid and enforceable. The remaining provisions will continue in full force and effect.
              </p>
              <p>
                These Terms constitute the entire agreement between you and Frontline Lawyers regarding your access to and use of our digital platforms, superseding any prior verbal agreements, promotional materials, or written proposals.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif text-white">9. Governing Jurisdiction and Law</h2>
              <p>
                These Terms and your use of the Site are governed by, and must be construed in accordance with, the laws of the State of New South Wales, Australia.
              </p>
              <p>
                By using this Site, you submit to the exclusive jurisdiction of the courts of New South Wales, Australia, and any appellate courts, for the resolution of any disputes or legal proceedings arising from these Terms or your use of this platform.
              </p>
            </section>

            <section className="space-y-3 border-t border-white/10 pt-8">
              <p className="text-sm font-semibold text-white">If you have any questions or require formal legal advice regarding a specific charge or matter, please contact us directly:</p>
              <p className="text-sm">
                Frontline Lawyers — Administrative Operations Office<br />
                Murwillumbah, Northern Rivers, NSW, Australia<br />
                Telephone: <a href="tel:0421066608" className="text-gold-400 hover:underline">0421 066 608</a><br />
                Email: <a href="mailto:adam@frontlinelaw.com" className="text-gold-400 hover:underline">adam@frontlinelaw.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
