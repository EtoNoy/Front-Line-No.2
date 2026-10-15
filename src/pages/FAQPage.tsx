import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  X, 
  ChevronDown, 
  Phone, 
  Shield, 
  BookOpen, 
  ChevronRight, 
  Filter, 
  Check, 
  Share2, 
  FileText,
  Zap,
  ArrowLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { ALL_FAQS, FAQ_CATEGORIES, FAQCategory } from '../data/faqsData';

// Everyday vernacular and slang mapping for real-world legal queries
const SLANG_SYNONYM_MAP: Record<string, { legalTerm: string; synonyms: string[] }> = {
  'guns': { legalTerm: 'Firearms & Weapons (Firearms Act 1996)', synonyms: ['firearm', 'firearms', 'pistol', 'rifle', 'shotgun', 'weapon', 'strap', 'unregistered gun', 'gun safe'] },
  'gun': { legalTerm: 'Firearms & Weapons (Firearms Act 1996)', synonyms: ['firearm', 'firearms', 'pistol', 'rifle', 'shotgun', 'weapon', 'strap', 'unregistered gun'] },
  'strap': { legalTerm: 'Firearms & Weapons Offences', synonyms: ['gun', 'guns', 'firearm', 'pistol', 'weapon'] },
  'gat': { legalTerm: 'Firearms & Weapons Offences', synonyms: ['gun', 'guns', 'firearm', 'pistol'] },
  'gel blaster': { legalTerm: 'Imitation Firearms & Prohibited Weapons', synonyms: ['gel blasters', 'replica gun', 'bb gun', 'airsoft', 'toy gun'] },
  'gel blasters': { legalTerm: 'Imitation Firearms & Prohibited Weapons', synonyms: ['gel blaster', 'replica gun', 'bb gun', 'airsoft'] },
  'knife': { legalTerm: 'Knife & Prohibited Weapons (Summary Offences Act s11C)', synonyms: ['knives', 'blade', 'pocket knife', 'shank', 'box cutter', 'multitool'] },
  'knives': { legalTerm: 'Knife & Prohibited Weapons (Summary Offences Act s11C)', synonyms: ['knife', 'blade', 'pocket knife', 'shank', 'box cutter'] },
  'blade': { legalTerm: 'Knife & Prohibited Weapons Laws', synonyms: ['knife', 'knives', 'pocket knife', 'box cutter', 'shank'] },
  'shank': { legalTerm: 'Knife & Prohibited Weapons Laws', synonyms: ['knife', 'blade', 'weapon'] },
  'weed': { legalTerm: 'Cannabis & Prohibited Drugs (DMTA 1985)', synonyms: ['cannabis', 'pot', 'bud', 'marijuana', 'thc', 'grass', 'mull', 'cones'] },
  'pot': { legalTerm: 'Cannabis & Prohibited Drugs', synonyms: ['weed', 'cannabis', 'bud', 'marijuana', 'thc'] },
  'bud': { legalTerm: 'Cannabis & Prohibited Drugs', synonyms: ['weed', 'cannabis', 'pot', 'marijuana', 'thc'] },
  'grass': { legalTerm: 'Cannabis & Prohibited Drugs', synonyms: ['weed', 'cannabis', 'pot', 'marijuana'] },
  'cones': { legalTerm: 'Cannabis Possession & Drug Paraphernalia', synonyms: ['weed', 'cannabis', 'pot', 'bud'] },
  'ice': { legalTerm: 'Methylamphetamine (Prohibited Drug)', synonyms: ['meth', 'methylamphetamine', 'gear', 'shard', 'speed'] },
  'meth': { legalTerm: 'Methylamphetamine (Prohibited Drug)', synonyms: ['ice', 'methylamphetamine', 'gear', 'shard'] },
  'gear': { legalTerm: 'Prohibited Drugs (Possession / Supply)', synonyms: ['drugs', 'ice', 'meth', 'coke', 'cocaine', 'weed'] },
  'coke': { legalTerm: 'Cocaine (Prohibited Drug)', synonyms: ['cocaine', 'rack', 'bags', 'powder'] },
  'rack': { legalTerm: 'Cocaine / Prohibited Drugs', synonyms: ['coke', 'cocaine', 'drugs'] },
  'caps': { legalTerm: 'MDMA / Ecstasy (Prohibited Drug)', synonyms: ['mdma', 'ecstasy', 'pills'] },
  'pills': { legalTerm: 'MDMA / Ecstasy / Prohibited Substances', synonyms: ['caps', 'mdma', 'ecstasy', 'tablets'] },
  'dui': { legalTerm: 'Prescribed Concentration of Alcohol (PCA / Drink Driving)', synonyms: ['drink driving', 'pca', 'blowing over', 'blew over', 'drunk driving', 'rbt', 'interlock'] },
  'blowing over': { legalTerm: 'PCA Drink Driving Offence', synonyms: ['drink driving', 'dui', 'pca', 'blew over', 'rbt', 'high range'] },
  'blew over': { legalTerm: 'PCA Drink Driving Offence', synonyms: ['drink driving', 'dui', 'pca', 'blowing over', 'rbt'] },
  'pissed': { legalTerm: 'Drink Driving / Intoxication PCA', synonyms: ['drink driving', 'dui', 'pca', 'blowing over'] },
  'rbt': { legalTerm: 'Random Breath Testing (Road Transport Act 2013)', synonyms: ['breath test', 'drink driving', 'dui', 'blowing over', 'booze bus'] },
  'booze bus': { legalTerm: 'Random Breath Testing & Roadside Operations', synonyms: ['rbt', 'breath test', 'drink driving', 'dui'] },
  'pub fight': { legalTerm: 'Affray & Violent Offences (Crimes Act 1900)', synonyms: ['assault', 'affray', 'brawl', 'punch on', 'scrap', 'coward punch'] },
  'brawl': { legalTerm: 'Affray & Assault Offences', synonyms: ['fight', 'assault', 'affray', 'pub fight', 'punch on', 'scrap'] },
  'scrap': { legalTerm: 'Assault & Affray', synonyms: ['fight', 'brawl', 'assault', 'punch on'] },
  'punch on': { legalTerm: 'Assault & Affray', synonyms: ['fight', 'brawl', 'assault', 'scrap'] },
  'coward punch': { legalTerm: 'Assault & Grievous Bodily Harm (One-Punch Laws)', synonyms: ['one punch', 'king hit', 'assault', 'gbh'] },
  'king hit': { legalTerm: 'Assault & Grievous Bodily Harm', synonyms: ['coward punch', 'assault', 'gbh'] },
  'bashing': { legalTerm: 'Assault Occasioning Actual Bodily Harm / GBH', synonyms: ['assault', 'aoabh', 'gbh', 'violence'] },
  'dvo': { legalTerm: 'Apprehended Domestic Violence Order (ADVO)', synonyms: ['avo', 'advo', 'restraining order'] },
  'restraining order': { legalTerm: 'Apprehended Violence Order (AVO)', synonyms: ['avo', 'advo', 'apvo', 'dvo'] },
  'cops': { legalTerm: 'NSW Police Force & LEPRA Statutory Powers', synonyms: ['police', 'lepra', 'arrest', 'search', 'caution', 'interview'] },
  'fuzz': { legalTerm: 'NSW Police Powers', synonyms: ['police', 'cops', 'arrest'] },
  'paddy wagon': { legalTerm: 'Police Custody & Investigation Period', synonyms: ['police', 'arrest', 'detention', 'cells'] },
  'locked up': { legalTerm: 'Bail & Remand (Bail Act 2013)', synonyms: ['bail', 'remand', 'cells', 'jail', 'prison', 'custody', 'show cause'] },
  'behind bars': { legalTerm: 'Bail & Custodial Remand', synonyms: ['bail', 'remand', 'cells', 'prison', 'custody'] },
  'get bailed out': { legalTerm: 'Bail Application & Release', synonyms: ['bail', 'surety', 'bail money', 'show cause'] },
  'pin code': { legalTerm: 'Digital Device Privacy & Search Powers', synonyms: ['phone search', 'passcode', 'mobile phone', 'unlock phone'] },
  'unlock phone': { legalTerm: 'Digital Privacy & Phone Searches', synonyms: ['phone search', 'passcode', 'pin code', '3la order'] },
  'shoplifting': { legalTerm: 'Larceny (Crimes Act s117)', synonyms: ['stealing', 'theft', 'larceny', 'nicking stuff', 'pinching'] },
  'nicking': { legalTerm: 'Larceny & Property Offences', synonyms: ['shoplifting', 'stealing', 'larceny', 'theft'] },
  'pinching': { legalTerm: 'Larceny & Property Offences', synonyms: ['shoplifting', 'stealing', 'larceny', 'theft'] },
  'stealing': { legalTerm: 'Larceny & Embezzlement', synonyms: ['shoplifting', 'larceny', 'theft', 'nicking'] },
  'section 10': { legalTerm: 'Section 10 Non-Conviction Dismissal', synonyms: ['clean record', 'no conviction', 'cro', 'avoid criminal record', 'dismissal'] },
  'clean record': { legalTerm: 'Section 10 Non-Conviction Order', synonyms: ['section 10', 'no conviction', 'cro', 'dismissal'] },
  'get off': { legalTerm: 'Charge Withdrawal / Dismissal / Acquittal', synonyms: ['beat charges', 'dropped charges', 'not guilty', 'dismissal', 'representations'] },
  'beat charges': { legalTerm: 'Formal Legal Representations & Charge Withdrawal', synonyms: ['dropped charges', 'get off', 'dismissal', 'not guilty', 'representations'] },
  'dropped charges': { legalTerm: 'Prosecution Charge Withdrawal', synonyms: ['beat charges', 'representations', 'dismissal', 'withdraw'] }
};

