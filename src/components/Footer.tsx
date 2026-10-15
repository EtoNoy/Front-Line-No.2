import { ShieldAlert, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
// @ts-ignore
import frontlineLogo from '../assets/images/cd2eee_e0511956a9d54b74accf1487de012a66~mv2.png';

export function Footer() {
  return (
    <footer className="bg-charcoal-980 border-t border-white/15 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center mb-6 hover:opacity-90 transition-opacity">
              <img 
                src={frontlineLogo} 
                alt="Frontline Lawyers Logo" 
                className="h-10 w-auto object-contain filter brightness-110"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-neutral-200 text-sm font-normal leading-relaxed mb-6">
              Exclusive criminal defence representation. Defending clients across Northern Rivers and South East Queensland.
            </p>
            <div className="mb-3">
              <a 
                href="mailto:adam@frontlinelaw.com" 
                className="inline-flex items-center gap-2 text-gold-300 hover:text-white transition-colors text-sm font-semibold"
              >
                <Mail className="w-4 h-4 text-gold-300" />
                <span>adam@frontlinelaw.com</span>
              </a>
            </div>
            <a href="tel:0421066608" className="inline-flex items-center gap-2 text-white font-bold hover:text-gold-300 transition-colors text-sm">
              <Phone className="w-4 h-4 text-gold-300" />
              <span>0421 066 608</span>
            </a>
          </div>

          <div>
            <h4 className="text-white font-serif mb-6 text-lg font-bold">Areas of Expertise</h4>
            <ul className="space-y-3 text-sm text-neutral-200 font-medium">
              <li><Link to="/practice-areas/drink-driving-dui" className="hover:text-gold-300 transition-colors">Drink Driving / DUI (PCA)</Link></li>
              <li><Link to="/practice-areas/drug-offences" className="hover:text-gold-300 transition-colors">Drug Possession & Supply</Link></li>
              <li><Link to="/practice-areas/traffic-offences" className="hover:text-gold-300 transition-colors">Traffic & Driving Charges</Link></li>
              <li><Link to="/practice-areas/licence-matters" className="hover:text-gold-300 transition-colors">Licence Suspensions & Appeals</Link></li>
              <li><Link to="/practice-areas/domestic-violence" className="hover:text-gold-300 transition-colors">Domestic Violence & AVOs</Link></li>
              <li><Link to="/practice-areas/assault-charges" className="hover:text-gold-300 transition-colors">Assault & Violent Offences</Link></li>
              <li><Link to="/practice-areas/bail-matters" className="hover:text-gold-300 transition-colors">Urgent Bail Applications</Link></li>
              <li><Link to="/practice-areas/police-matters" className="hover:text-gold-300 transition-colors">Police Questioning Rights</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif mb-6 text-lg font-bold">Firm & Defense</h4>
            <ul className="space-y-3 text-sm text-neutral-200 font-medium">
              <li><a href="/#about" className="hover:text-gold-300 transition-colors">About Adam Ashley</a></li>
              <li><Link to="/why-choose-us" className="hover:text-gold-300 transition-colors">Why Choose Us</Link></li>
              <li><Link to="/reviews" className="hover:text-gold-300 transition-colors">Proven Case Results</Link></li>
              <li><Link to="/faqs" className="hover:text-gold-300 transition-colors">Criminal Law FAQs</Link></li>
              <li><a href="/#contact" className="hover:text-gold-300 transition-colors">Contact Defence Counsel</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif mb-6 text-lg font-bold">Legal & Rights</h4>
            <ul className="space-y-3 text-sm text-neutral-200 font-medium">
              <li><Link to="/privacy-policy" className="hover:text-gold-300 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-gold-300 transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="hover:text-gold-300 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/15 pt-8">
          <p className="text-neutral-300 text-xs leading-relaxed max-w-4xl">
            &copy; {new Date().getFullYear()} Frontline Lawyers. All rights reserved. Liability limited by a scheme approved under Professional Standards Legislation.
            <span className="block mt-2 text-neutral-200 font-medium">
              Strict Disclaimer: No content on this website constitutes formal legal advice. Accessing or using this site does not establish a lawyer-client relationship. Every criminal charge carries severe consequences and must be evaluated on its unique prosecution brief. You should always contact a lawyer before making statements or entering pleas.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
