import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight, ShieldAlert } from 'lucide-react';

const faqs = [
  {
    q: "Do I really need a lawyer, or can I represent myself?",
    a: "The criminal justice system is adversarial and heavily stacked against unrepresented defendants. Appearing alone against seasoned police prosecutors or the Director of Public Prosecutions puts your freedom, driving licence, and employment at immediate risk. Frontline Lawyers knows the procedural rules, how to challenge prosecution evidence under the Evidence Act, and how to negotiate effectively to protect your rights from day one."
  },
  {
    q: "The police want to interview me. What should I do?",
    a: "Do not participate in a police interview. Under Section 89 of the Evidence Act, you have an absolute right to silence. Anything you say in a recorded interview (ERISP) will be used to build a case against you. Contact Frontline Lawyers immediately so our solicitors can advise you on your rights, speak directly with the investigating officers, and attend the station on your behalf."
  },
  {
    q: "What is the difference between pleading guilty and going to trial?",
    a: "Pleading guilty means formal admission of the offence, allowing the magistrate or judge to proceed directly to sentencing. Contesting charges forces the prosecution to prove every statutory element beyond all reasonable doubt. Entering an unadvised guilty plea forfeits your defences and can trigger automatic convictions or custodial sentences. Never enter a plea until Frontline Lawyers has audited the full police brief of evidence."
  },
  {
    q: "How does Frontline Lawyers structure fees?",
    a: "We operate on transparent, upfront fixed-fee arrangements for Local Court appearances, bail applications, sentence hearings, and police station attendances, as well as clear cost agreements for complex trials. We also work closely with Australia's premier criminal defence barristers. Your future is invaluable, and our transparent pricing provides complete certainty without hidden surprises."
  },
  {
    q: "Will a criminal conviction affect my employment or international travel?",
    a: "Yes. A recorded criminal conviction can permanently exclude you from corporate employment, government roles, security and working-with-children licences, and result in immediate visa denials for travel to the US, UK, and Canada. We relentlessly advocate for non-conviction dismissals (such as Section 10 Dismissals and Conditional Release Orders) to ensure our clients' clean records remain intact."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-charcoal-950 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold-400/15 border border-gold-400/30 px-3.5 py-1 rounded-full mb-4">
            <ShieldAlert className="w-4 h-4 text-gold-300" />
            <span className="text-gold-300 font-bold tracking-widest uppercase text-xs">Rights & Court FAQs</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-serif text-white">Frequently Asked Questions</h3>
          <p className="text-neutral-200 text-sm mt-3 max-w-xl mx-auto">
            Important legal rights context. This information is general awareness and does not constitute legal advice.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-white/15 overflow-hidden bg-charcoal-900 rounded-sm"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-base sm:text-lg font-serif text-white font-medium pr-4">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gold-300 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 pb-6 pt-1 text-neutral-100 text-sm sm:text-base font-normal leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* View More FAQs CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/faqs"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-gold-400 hover:bg-gold-500 text-charcoal-950 uppercase tracking-widest text-xs font-bold transition-all duration-300 shadow-lg group rounded-sm"
          >
            <span>Explore more FAQ's</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
