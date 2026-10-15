import { Target, Users, MessageSquare, Scale, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const reasons = [
  {
    icon: MessageSquare,
    title: 'Word of Mouth & Trust',
    desc: 'Deeply respected across the Northern Rivers and South East Queensland community, with the vast majority of our clients arriving via direct personal recommendations.'
  },
  {
    icon: Scale,
    title: 'Elite Barrister Network',
    desc: 'We maintain exceptional professional connections and collaborate closely with Australia’s top criminal defence barristers (Senior Counsel & trial specialists) across NSW and Queensland.'
  },
  {
    icon: Target,
    title: 'Proactive Defence',
    desc: 'We do not passively wait for court dates. We actively investigate, challenge search warrants, subpoena critical evidence, and dismantle prosecution briefs early.'
  },
  {
    icon: Users,
    title: 'Dedicated Principal Lawyer',
    desc: 'Your case is never delegated to junior paralegals. Principal Counsel Adam Ashley leads your defence strategy personally from first police contact to final verdict.'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-charcoal-900 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 bg-gold-400/15 border border-gold-400/30 px-3.5 py-1 rounded-full mb-4">
              <ShieldCheck className="w-4 h-4 text-gold-300" />
              <span className="text-gold-300 font-bold tracking-widest uppercase text-xs">WHY CHOOSE US</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Defence Across Northern Rivers & South East Queensland
            </h3>
            <p className="text-neutral-100 text-lg font-normal leading-relaxed mb-6">
              From our primary practice base in Murwillumbah, we provide dedicated criminal defence across:
            </p>
            
            {/* Towns pill cluster */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                'Southport', 'Coolangatta', 'Tweed Heads', 'Kingscliff', 'Murwillumbah', 
                'Byron Bay', 'Ballina', 'Lismore', 'Mullumbimby', 'Ocean Shores', 
                'Pottsville', 'Casino', 'Surfers Paradise', 'Burleigh Heads', 'Robina', 
                'Beenleigh', 'Brisbane'
              ].map((town, idx) => (
                <span key={idx} className="bg-charcoal-800 text-neutral-100 border border-white/15 text-xs px-3 py-1 font-medium rounded-sm">
                  {town}
                </span>
              ))}
            </div>

            <p className="text-neutral-100 text-base leading-relaxed mb-6">
              We employ relentless preparation, technical evidence audits, and senior courtroom advocacy. You have the right to silence—never face investigating officers or a magistrate unrepresented.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <Link to="/why-choose-us" key={i} className="group">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-charcoal-800/90 border border-white/15 p-6 hover:border-gold-400 hover:bg-charcoal-800 transition-all duration-300 h-full flex flex-col shadow-lg rounded-sm cursor-pointer"
                  >
                    <Icon className="w-8 h-8 text-gold-300 mb-4 group-hover:scale-105 transition-transform" />
                    <h4 className="text-white group-hover:text-gold-300 font-serif text-base font-semibold uppercase tracking-wider mb-2 transition-colors">
                      {r.title}
                    </h4>
                    <p className="text-neutral-200 text-xs sm:text-sm leading-relaxed flex-grow font-normal">
                      {r.desc}
                    </p>
                    <div className="flex items-center gap-2 text-gold-300 group-hover:text-white mt-4 text-xs uppercase tracking-widest font-bold pt-3 border-t border-white/10">
                      <span>Learn More</span>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
