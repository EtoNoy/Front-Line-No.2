import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Phone, ShieldAlert, AlertTriangle, CheckCircle, MapPin, Scale } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { practiceAreasData } from '../data/practiceAreas';
import { motion } from 'motion/react';
import { EmergencyBanner } from '../components/EmergencyBanner';

export function PracticeAreaDetail() {
  const { slug } = useParams<{ slug: string }>();
  const area = practiceAreasData.find(a => a.slug === slug);

  if (!area) {
    return (
      <div className="min-h-screen bg-charcoal-950 flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center px-4 py-20">
            <h1 className="text-3xl text-white font-serif mb-4">Area of Expertise Not Found</h1>
            <Link to="/#practice-areas" className="text-gold-300 hover:underline inline-flex items-center justify-center gap-2 text-sm font-semibold">
              <ArrowLeft className="w-4 h-4" /> Back to Areas of Expertise
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = area.icon;

  return (
    <div className="min-h-screen bg-charcoal-950 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-24">
        <EmergencyBanner />
        
        <section className="py-16 lg:py-24 bg-charcoal-900 border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/#practice-areas" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-300 hover:text-white transition-colors mb-10 font-bold">
              <ArrowLeft className="w-4 h-4" /> Back to Areas of Expertise
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-gold-400/15 border border-gold-400/40 rounded-lg flex items-center justify-center mb-8">
                <Icon className="w-8 h-8 text-gold-300" />
              </div>

              <div className="inline-flex items-center gap-2 bg-gold-400/15 border border-gold-400/30 px-3.5 py-1 rounded-full mb-4">
                <ShieldAlert className="w-4 h-4 text-gold-300" />
                <span className="text-gold-300 text-xs font-bold uppercase tracking-wider">Criminal Defence Focus</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">{area.title}</h1>
              <div className="w-24 h-1.5 bg-gold-400 mb-8 rounded-full"></div>
              
              {/* Severity & Urgency Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 p-6 bg-charcoal-800/90 border border-white/15 rounded-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gold-300 font-bold text-xs uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Severity & Potential Consequences</span>
                  </div>
                  <p className="text-white text-sm font-medium leading-relaxed">{area.severity}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gold-300 font-bold text-xs uppercase tracking-wider">
                    <ShieldAlert className="w-4 h-4" />
                    <span>Timeline & Procedural Urgency</span>
                  </div>
                  <p className="text-white text-sm font-medium leading-relaxed">{area.urgency}</p>
                </div>
              </div>

              {/* Main Content & Strategic Warning */}
              <div className="space-y-8">
                <div className="p-6 bg-charcoal-950 border-l-4 border-gold-400 rounded-r-sm">
                  <h3 className="text-lg font-serif text-gold-300 font-bold mb-2">Legal Context & Rights Awareness</h3>
                  <p className="text-neutral-100 text-base md:text-lg leading-relaxed font-normal">
                    {area.fullDescription}
                  </p>
                </div>

                {/* Strict No Legal Advice Notice */}
                <div className="p-5 bg-amber-950/30 border border-amber-500/40 rounded-sm">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-neutral-100 leading-relaxed">
                      <strong className="text-amber-300 block mb-1 uppercase tracking-wide">Important Notice: General Legal Context Only — Not Legal Advice</strong>
                      The information provided on this page is for general informative context and awareness of your basic rights under Australian law. It does NOT constitute legal advice. Criminal penalties carry severe risks of imprisonment, disqualification, and permanent criminal records. You should always contact a lawyer before speaking to police or entering a plea in court.
                    </div>
                  </div>
                </div>

                {/* Essential Rights Checklist */}
                <div className="p-6 bg-charcoal-800/90 border border-white/15 rounded-sm">
                  <h3 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-gold-300" />
                    Your Fundamental Rights You Must Exercise Now
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold-300 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white text-sm block">1. Absolute Right to Silence</strong>
                        <p className="text-neutral-200 text-xs mt-0.5">
                          Under Section 89 of the Evidence Act, you are not required to answer questions, participate in a recorded interview, or explain yourself to police.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold-300 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white text-sm block">2. Right to Legal Representation</strong>
                        <p className="text-neutral-200 text-xs mt-0.5">
                          You have the right to contact a lawyer before any formal questioning, charge processing, or bail determination.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold-300 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white text-sm block">3. Refuse Warrantless Consents</strong>
                        <p className="text-neutral-200 text-xs mt-0.5">
                          Never consent to police searching your mobile phone, home, or vehicle without inspecting a lawful warrant or consulting counsel.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold-300 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white text-sm block">4. Do Not Plead Without Disclosure</strong>
                        <p className="text-neutral-200 text-xs mt-0.5">
                          Never enter a plea in the Local or Magistrates Court until defence counsel has obtained and audited the full police brief of evidence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Regional Jurisdiction & Immediate Contact Card */}
                <div className="p-8 bg-charcoal-950 border-2 border-gold-400 rounded-sm relative overflow-hidden shadow-2xl">
                  <div className="flex items-center gap-2 text-gold-300 text-xs font-bold uppercase tracking-widest mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>Regional Representation Across NSW & South East Queensland</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white mb-3">
                    Need to Contact a Lawyer?
                  </h3>
                  <p className="text-neutral-100 text-sm sm:text-base leading-relaxed mb-4">
                    Our principal lawyer Adam Ashley and our dedicated defence team provide urgent station attendance, bail advocacy, and court representation across:
                  </p>
                  
                  {/* Surrounding local places tags for client reassurance */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {[
                      'Murwillumbah', 'Tweed Heads', 'Kingscliff', 'Byron Bay', 'Ballina', 
                      'Lismore', 'Mullumbimby', 'Ocean Shores', 'Pottsville', 'Casino', 
                      'Kyogle', 'Southport', 'Coolangatta', 'Surfers Paradise', 'Burleigh Heads', 
                      'Robina', 'Broadbeach', 'Palm Beach', 'Beenleigh', 'Brisbane'
                    ].map((town, idx) => (
                      <span key={idx} className="bg-white/10 text-neutral-100 text-xs px-2.5 py-1 rounded-sm border border-white/15 font-medium">
                        {town}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="tel:0421066608" 
                      className="inline-flex items-center justify-center gap-3 bg-gold-400 hover:bg-gold-500 text-charcoal-950 px-8 py-4 text-xs font-bold tracking-widest uppercase transition-colors shadow-lg"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Direct Defence Line: 0421 066 608</span>
                    </a>
                    <a 
                      href="/#contact" 
                      className="inline-flex items-center justify-center gap-3 bg-charcoal-800 hover:bg-charcoal-700 text-white border border-white/20 px-8 py-4 text-xs font-bold tracking-widest uppercase transition-colors"
                    >
                      <span>Send Matter Details</span>
                    </a>
                  </div>
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
