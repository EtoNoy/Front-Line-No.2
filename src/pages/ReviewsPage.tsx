import { Link } from 'react-router-dom';
import { ArrowLeft, Quote, Shield, Star } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { EmergencyBanner } from '../components/EmergencyBanner';
import { testimonialsData } from '../data/testimonials';

export function ReviewsPage() {
  return (
    <div className="min-h-screen bg-charcoal-950 font-sans selection:bg-gold-500/30 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <EmergencyBanner />
        <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/#results" className="inline-flex items-center gap-2 text-gold-400 hover:text-white transition-colors text-xs tracking-widest uppercase font-bold mb-12">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-gold-400" />
              <h1 className="text-4xl md:text-5xl font-serif text-white">Client Reviews</h1>
            </div>
            <p className="text-neutral-100 leading-relaxed text-lg mb-2 font-normal">
              Our reputation is built on thorough case preparation, clear communication, and dedicated client advocacy. Read what our clients have to say about working with Adam Ashley and Frontline Lawyers.
            </p>
            <p className="text-gold-300 text-sm font-medium italic">
              * All reviews are anonymous for discretion purposes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-charcoal-800 p-6 sm:p-7 border-l-2 border-gold-400 relative flex flex-col shadow-lg justify-between"
              >
                <Quote className="w-8 h-8 text-white/5 absolute top-4 right-4" />
                
                <div className="flex items-center gap-1 mb-4 text-gold-400">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star key={starIdx} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                  {t.outcome && (
                    <span className="ml-2 bg-white/5 border border-white/10 text-gold-300 font-semibold text-[10px] px-2 py-0.5 uppercase tracking-widest">
                      {t.outcome}
                    </span>
                  )}
                </div>
                
                <p className="text-neutral-100 text-sm italic leading-relaxed font-normal flex-grow">"{t.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
