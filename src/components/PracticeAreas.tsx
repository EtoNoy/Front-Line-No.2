import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldAlert, Phone } from 'lucide-react';
import { practiceAreasData } from '../data/practiceAreas';

export function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-24 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold-400/15 border border-gold-400/30 px-3.5 py-1 rounded-full mb-4">
            <ShieldAlert className="w-4 h-4 text-gold-300" />
            <span className="text-gold-300 font-bold tracking-widest uppercase text-xs">Areas of Expertise</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Fierce & Uncompromising Criminal Defence</h3>
          <p className="text-neutral-100 max-w-3xl mx-auto text-base sm:text-lg font-normal leading-relaxed mb-4">
            We focus exclusively on criminal defence across Northern Rivers NSW and South East Queensland courts. Our priority is safeguarding your rights from the very first police contact and fighting for complete case resolution.
          </p>
          <p className="text-gold-300/90 text-sm font-medium tracking-wide">
            Do not speak to police or enter a plea unrepresented. Exercise your right to silence and contact a lawyer immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {practiceAreasData.map((practice, index) => {
            const Icon = practice.icon;
            return (
              <Link to={`/practice-areas/${practice.slug}`} key={practice.slug} className="group">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: Math.min((index % 4) * 0.08, 0.3) }}
                  className="p-6 bg-charcoal-800/90 border border-white/15 hover:border-gold-400 hover:bg-charcoal-800 transition-all duration-300 h-full flex flex-col shadow-lg rounded-sm"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold-400/15 border border-gold-400/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-gold-300 group-hover:text-white transition-colors" />
                  </div>
                  
                  <h4 className="text-white group-hover:text-gold-300 font-serif text-lg font-semibold mb-2.5 transition-colors">
                    {practice.title}
                  </h4>
                  
                  <p className="text-sm text-neutral-200 leading-relaxed mb-5 flex-grow font-normal">
                    {practice.desc}
                  </p>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-auto">
                    <span className="text-xs uppercase tracking-wider font-bold text-gold-300 group-hover:text-white transition-colors">
                      Learn More
                    </span>
                    <ArrowRight className="w-4 h-4 text-gold-300 group-hover:translate-x-1 group-hover:text-white transition-all" />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Direct urgent helpline banner */}
        <div className="mt-16 p-8 bg-charcoal-950 border border-gold-400/40 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-gold-300 block mb-1">
              Need Legal Representation?
            </span>
            <h4 className="text-2xl font-serif text-white">
              Under Arrest, Being Questioned, or Given a Court Date?
            </h4>
            <p className="text-neutral-200 text-sm mt-1 max-w-2xl">
              You are not required to answer police questions. You should contact a lawyer before attending any police station or entering a plea in court.
            </p>
          </div>
          <a 
            href="tel:0421066608" 
            className="inline-flex items-center gap-3 bg-gold-400 hover:bg-gold-500 text-charcoal-950 px-8 py-4 text-xs font-bold tracking-widest uppercase transition-colors shrink-0 shadow-lg"
          >
            <Phone className="w-4 h-4" />
            <span>Call 0421 066 608 Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
