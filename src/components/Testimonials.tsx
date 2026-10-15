import { Quote, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { testimonialsData } from '../data/testimonials';

export function Testimonials() {
  const doubledTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <section id="results" className="py-24 bg-charcoal-950 border-y border-white/10 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-gold-300 font-bold tracking-widest uppercase text-xs mb-3">Client Reviews</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-3">Genuine Counsel. Real Client Experiences.</h3>
          <p className="text-gold-300 text-sm font-medium italic">
            * All reviews are anonymous for discretion purposes.
          </p>
        </div>
      </div>

      {/* Full-screen width continuous marquee ticker */}
      <div className="relative w-full overflow-hidden mb-16">
        {/* Left Edge Smooth Shade/Fade Mask */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-charcoal-950 via-charcoal-950/80 to-transparent z-10" />
        
        {/* Right Edge Smooth Shade/Fade Mask */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-charcoal-950 via-charcoal-950/80 to-transparent z-10" />

        {/* Scrolling Carousel Row */}
        <div className="flex w-max gap-8 animate-marquee hover:[animation-play-state:paused] py-4">
          {doubledTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-charcoal-800 p-6 sm:p-7 border-l-2 border-gold-400 relative flex flex-col w-[320px] sm:w-[380px] md:w-[440px] shrink-0 select-none hover:border-gold-300 transition-colors duration-300 shadow-lg justify-between"
            >
              <Quote className="w-8 h-8 text-white/5 absolute top-4 right-4" />
              
              <div className="flex items-center gap-1 mb-4 text-gold-400">
                {[...Array(5)].map((_, starIdx) => (
                  <Star key={starIdx} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                ))}
                {t.outcome && (
                  <span className="ml-2 bg-white/5 border border-white/10 text-gold-300 font-semibold text-[10px] px-2 py-0.5 uppercase tracking-widest">
                    {t.outcome}
                  </span>
                )}
              </div>
              
              <p className="text-neutral-100 text-xs sm:text-sm italic leading-relaxed font-normal flex-grow">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Link 
            to="/reviews"
            className="inline-flex items-center gap-2 bg-transparent border border-white/20 px-8 py-3 text-xs uppercase tracking-widest text-white font-bold hover:bg-gold-400 hover:text-black hover:border-gold-400 transition-all duration-300"
          >
            Read All Client Reviews
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
