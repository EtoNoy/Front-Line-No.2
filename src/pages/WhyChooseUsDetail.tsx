import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Shield, Target, Scale, Users, MessageSquare, MapPin } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { EmergencyBanner } from '../components/EmergencyBanner';

export function WhyChooseUsDetail() {
  return (
    <div className="min-h-screen bg-charcoal-950 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-24">
        <EmergencyBanner />
        
        <section className="py-16 lg:py-24 bg-charcoal-900 border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-300 hover:text-white transition-colors mb-10 font-bold">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">WHY CHOOSE US</h1>
              <div className="w-24 h-1.5 bg-gold-400 mb-8 rounded-full"></div>
              
              <div className="space-y-8">
                <p className="text-xl text-neutral-100 font-normal leading-relaxed">
                  Facing police charges or an upcoming court mention is one of the most stressful events of your life. Frontline Lawyers delivers uncompromising criminal defence grounded in deep local courtroom insight, fearless cross-examination, and direct access to Australia's premier trial advocates.
                </p>

                <div className="space-y-10">
                  <div className="p-6 bg-charcoal-800/90 border border-white/15 rounded-sm">
                    <h3 className="text-2xl font-serif text-white mb-3 flex items-center gap-3">
                      <MessageSquare className="w-6 h-6 text-gold-300 shrink-0" />
                      Community Trust & Respected Local Reputation
                    </h3>
                    <p className="text-neutral-200 text-base leading-relaxed">
                      We are deeply embedded in the Northern Rivers and South East Queensland communities. The vast majority of our clients come to us through personal recommendations from former clients, families, and professionals who know our track record in court. From our primary base in Murwillumbah through to Tweed Heads, Kingscliff, Byron Bay, Ballina, Lismore, Mullumbimby, Casino, and up to Coolangatta, Southport, Surfers Paradise, Burleigh Heads, and Brisbane, our reputation precedes us.
                    </p>
                  </div>

                  <div className="p-6 bg-charcoal-800/90 border border-white/15 rounded-sm">
                    <h3 className="text-2xl font-serif text-white mb-3 flex items-center gap-3">
                      <Scale className="w-6 h-6 text-gold-300 shrink-0" />
                      Elite Barrister Network & Senior Counsel Alliances
                    </h3>
                    <p className="text-neutral-200 text-base leading-relaxed">
                      We maintain exceptional professional connections with Australia’s leading criminal defence barristers—including King's Counsel (KC), Senior Counsel (SC), and specialist trial barristers across the New South Wales and Queensland Bars. Whether your matter involves an urgent Supreme Court bail application, complex drug trial, or multi-week jury hearing, our close working alliances ensure your defence has the most formidable legal firepower assembled.
                    </p>
                  </div>

                  <div className="p-6 bg-charcoal-800/90 border border-white/15 rounded-sm">
                    <h3 className="text-2xl font-serif text-white mb-3 flex items-center gap-3">
                      <Target className="w-6 h-6 text-gold-300 shrink-0" />
                      Proactive Defence & Evidence Auditing
                    </h3>
                    <p className="text-neutral-200 text-base leading-relaxed">
                      We do not passively wait for court dates. We actively investigate, demand early disclosure of body-worn footage, examine search warrant legality under LEPRA and PPRA, and issue subpoenas to dismantle the prosecution brief early. This proactive strategy frequently leads to charges being withdrawn or downgraded before trial.
                    </p>
                  </div>

                  <div className="p-6 bg-charcoal-800/90 border border-white/15 rounded-sm">
                    <h3 className="text-2xl font-serif text-white mb-3 flex items-center gap-3">
                      <Users className="w-6 h-6 text-gold-300 shrink-0" />
                      Direct Representation by Principal Counsel
                    </h3>
                    <p className="text-neutral-200 text-base leading-relaxed">
                      Your liberty is never handed off to junior associates or unqualified clerks. Principal Lawyer Adam Ashley (recognized in Doyle's Guide) personally directs your defence strategy and represents you at critical junctures, giving you the direct benefit of seasoned courtroom experience.
                    </p>
                  </div>

                  <div className="p-6 bg-charcoal-800/90 border border-white/15 rounded-sm">
                    <h3 className="text-2xl font-serif text-white mb-3 flex items-center gap-3">
                      <Shield className="w-6 h-6 text-gold-300 shrink-0" />
                      Strict Professional Discretion & Confidentiality
                    </h3>
                    <p className="text-neutral-200 text-base leading-relaxed">
                      We manage sensitive and high-profile allegations out of the public spotlight. Your career, commercial standing, and family privacy are guarded with rigorous confidentiality from your very first contact.
                    </p>
                  </div>
                </div>
                
                {/* Regional Jurisdiction Box */}
                <div className="p-8 bg-charcoal-950 border-2 border-gold-400 rounded-sm">
                  <div className="flex items-center gap-2 text-gold-300 text-xs font-bold uppercase tracking-widest mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>Cross-Border NSW & Queensland Coverage</span>
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-3">Secure Your Legal Defence Today</h3>
                  <p className="text-neutral-200 text-sm leading-relaxed mb-4">
                    Providing urgent representation across Tweed Heads, Kingscliff, Murwillumbah, Byron Bay, Ballina, Lismore, Mullumbimby, Ocean Shores, Pottsville, Casino, Kyogle, Southport, Coolangatta, Surfers Paradise, Burleigh Heads, Robina, Broadbeach, Beenleigh, and Brisbane.
                  </p>
                  <p className="text-white text-sm font-semibold mb-6">
                    Exercise your right to silence. Never make statements to police without legal counsel present.
                  </p>
                  <a 
                    href="tel:0421066608" 
                    className="inline-flex items-center justify-center gap-3 bg-gold-400 hover:bg-gold-500 text-charcoal-950 px-8 py-4 text-xs font-bold tracking-widest uppercase transition-colors shadow-lg"
                  >
                    <Phone className="w-4 h-4" /> 
                    <span>Call 0421 066 608 Now</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
