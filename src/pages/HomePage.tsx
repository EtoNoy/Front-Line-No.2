import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { EmergencyBanner } from '../components/EmergencyBanner';
import { PracticeAreas } from '../components/PracticeAreas';
import { About } from '../components/About';
import { AnimatedDivider } from '../components/AnimatedDivider';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-charcoal-950 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <EmergencyBanner />
        <About />
        <AnimatedDivider />
        <PracticeAreas />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      
      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-gold-500 z-40 p-4 border-t border-gold-400/50 shadow-2xl">
        <a href="tel:0421066608" className="flex items-center justify-center gap-2 text-white font-bold uppercase tracking-wide text-xs">
          Direct Defence Line: 0421 066 608
        </a>
      </div>
    </div>
  );
}
