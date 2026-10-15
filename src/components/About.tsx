import { motion } from 'motion/react';
import { ArrowRight, Award, Shield, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
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

export function About() {
  return (
    <section id="about" className="py-24 bg-charcoal-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[3/4] relative z-10 w-full overflow-hidden bg-charcoal-950 border border-white/15 shadow-2xl">
              <img 
                src={adamAshleyPhoto} 
                alt="Adam Ashley - Principal Criminal Defence Lawyer" 
                className="w-full h-full object-cover object-top transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-gold-400/80 z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold-400/15 border border-gold-400/30 px-3.5 py-1 rounded-full mb-4">
              <Shield className="w-4 h-4 text-gold-300" />
              <span className="text-gold-300 font-bold tracking-widest uppercase text-xs">About Principal Counsel Adam Ashley</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              Fearless Advocacy. Total Client Dedication.
            </h3>
            
            <p className="text-neutral-100 text-lg font-normal leading-relaxed mb-6">
              When facing police allegations or court proceedings, you need straightforward legal representation that protects your constitutional rights from day one. Adam Ashley treats every client as his paramount priority. He doesn't treat you as a case number—he listens, answers your calls directly, and applies rigorous legal acumen to protect your freedom.
            </p>
            <p className="text-neutral-100 text-base leading-relaxed mb-6">
              Adam has built an outstanding reputation throughout <strong className="text-white font-semibold">Northern Rivers NSW and South East Queensland</strong>, defending clients across local and magistrates courts in Murwillumbah, Tweed Heads, Kingscliff, Byron Bay, Ballina, Lismore, Mullumbimby, Casino, as well as Coolangatta, Southport, Surfers Paradise, Burleigh Heads, Robina, Brisbane, and Beenleigh.
            </p>
            <p className="text-neutral-200 text-sm leading-relaxed mb-6 bg-charcoal-800/80 p-4 border-l-2 border-gold-400 rounded-r-sm">
              <strong className="text-gold-300 block mb-1">Premier Barrister Connections:</strong>
              Adam works in close collaboration with Australia's most respected criminal defence barristers—including specialist Senior Counsel (KC/SC) and seasoned trial advocates—ensuring every contested hearing and jury trial is backed by elite forensic firepower.
            </p>

            {/* Doyle's Guide 4 Consecutive Years Badges (white medallion backing ensures crystal clear readability) */}
            <div className="mb-8 p-5 bg-charcoal-950/90 border border-white/10 rounded-sm">
              <div className="text-xs font-bold uppercase tracking-widest text-gold-300 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-gold-300" />
                <span>Doyle's Guide Recommended Criminal Lawyer · 2023 to 2026</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {doyleBadges.map((badge) => (
                  <div 
                    key={badge.year}
                    className="bg-white rounded-xl p-2.5 shadow-md border border-neutral-200 hover:border-gold-500 hover:shadow-xl transition-all duration-200 flex flex-col items-center justify-center text-center hover:scale-105"
                  >
                    <img 
                      src={badge.img} 
                      alt={badge.alt} 
                      className="h-12 sm:h-14 w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-900 mt-1">
                      {badge.year} Ranked
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                'Highly recommended in Doyle’s Guide',
                'Admitted NSW & QLD Supreme Courts',
                'Deeply connected with top trial barristers',
                'Dedicated police station representation'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <Award className="w-4 h-4 text-gold-300 shrink-0" />
                  <span className="text-xs uppercase tracking-wider font-semibold">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 justify-between pt-6 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="font-serif text-2xl sm:text-3xl text-white italic">Adam Ashley</div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="text-xs uppercase tracking-widest text-gold-300 font-bold">Principal Defence Lawyer</div>
              </div>
              <Link 
                to="/about-adam" 
                className="inline-flex items-center gap-2 bg-charcoal-800 hover:bg-gold-400 hover:text-charcoal-950 border border-white/20 hover:border-gold-400 px-6 py-3.5 text-xs uppercase tracking-widest text-white font-bold transition-all duration-300 shrink-0 shadow-md"
              >
                <span>Read Full Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
