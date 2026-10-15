import { motion } from 'motion/react';
import { ArrowRight, ShieldAlert } from 'lucide-react';
// @ts-ignore
import frontlineBackground from '../assets/images/Frontline Lawyers Image (1).jpg';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start pt-20 overflow-hidden bg-charcoal-950">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ backgroundImage: `url("${frontlineBackground}")` }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl text-left flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-8 justify-start"
          >
            <ShieldAlert className="w-5 h-5 text-gold-600 drop-shadow-sm" />
            <span className="text-gold-600 font-bold tracking-widest uppercase text-sm drop-shadow-sm">Northern Rivers NSW & South East Queensland Criminal Defense</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start mb-8 select-none text-left"
          >
            <span className="font-serif text-5xl md:text-7xl tracking-[0.12em] uppercase text-charcoal-950 font-bold leading-none block">Frontline</span>
            <span className="text-xs md:text-sm tracking-[0.38em] uppercase text-gold-600 font-sans font-bold mt-3 md:mt-4 leading-none block drop-shadow-sm">Lawyers</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-neutral-800 mb-10 max-w-2xl font-semibold leading-relaxed text-left drop-shadow-sm"
          >
            Straightforward legal representation to protect your rights, livelihood, and future. From our base in Murwillumbah, we represent clients throughout the Northern Rivers NSW and South East Queensland, appearing in local and magistrates courts across Southport, Coolangatta, Tweed Heads, Ballina, Byron Bay, Mullumbimby, and Lismore.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-start"
          >
            <a href="#contact" className="group flex items-center justify-center gap-3 border border-charcoal-900 text-charcoal-950 px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-charcoal-950 hover:text-white transition-colors duration-300">
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:0421066608" className="flex items-center justify-center gap-3 bg-gold-500 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-gold-600 transition-colors duration-300">
              Call: 0421 066 608
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
