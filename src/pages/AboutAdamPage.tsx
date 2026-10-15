import { Link } from 'react-router-dom';
import { ArrowLeft, Award, ExternalLink, Shield, Phone, Scale, MapPin } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { EmergencyBanner } from '../components/EmergencyBanner';
// @ts-ignore
import adamAshleyPhoto from '../assets/images/adamashleyphoto.jpeg';
// @ts-ignore
import dg2023 from '../assets/images/DG Doyles Guide 2023 no. 2.png';
// @ts-ignore
import dg2024 from '../assets/images/DG 2024.png';
// @ts-ignore
import dg2025 from '../assets/images/DG 2025.png';
// @ts-ignore
import dg2026 from '../assets/images/DG 2026.png';

const doyleBadges = [
  { img: dg2023, year: '2023', alt: "Doyle's Guide 2023 Criminal Defence" },
  { img: dg2024, year: '2024', alt: "Doyle's Guide 2024 Criminal Defence" },
  { img: dg2025, year: '2025', alt: "Doyle's Guide 2025 Criminal Defence" },
  { img: dg2026, year: '2026', alt: "Doyle's Guide 2026 Criminal Defence" },
];

export function AboutAdamPage() {
  return (
    <div className="min-h-screen bg-charcoal-950 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-24">
        <EmergencyBanner />
        
        <section className="py-16 lg:py-24 bg-charcoal-900 border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/#about" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-300 hover:text-white transition-colors mb-10 font-bold">
              <ArrowLeft className="w-4 h-4" /> Back to About
            </Link>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-16">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="md:col-span-1"
              >
                <div className="aspect-[3/4] relative w-full overflow-hidden bg-charcoal-950 border border-white/15 shadow-2xl mb-6">
                  <img 
                    src={adamAshleyPhoto} 
                    alt="Adam Ashley - Principal Criminal Defence Lawyer" 
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="bg-charcoal-800/90 border border-white/15 p-5 text-center rounded-sm">
                  <div className="bg-white rounded-xl p-3 inline-flex items-center justify-center mb-3 shadow-md border border-neutral-200">
                    <img 
                      src={dg2026} 
                      alt="Doyle's Guide 2026 Recommended Criminal Defence" 
                      className="h-16 w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-white font-serif text-lg font-bold">Recommended 2023 – 2026</div>
                  <div className="text-xs uppercase tracking-widest text-gold-300 font-bold mt-1">Doyle's Guide Criminal Defence</div>
                  <div className="text-[11px] text-neutral-200 mt-2">Peer-reviewed excellence across NSW criminal defence</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="md:col-span-2 space-y-6"
              >
                <h1 className="text-4xl md:text-5xl font-serif text-white leading-tight">Adam Ashley</h1>
                <div className="text-sm uppercase tracking-widest text-gold-300 font-bold">
                  Principal Criminal Defence Lawyer · Admitted NSW & QLD Supreme Courts
                </div>
                <div className="w-20 h-1 bg-gold-400 rounded-full"></div>
                
                <p className="text-neutral-100 text-base sm:text-lg leading-relaxed font-normal">
                  Adam Ashley is a dedicated criminal defence practitioner recognized for his fierce courtroom advocacy, thorough case preparation, and approachable client care. Based in Murwillumbah, Adam defends clients across local, magistrates, and district courts in New South Wales and South East Queensland.
                </p>

                <p className="text-neutral-100 text-base leading-relaxed">
                  He believes that everyone accused of a crime deserves unwavering, formidable defence representation. Adam doesn't rely on generic promises; he evaluates the evidence, challenges police procedure, and fights for the best possible outcome.
                </p>

                <div className="space-y-6 pt-4">
                  <div className="p-6 bg-charcoal-800/90 border border-white/15 rounded-sm">
                    <h3 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
                      <Scale className="w-5 h-5 text-gold-300" />
                      Close Alliances with Senior Trial Barristers
                    </h3>
                    <p className="text-neutral-200 text-sm leading-relaxed">
                      Adam maintains close professional relationships with leading criminal defence barristers (Senior Counsel & King's Counsel) across the Sydney, Brisbane, and regional Bars. When a trial or complex bail matter demands specialized appellate or jury advocacy, Adam teams directly with top-tier trial counsel to ensure an unassailable defence.
                    </p>
                  </div>

                  <div className="p-6 bg-charcoal-800/90 border border-white/15 rounded-sm">
                    <h3 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-gold-300" />
                      Recognized in Doyle’s Guide (2023 – 2026)
                    </h3>
                    <p className="text-neutral-200 text-sm leading-relaxed mb-5">
                      Adam is recognized within the legal profession for his competence and results-focused advocacy in the prestigious <strong>Doyle’s Guide</strong>, which compiles rankings of Australian criminal lawyers based on peer review from magistrates, prosecutors, and colleagues across four consecutive years.
                    </p>

                    {/* 4 Consecutive Doyle's Guide Badges (white medallion backing ensures crystal clear readability) */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                      {doyleBadges.map((badge) => (
                        <div 
                          key={badge.year}
                          className="bg-white rounded-xl p-3 shadow-md border border-neutral-200 hover:border-gold-500 hover:shadow-xl transition-all duration-200 flex flex-col items-center justify-center text-center hover:scale-105"
                        >
                          <img 
                            src={badge.img} 
                            alt={badge.alt} 
                            className="h-14 sm:h-18 w-auto object-contain"
                            referrerPolicy="no-referrer"
                          />
                          <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-900 mt-1">
                            {badge.year} Ranked
                          </span>
                        </div>
                      ))}
                    </div>

                    <a 
                      href="https://doylesguide.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 bg-charcoal-900 border border-white/20 hover:border-gold-400 px-4 py-2 text-xs uppercase tracking-widest text-white font-semibold transition-colors"
                    >
                      <span>View Doyle's Guide Profile</span>
                      <ExternalLink className="w-3.5 h-3.5 text-gold-300" />
                    </a>
                  </div>

                  <div className="p-6 bg-charcoal-800/90 border border-white/15 rounded-sm">
                    <h3 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-gold-300" />
                      Local Regional Practice Across Northern Rivers & South East Queensland
                    </h3>
                    <p className="text-neutral-200 text-sm leading-relaxed">
                      Adam regularly represents clients in local and magistrates courts across <strong>Murwillumbah, Tweed Heads, Kingscliff, Byron Bay, Ballina, Lismore, Mullumbimby, Ocean Shores, Pottsville, Casino, Kyogle, Southport, Coolangatta, Surfers Paradise, Burleigh Heads, Robina, Broadbeach, Beenleigh, and Brisbane</strong>.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-charcoal-950 border-l-4 border-gold-400 rounded-r-sm">
                  <h4 className="text-lg font-serif text-white mb-2">Need Direct Representation from Adam Ashley?</h4>
                  <p className="text-sm text-neutral-200 mb-6">
                    Exercise your right to silence. Connect directly with Principal Counsel Adam Ashley for confidential, strategic legal defence before attending any police station.
                  </p>
                  <a 
                    href="tel:0421066608" 
                    className="inline-flex items-center justify-center gap-3 bg-gold-400 hover:bg-gold-500 text-charcoal-950 px-8 py-4 text-xs font-bold tracking-widest uppercase transition-colors shadow-lg"
                  >
                    <Phone className="w-4 h-4" /> 
                    <span>Call 0421 066 608 Now</span>
                  </a>
                </div>
              </motion.div>
            </div>
            
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