export function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory>('All');
  const [openIds, setOpenIds] = useState<Set<string>>(new Set([ALL_FAQS[0]?.id || '']));
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Check URL hash on mount to scroll to or open a specific FAQ if present
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setOpenIds(prev => new Set([...prev, hash]));
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 200);
      }
    }
  }, []);

  // Detect slang term in the current search query
  const detectedSlang = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const cleanQ = searchQuery.toLowerCase().replace(/^#/, '').trim();
    
    // Check exact match first
    if (SLANG_SYNONYM_MAP[cleanQ]) {
      return { term: cleanQ, ...SLANG_SYNONYM_MAP[cleanQ] };
    }

    // Check if query contains any known slang phrase
    for (const [key, mapping] of Object.entries(SLANG_SYNONYM_MAP)) {
      if (cleanQ.includes(key)) {
        return { term: key, ...mapping };
      }
    }

    return null;
  }, [searchQuery]);

  // Filter FAQs based on search and category, incorporating slang detection and synonym expansion
  const filteredFAQs = useMemo(() => {
    return ALL_FAQS.filter(faq => {
      const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const rawQ = searchQuery.toLowerCase().trim();
      const cleanQ = rawQ.replace(/^#/, '').trim();

      // Standard query matching
      const matchQuestion = faq.question.toLowerCase().includes(cleanQ);
      const matchAnswer = faq.answer.toLowerCase().includes(cleanQ);
      const matchCategory = faq.category.toLowerCase().includes(cleanQ);
      const matchKeywords = faq.keywords.some(k => k.toLowerCase().includes(cleanQ));
      const matchSlangTags = faq.slangTags.some(t => t.toLowerCase().includes(cleanQ) || t.toLowerCase() === `#${cleanQ}`);

      if (matchQuestion || matchAnswer || matchCategory || matchKeywords || matchSlangTags) {
        return true;
      }

      // Slang expansion matching: if a slang phrase was detected, also match its mapped synonyms
      if (detectedSlang) {
        const matchesSynonym = detectedSlang.synonyms.some(syn => {
          const s = syn.toLowerCase();
          return (
            faq.question.toLowerCase().includes(s) ||
            faq.answer.toLowerCase().includes(s) ||
            faq.keywords.some(k => k.toLowerCase().includes(s)) ||
            faq.slangTags.some(t => t.toLowerCase().includes(s))
          );
        });
        if (matchesSynonym) return true;
      }

      return false;
    });
  }, [searchQuery, selectedCategory, detectedSlang]);

  // Counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: ALL_FAQS.length };
    ALL_FAQS.forEach(item => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Toggle individual question
  const toggleFAQ = (id: string) => {
    setOpenIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Expand / Collapse all
  const expandAll = () => {
    setOpenIds(new Set(filteredFAQs.map(f => f.id)));
  };

  const collapseAll = () => {
    setOpenIds(new Set());
  };

  // Copy link to specific FAQ
  const handleShareFAQ = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}/faqs#${id}`;
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Schema.org FAQPage structured data
  const faqSchema = useMemo(() => {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://frontlinelawyers.com.au/'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Frequently Asked Questions',
              'item': 'https://frontlinelawyers.com.au/faqs'
            }
          ]
        },
        {
          '@type': 'FAQPage',
          'name': 'Frontline Lawyers Criminal Defense Legal FAQs',
          'description': 'Comprehensive criminal law FAQ directory covering police interviews, bail, drink driving, assault, guns & weapons, drug offences, and court processes in NSW and South East Queensland.',
          'mainEntity': ALL_FAQS.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'keywords': faq.keywords.concat(faq.slangTags).join(', '),
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.answer
            }
          }))
        }
      ]
    };
  }, []);

  return (
    <div className="min-h-screen bg-charcoal-950 text-neutral-100 flex flex-col font-sans selection:bg-gold-500/20 selection:text-gold-300">
      <SEO 
        title="Criminal Defense FAQs | Frontline Lawyers | Adam Ashley"
        description="Explore comprehensive criminal defense FAQs across NSW and South East Queensland. Clear information on police searches, bail, drink driving, weapons, drugs, and court appearances."
        canonicalPath="/faqs"
        schema={faqSchema}
      />

      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-16 border-b border-white/10 overflow-hidden bg-gradient-to-b from-charcoal-900 via-charcoal-950 to-charcoal-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back to Home link matching other detail pages */}
          <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-300 hover:text-white transition-colors mb-8 font-bold">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/15 border border-gold-400/30 text-gold-300 text-xs uppercase tracking-widest font-bold mb-5">
              <BookOpen className="w-4 h-4 text-gold-300" />
              <span>Criminal Defense Knowledge Base</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight mb-6 font-bold">
              Frequently Asked Questions <br />
              <span className="text-gold-300 font-normal">Know Your Rights & Options</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-200 font-normal leading-relaxed mb-8">
              Straightforward answers to critical criminal defense and court questions. 
              Search using everyday language, common phrases, or legal terms across Northern Rivers NSW and South East Queensland.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-200">
              <span className="flex items-center gap-2 bg-charcoal-900 px-3.5 py-2 rounded border border-white/15 font-medium">
                <Shield className="w-4 h-4 text-gold-300" />
                Doyle's Guide Recognized Principal Counsel
              </span>
              <span className="flex items-center gap-2 bg-charcoal-900 px-3.5 py-2 rounded border border-white/15 font-medium">
                <FileText className="w-4 h-4 text-gold-300" />
                NSW & Queensland Legal Jurisdiction
              </span>
            </div>

            {/* Legal Notice Banner */}
            <div className="mt-8 p-4 bg-charcoal-900 border-l-4 border-gold-400 rounded-r-md text-xs sm:text-sm text-neutral-100 flex items-start gap-3">
              <Shield className="w-5 h-5 text-gold-300 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-1 uppercase tracking-wide font-bold">General Information Only · Not Legal Advice</strong>
                Content on this page provides general legal information. It does not constitute formal legal advice. Every criminal charge depends on specific prosecution evidence. You should always contact a lawyer before making statements to police or entering a plea.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area: Search, Filter & Accordion */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar - High Visibility and Clean Layout */}
        <div className="bg-charcoal-900 border-2 border-white/20 p-5 sm:p-7 rounded-xl shadow-2xl mb-8">
          <label htmlFor="faq-search-input" className="block text-xs uppercase tracking-wider text-gold-300 font-bold mb-2">
            Search Questions & Everyday Terms
          </label>
          <div className="relative">
            <Search className="w-6 h-6 text-gold-300 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="faq-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, offence, or charge (e.g. guns, weed, drink driving, blowing over, pub fight, locked up)..."
              className="w-full pl-14 pr-12 py-4 bg-charcoal-950 border-2 border-gold-400/60 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-gold-300 focus:ring-2 focus:ring-gold-400/30 transition-all text-base sm:text-lg font-sans font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-neutral-300 hover:text-white transition-colors"
                title="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Slang Detection Alert Notification */}
          <AnimatePresence>
            {detectedSlang && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="mt-4 flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-gold-400/15 border border-gold-400/40 text-gold-200 text-xs sm:text-sm font-medium"
              >
                <Zap className="w-4 h-4 text-gold-300 flex-shrink-0" />
                <span>
                  <strong>Search Term:</strong> "{detectedSlang.term}" matched to legal matter <strong>{detectedSlang.legalTerm}</strong>.
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Category Tabs / Filters */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between mb-3 text-xs uppercase tracking-wider text-neutral-300 font-bold">
              <span className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gold-300" />
                Filter by Category:
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={expandAll}
                  className="hover:text-gold-300 transition-colors font-bold text-neutral-300"
                >
                  Expand All
                </button>
                <span>•</span>
                <button
                  onClick={collapseAll}
                  className="hover:text-gold-300 transition-colors font-bold text-neutral-300"
                >
                  Collapse All
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {FAQ_CATEGORIES.map(category => {
                const isSelected = selectedCategory === category;
                const count = categoryCounts[category] || 0;

                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`text-xs sm:text-sm px-4 py-2.5 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${
                      isSelected
                        ? 'bg-gold-400 text-charcoal-950 shadow-md font-bold'
                        : 'bg-charcoal-800 text-neutral-200 hover:bg-charcoal-700 hover:text-white border border-white/10'
                    }`}
                  >
                    <span>{category}</span>
                    <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                      isSelected ? 'bg-charcoal-950/20 text-charcoal-950' : 'bg-charcoal-950 text-neutral-300'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Counter & Reset */}
        <div className="flex items-center justify-between text-sm text-neutral-300 mb-6 font-medium">
          <div>
            Showing <span className="text-white font-bold">{filteredFAQs.length}</span> questions
            {selectedCategory !== 'All' && <span> in <strong className="text-gold-300">{selectedCategory}</strong></span>}
            {searchQuery && <span> matching "<strong className="text-white">{searchQuery}</strong>"</span>}
          </div>

          {(searchQuery || selectedCategory !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-gold-300 hover:text-white hover:underline flex items-center gap-1 font-bold"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* FAQs Accordion List */}
        {filteredFAQs.length === 0 ? (
          <div className="text-center py-16 px-4 bg-charcoal-900 border border-white/15 rounded-xl">
            <Search className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-white mb-2 font-bold">No Matching Questions Found</h3>
            <p className="text-base text-neutral-200 max-w-md mx-auto mb-6">
              We couldn't find any FAQs matching "{searchQuery}". You can contact our criminal defence team directly for assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-6 py-3 bg-charcoal-800 hover:bg-charcoal-700 text-white text-xs uppercase tracking-wider font-bold rounded-lg transition-colors border border-white/20"
              >
                Clear Search
              </button>
              <a
                href="tel:0421066608"
                className="px-6 py-3 bg-gold-400 hover:bg-gold-500 text-charcoal-950 text-xs uppercase tracking-wider font-bold rounded-lg transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call 0421 066 608
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFAQs.map((faq) => {
              const isOpen = openIds.has(faq.id);

              return (
                <article
                  key={faq.id}
                  id={faq.id}
                  className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-gold-400/60 bg-charcoal-900 shadow-xl' 
                      : 'border-white/15 bg-charcoal-900/80 hover:border-white/30 hover:bg-charcoal-900'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-2 pr-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs uppercase tracking-wider text-gold-300 bg-gold-400/10 px-2.5 py-0.5 rounded border border-gold-400/25 font-bold">
                          {faq.category}
                        </span>

                        {/* Retain hashtags in the actual FAQ card */}
                        {faq.slangTags?.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className="text-xs text-neutral-300 bg-white/5 px-2 py-0.5 rounded border border-white/10 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h2 className="text-lg sm:text-xl font-serif text-white leading-snug font-bold">
                        {faq.question}
                      </h2>
                    </div>

                    <div className="flex items-center gap-2 pt-1 flex-shrink-0">
                      <ChevronDown
                        className={`w-5 h-5 text-gold-300 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-white/10 space-y-4">
                          <p className="text-neutral-100 text-base sm:text-lg leading-relaxed font-normal">
                            {faq.answer}
                          </p>

                          {/* Full Hashtag list for this FAQ */}
                          {faq.slangTags && faq.slangTags.length > 0 && (
                            <div className="flex flex-wrap items-center gap-2 pt-2">
                              <span className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mr-1">
                                Related Tags:
                              </span>
                              {faq.slangTags.map(tag => (
                                <span
                                  key={tag}
                                  className="text-xs text-gold-300 px-2 py-0.5 rounded bg-gold-400/10 border border-gold-400/20 font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Action Bar for each FAQ */}
                          <div className="pt-3 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm border-t border-white/10">
                            <button
                              onClick={(e) => handleShareFAQ(faq.id, e)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-neutral-300 hover:text-white transition-colors border border-white/10 hover:border-white/30"
                              title="Copy permanent link to this question"
                            >
                              {copiedId === faq.id ? (
                                <>
                                  <Check className="w-4 h-4 text-emerald-400" />
                                  <span className="text-emerald-400 font-bold">Link Copied!</span>
                                </>
                              ) : (
                                <>
                                  <Share2 className="w-4 h-4 text-gold-300" />
                                  <span>Share Question</span>
                                </>
                              )}
                            </button>

                            <a
                              href="tel:0421066608"
                              className="text-neutral-200 hover:text-gold-300 transition-colors flex items-center gap-1.5 font-bold"
                            >
                              <Phone className="w-4 h-4 text-gold-300" />
                              <span>Urgent Legal Help: 0421 066 608</span>
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        )}

        {/* Bottom Call to Action */}
        <section className="mt-16 bg-charcoal-900 border-2 border-gold-400 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-gold-300 font-bold mb-2 block">
              Urgent Defence Representation
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-white mb-4 font-bold">
              Facing Police Questioning or an Upcoming Court Mention?
            </h2>
            <p className="text-neutral-100 text-base leading-relaxed mb-4 font-normal">
              Every criminal prosecution hinges on subtle evidentiary admissibility, search legality, and skilled courtroom advocacy. 
              Do not leave your future or clean record to chance. Exercise your absolute right to silence and contact a lawyer immediately before making statements or pleading.
            </p>
            <p className="text-neutral-200 text-sm leading-relaxed mb-6 font-normal">
              Working in close alliance with Australia's premier criminal defence barristers across NSW & Queensland. Representing clients throughout: <strong className="text-white">Tweed Heads, Kingscliff, Murwillumbah, Byron Bay, Ballina, Lismore, Mullumbimby, Ocean Shores, Pottsville, Casino, Kyogle, Southport, Coolangatta, Surfers Paradise, Burleigh Heads, Robina, Broadbeach, Beenleigh, and Brisbane</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:0421066608"
                className="px-6 py-3.5 bg-gold-400 hover:bg-gold-500 text-charcoal-950 rounded-lg font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2 shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Call 0421 066 608 Now</span>
              </a>

              <a
                href="/#contact"
                className="px-6 py-3.5 bg-charcoal-800 hover:bg-charcoal-700 text-white border border-white/20 rounded-lg font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center gap-2"
              >
                <span>Contact Us</span>
                <ChevronRight className="w-4 h-4 text-gold-300" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
