export interface FAQItem {
  id: string;
  category: FAQCategory;
  question: string;
  answer: string;
  keywords: string[];
  slangTags: string[];
}

export const FAQ_CATEGORIES = [
  'All',
  'Police & Arrest Rights',
  'Drink & Drug Driving',
  'Bail Applications',
  'Assault & Violent Offences',
  'Domestic Violence & AVOs',
  'Drug Charges',
  'Guns & Weapons (Firearms)',
  'Fraud & Financial Crime',
  'Court Process & Sentencing',
  'Legal Fees & Defense Team'
] as const;

export type FAQCategory = typeof FAQ_CATEGORIES[number];

export const ALL_FAQS: FAQItem[] = [
  // ==========================================
  // --- Police & Arrest Rights ---
  // ==========================================
  {
    id: 'police-silence-rights',
    category: 'Police & Arrest Rights',
    question: 'Do I have to answer police questions or attend an interview in NSW?',
    answer: 'Under NSW law, you have a fundamental common law and statutory right to silence. Aside from providing your name, residential address, and driver licence (if driving), you are NOT legally required to answer questions, participate in an electronically recorded interview (ERISP), or explain your side of the story. In fact, answering police questions without legal advice is one of the most common mistakes individuals make, as casual remarks or partial explanations can be taken out of context and used against you in court. Contact Adam Ashley immediately before saying anything to police.',
    keywords: ['right to silence', 'police interview', 'ERISP', 'interrogation', 'LEPRA', 'caution', 'cops', 'fuzz', 'no comment', 'shut up', 'talking to cops'],
    slangTags: ['#right-to-silence', '#no-comment', '#cops-interview', '#erisp', '#dont-talk-to-police']
  },
  {
    id: 'police-search-car',
    category: 'Police & Arrest Rights',
    question: 'Can police search my vehicle without a warrant on the side of the road?',
    answer: 'Under Section 36 of the Law Enforcement (Powers and Responsibilities) Act 2002 (NSW) (LEPRA), police can search a vehicle without a warrant only if they hold "reasonable suspicion" that the car contains stolen goods, illicit drugs, dangerous weapons (such as guns or knives), or implements intended for an offence. A hunch or random traffic stop does not legally suffice. If police lack genuine reasonable suspicion, any evidence seized may be deemed illegally obtained and excluded under Section 138 of the Evidence Act. We routinely challenge unlawful police vehicle searches.',
    keywords: ['car search', 'vehicle search', 'reasonable suspicion', 'LEPRA', 'Section 36', 'illegal search', 'cops searching car', 'pulled over', 'boot search'],
    slangTags: ['#car-search', '#pulled-over', '#cops-searching', '#lepra-section-36', '#illegal-search']
  },
  {
    id: 'police-search-phone',
    category: 'Police & Arrest Rights',
    question: 'Can police search my mobile phone or force me to hand over my passcode/PIN?',
    answer: 'Generally, police cannot force you to unlock your phone, provide your PIN code, or scan your face/fingerprint upon a routine street arrest or stop-and-search without a specific digital search warrant or an auxiliary order under federal legislation (such as a 3LA Order under the Crimes Act 1914 for Commonwealth matters). In NSW state matters, you are not required to give up your passcode merely because police ask. Always politely state that you wish to consult criminal counsel Adam Ashley before complying with device access demands.',
    keywords: ['phone search', 'passcode', 'mobile phone PIN', 'digital privacy', 'warrant', '3LA order', 'unlock phone', 'cops looking through phone', 'pin code'],
    slangTags: ['#phone-pin-code', '#unlock-phone', '#cops-phone-search', '#digital-privacy', '#3la-order']
  },
  {
    id: 'police-sniffer-dogs',
    category: 'Police & Arrest Rights',
    question: 'Can police strip search me just because a drug sniffer dog sits next to me?',
    answer: 'In NSW, under the LEPRA framework, a drug detection dog\'s indication alone does NOT automatically establish reasonable suspicion justifying an intrusive strip search. While police use a canine indication as grounds for a general search (emptying pockets and bags), strict statutory safeguards govern when strip searches may occur (requiring seriousness and urgency under Section 31 LEPRA). Unlawful strip searches at music festivals, train stations, or pubs are frequently challenged in court to have evidence thrown out under Section 138 of the Evidence Act.',
    keywords: ['drug detection dogs', 'sniffer dog', 'strip search', 'festival search', 'reasonable grounds', 'Section 138', 'sniff dogs', 'music festival bust', 'pat down'],
    slangTags: ['#sniff-dogs', '#strip-search', '#festival-bust', '#pat-down', '#drug-dog-search']
  },
  {
    id: 'police-investigation-period',
    category: 'Police & Arrest Rights',
    question: 'How long can NSW police detain me after an arrest before charging or releasing me?',
    answer: 'Under Part 9 of LEPRA, police may detain an arrested person for an "investigation period" of up to 6 hours. However, police can apply to an authorized magistrate or judicial officer for a detention warrant extending this period by up to an additional 6 hours. Crucially, "time-out" periods (such as time spent waiting for legal advice from your lawyer, medical attention, or an interpreter) do not count toward the 6-hour limit. If you are detained in the cells, assert your right to contact Frontline Lawyers immediately.',
    keywords: ['detention period', 'investigation period', 'arrest custody', '6 hours', 'detention warrant', 'locked in cells', 'paddy wagon', 'station custody'],
    slangTags: ['#locked-in-cells', '#6-hour-rule', '#investigation-period', '#paddy-wagon', '#police-custody']
  },
  {
    id: 'police-section-99-arrest-powers',
    category: 'Police & Arrest Rights',
    question: 'When is a police arrest considered unlawful under Section 99 LEPRA in NSW?',
    answer: 'Section 99 of the Law Enforcement (Powers and Responsibilities) Act 2002 sets strict limits on arrest without warrant. Police cannot arrest you simply to interview you, question you, or investigate suspicions when issuing a Court Attendance Notice (CAN) would suffice. They must satisfy a two-part test: (1) suspecting on reasonable grounds that you committed an offence, and (2) establishing that arrest is strictly necessary for specific statutory reasons (e.g., stopping fleeing, ensuring court appearance, or protecting evidence). Unlawful arrests can result in charges being dismissed and civil claims for compensation.',
    keywords: ['Section 99 LEPRA', 'unlawful arrest', 'false imprisonment', 'arrest powers', 'police misconduct', 'wrongful arrest', 'bad cop arrest'],
    slangTags: ['#unlawful-arrest', '#section-99-lepra', '#police-misconduct', '#court-attendance-notice', '#false-imprisonment']
  },
  {
    id: 'police-search-warrant-home',
    category: 'Police & Arrest Rights',
    question: 'What should I do if police knock on my door with a search warrant (raid)?',
    answer: 'First, request to inspect the search warrant before allowing entry. Confirm the address listed, verify that it is signed and dated by an authorized justice, and note the specific items police are authorized to search for. You are not required to answer informal questions or participate in an interview during the execution of the warrant. Contact Frontline Lawyers immediately so our defense team can monitor the search, object to unlawful seizures, and protect privileged documents.',
    keywords: ['search warrant', 'police raid', 'door knock', 'house search', 'LEPRA warrant', 'cops raiding house', 'dawn raid', 'warrant inspection'],
    slangTags: ['#police-raid', '#search-warrant', '#cops-at-the-door', '#house-raid', '#door-knock']
  },

  // ==========================================
  // --- Drink & Drug Driving (DUI & RBT) ---
  // ==========================================
  {
    id: 'traffic-blowing-over-dui',
    category: 'Drink & Drug Driving',
    question: 'What happens if I blew over the limit or got caught drink driving (DUI) in NSW?',
    answer: 'In NSW, drink driving offences (PCA offences under the Road Transport Act 2013) carry immediate police licence suspensions, mandatory disqualification periods, substantial fines, and mandatory Alcohol Interlock orders. Offence brackets range from Novice/Special Range (over 0.00 or 0.02), Low Range (0.05 to 0.079), Mid Range (0.08 to 0.149), to High Range (0.150 and above). For Mid and High Range, the court may also consider custodial sentences unless strong mitigation and rehabilitation are presented by experienced counsel.',
    keywords: ['blowing over', 'blew over', 'drink driving', 'dui', 'pca', 'over the limit', 'drunk driving', 'pissed driving', 'rbt', 'breath test', 'booze bus'],
    slangTags: ['#blowing-over', '#dui', '#drink-driving', '#rbt', '#over-the-limit', '#blew-over']
  },
  {
    id: 'traffic-medical-cannabis-defense',
    category: 'Drink & Drug Driving',
    question: 'Can I be charged with drug driving if I have a legal medical weed prescription?',
    answer: 'Yes. Under Section 111 of the Road Transport Act 2013 (NSW), it is an offence to drive with ANY detectable presence of illicit drugs (including THC/cannabis) in your oral fluid, blood, or urine. Unlike other states like Tasmania, NSW law currently does NOT provide an automatic statutory defense or exemption for legally prescribed medicinal cannabis patients. Even if you consumed medicinal cannabis days earlier and are completely unimpaired, a positive roadside tongue swipe can trigger prosecution. Adam Ashley provides expert defense representation to protect your licence.',
    keywords: ['medical cannabis driving', 'prescribed THC', 'roadside drug test', 'tongue swipe', 'Section 111', 'medical weed', 'medicinal marijuana', 'pot prescription'],
    slangTags: ['#medical-weed-driving', '#tongue-swipe', '#prescribed-cannabis', '#drug-driving-defense', '#thc-testing']
  },
  {
    id: 'traffic-high-range-penalties',
    category: 'Drink & Drug Driving',
    question: 'What are the penalties for High-Range Drink Driving (0.150+) in NSW?',
    answer: 'High-Range PCA (BAC 0.150 or higher) is treated as an extremely serious criminal offence in NSW. For a first offence, penalties include a maximum fine of $3,300, up to 18 months imprisonment, an automatic licence disqualification of 3 years (minimum 12 months), and a mandatory 24-month Alcohol Interlock Order. For a second or subsequent major offence within 5 years, maximum prison time increases to 2 years with a minimum 4-year interlock period. Urgent legal representation is essential to argue for non-custodial sentences and reduced disqualification.',
    keywords: ['high range pca', '0.150', 'drink driving prison', 'licence disqualification', 'mandatory interlock', 'blown high', 'super drunk driving'],
    slangTags: ['#high-range-pca', '#blew-high', '#dui-penalties', '#licence-disqualification', '#avoid-prison']
  },
  {
    id: 'traffic-alcohol-interlock-order',
    category: 'Drink & Drug Driving',
    question: 'How does the mandatory Alcohol Interlock Program work in NSW?',
    answer: 'The NSW Mandatory Alcohol Interlock Program requires drivers convicted of Mid-Range PCA, High-Range PCA, or repeat drink driving offences to install an electronic breath-testing device wired to their car\'s ignition. The vehicle will not start if alcohol is detected on the driver\'s breath. You must serve a minimum court-ordered disqualification period before obtaining an Interlock Licence for 12 to 48 months. Under Section 212 of the Road Transport Act, Adam Ashley can apply for an Interlock Exemption Order if severe medical or economic hardship is proven.',
    keywords: ['alcohol interlock', 'interlock exemption', 'breathalyzer car', 'mid range interlock', 'high range', 'blower in car', 'car breath test'],
    slangTags: ['#interlock-order', '#car-breathalyzer', '#interlock-exemption', '#drink-drive-laws']
  },
  {
    id: 'traffic-refuse-breath-analysis',
    category: 'Drink & Drug Driving',
    question: 'What happens if I refuse a roadside breath test or station breath analysis?',
    answer: 'Refusing or failing to submit to a roadside breath test, or refusing to provide a breath sample for analysis at the police station, is treated under NSW law as seriously as a High-Range PCA charge. It carries severe penalties including immediate licence suspension, substantial fines, mandatory interlock orders, and potential prison time. Unless you have a genuine medical inability to blow (supported by specialist medical evidence), refusal is rarely advantageous.',
    keywords: ['refuse breath test', 'refuse breath analysis', 'breathalyzer refusal', 'high range penalty', 'refusing to blow', 'said no to breath test'],
    slangTags: ['#refuse-breath-test', '#refused-to-blow', '#station-breath-analysis', '#high-range-equivalent']
  },
  {
    id: 'traffic-immediate-licence-suspension',
    category: 'Drink & Drug Driving',
    question: 'Can I appeal an immediate police roadside licence suspension notice?',
    answer: 'Yes. If police issue an on-the-spot licence suspension notice for drink driving or excessive speeding (exceeding speed limit by over 30km/h or 45km/h), you have 28 days to lodge a Licence Suspension Appeal in the Local Court. You must satisfy the magistrate that "exceptional circumstances" exist to justify lifting the suspension pending the final determination of the charge. We prepare detailed evidentiary briefs establishing urgent employment, medical, or family necessity.',
    keywords: ['licence suspension appeal', 'immediate suspension', 'exceptional circumstances', 'Local Court appeal', 'loss of licence', 'licence taken away'],
    slangTags: ['#licence-appeal', '#immediate-suspension', '#exceptional-circumstances', '#keep-my-licence']
  },
  {
    id: 'traffic-drive-disqualified',
    category: 'Drink & Drug Driving',
    question: 'What are the penalties for driving while disqualified or suspended in NSW?',
    answer: 'Driving while disqualified is viewed by NSW courts as a direct defiance of a court order. Penalties include automatic further disqualification periods, substantial fines of up to $3,300, and up to 6 months imprisonment for a first offence (or 12 months for repeat offences). For suspended driving (e.g. unpaid fines or demerit points), penalties are also significant. Experienced representation is essential to argue for community-based sentencing or dismissal.',
    keywords: ['drive while disqualified', 'driving suspended', 'defiance of court', 'further disqualification', 'penalties', 'caught driving suspended', 'driving without licence'],
    slangTags: ['#driving-disqualified', '#driving-suspended', '#defiance-of-court', '#traffic-penalties']
  },

  // ==========================================
  // --- Bail Applications (Locked Up / Remand) ---
  // ==========================================
  {
    id: 'bail-act-show-cause',
    category: 'Bail Applications',
    question: 'What does "Show Cause" mean under the NSW Bail Act 2013?',
    answer: 'Under Section 16A of the Bail Act 2013 (NSW), if you are charged with a "show cause offence" (such as serious commercial drug supply, aggravated sexual assault, firearms offences, armed robbery, or serious violent offences), the court MUST refuse bail unless the accused person shows cause why their detention is not justified. This is a reverse legal burden. Adam Ashley crafts rigorous show cause submissions demonstrating compelling factors like strength of defense, young age, medical needs, delay, or an unblemished record.',
    keywords: ['show cause bail', 'Bail Act 2013', 'reverse burden', 'serious criminal charge', 'release', 'locked up', 'behind bars', 'remand', 'getting out'],
    slangTags: ['#show-cause-bail', '#locked-up', '#behind-bars', '#bail-application', '#remand-release']
  },
  {
    id: 'bail-unacceptable-risk-test',
    category: 'Bail Applications',
    question: 'What is the "Unacceptable Risk" test used by magistrates when deciding bail?',
    answer: 'Even if show cause is satisfied (or for non-show-cause offences), the court must assess whether there is an unacceptable risk that the accused person will: (1) fail to appear at court, (2) commit a serious offence while on bail, (3) endanger the safety of victims or the community, or (4) interfere with witnesses or evidence. Bail conditions (such as curfews, daily reporting, sureties, and non-association orders) are designed to mitigate these risks to an acceptable level.',
    keywords: ['unacceptable risk', 'bail conditions', 'curfew', 'reporting to police', 'witness interference', 'stay out of jail', 'get bailed out'],
    slangTags: ['#unacceptable-risk', '#bail-conditions', '#curfew', '#get-bailed-out', '#reporting-conditions']
  },
  {
    id: 'bail-second-local-court-attempt',
    category: 'Bail Applications',
    question: 'Can I apply for bail a second time in the Local Court if my first application was refused?',
    answer: 'Under Section 74 of the NSW Bail Act, you cannot make a second bail application in the same court unless you demonstrate a "change of circumstances" or that material information was not presented at the first hearing. This makes the initial bail application critical. If bail was refused in the Local Court, your primary remedy is an urgent application to the Supreme Court of NSW in Sydney.',
    keywords: ['Section 74 Bail Act', 'second bail application', 'change of circumstances', 'bail refused', 'stuck inside', 'denied bail'],
    slangTags: ['#bail-refused', '#second-bail-attempt', '#section-74', '#supreme-court-bail']
  },
  {
    id: 'bail-weekend-avl-court',
    category: 'Bail Applications',
    question: 'What happens at a Weekend Bail Court via Audio Visual Link (AVL)?',
    answer: 'If you are arrested on a Friday night, weekend, or public holiday in the Northern Rivers (e.g. Tweed, Byron, or Lismore), police will hold you in cells and list your matter before the centralized Weekend Bail Court (often Parramatta Bail Court or regional AVL hub). The hearing takes place by Audio Visual Link. Having private defense counsel appear remotely or via agent ensures that detailed bail material, surety verification, and residential addresses are properly presented to the magistrate.',
    keywords: ['weekend bail court', 'Parramatta bail court', 'AVL bail', 'video link', 'after hours arrest', 'saturday court', 'sunday arrest', 'locked up weekend'],
    slangTags: ['#weekend-bail', '#parramatta-bail', '#avl-video-link', '#after-hours-arrest', '#weekend-cells']
  },
  {
    id: 'bail-surety-security',
    category: 'Bail Applications',
    question: 'What is an "acceptable person" or surety in a criminal bail application?',
    answer: 'A surety (or "acceptable person") is an individual—usually a family member or close friend—who agrees to deposit or forfeit a sum of money or equity in property if the accused person breaches bail and fails to appear in court. The court reviews the surety\'s character, criminal record, financial standing, and relationship with the accused to ensure the guarantee is genuine and influential.',
    keywords: ['surety', 'acceptable person', 'bail money', 'property security', 'forfeiture', 'putting up cash', 'bail guarantor'],
    slangTags: ['#bail-money', '#surety', '#acceptable-person', '#bail-guarantor', '#cash-security']
  },
  {
    id: 'bail-breach-allegations',
    category: 'Bail Applications',
    question: 'What should I do if police allege I breached my bail conditions in NSW?',
    answer: 'If police suspect a bail breach (e.g., missing curfew by minutes, failing to report, or returning a positive breath test), they have power to arrest you under Section 77 of the Bail Act and bring you before court. At court, the magistrate has discretion to take no action, release you on the same bail, vary your conditions, or revoke bail entirely. Adam Ashley acts rapidly to explain administrative oversights or emergencies to prevent clients from being remanded in custody.',
    keywords: ['breach of bail', 'Section 77 Bail Act', 'bail revoked', 'curfew breach', 'police arrest', 'busted on bail', 'late for curfew'],
    slangTags: ['#breach-of-bail', '#curfew-breach', '#section-77', '#bail-revoked', '#remand-risk']
  },

  // ==========================================
  // --- Assault & Violent Offences (Fights / Brawls) ---
  // ==========================================
  {
    id: 'assault-pub-fight-brawl',
    category: 'Assault & Violent Offences',
    question: 'What happens if you get into a fight, pub brawl, or scrap in NSW?',
    answer: 'Physical altercations at licensed premises, clubs, or on the street are prosecuted vigorously in NSW. Charges range from Common Assault (Section 61 Crimes Act - max 2 years) to Affray (Section 93C Crimes Act - using or threatening unlawful violence causing a person of reasonable firmness to fear for safety - max 10 years). If injuries occur, charges elevate to Assault Occasioning Actual Bodily Harm (AOABH - max 5 to 7 years) or Wounding/GBH. Our defense team scrutinizes CCTV footage, bouncer statements, and self-defense evidence to dismiss charges.',
    keywords: ['pub fight', 'brawl', 'scrap', 'punch on', 'bar fight', 'affray', 'common assault', 'coward punch', 'bashing', 'glassing', 'king hit'],
    slangTags: ['#pub-fight', '#bar-brawl', '#punch-on', '#scrap', '#affray', '#coward-punch']
  },
  {
    id: 'assault-degrees-difference',
    category: 'Assault & Violent Offences',
    question: 'What is the legal difference between Common Assault, AOABH, Wounding, and GBH?',
    answer: 'NSW criminal law grades assaults according to intent and severity of injury: Common Assault (s61 Crimes Act) involves threats or physical force causing no injury or fleeting discomfort (max 2 years); Assault Occasioning Actual Bodily Harm - AOABH (s59) involves injuries that interfere with health or comfort, like cuts or bruising (max 5 years); Wounding or Grievous Bodily Harm - GBH (s33, s35) involves breaking all layers of skin or really serious permanent bodily harm (max up to 25 years). The charge grade dictates whether the case is finalized in the Local Court or goes to a jury trial in the District Court.',
    keywords: ['common assault', 'AOABH', 'GBH', 'wounding', 'actual bodily harm', 'grievous bodily harm', 'broken jaw', 'split lip', 'cut'],
    slangTags: ['#common-assault', '#aoabh', '#gbh', '#wounding', '#grievous-bodily-harm']
  },
  {
    id: 'assault-self-defense-laws',
    category: 'Assault & Violent Offences',
    question: 'Can I claim self-defense if I hit or punched someone first during an altercation?',
    answer: 'Yes. Under Section 418 of the Crimes Act 1900 (NSW), pre-emptive force can be lawful self-defense if you genuinely believed an imminent attack was about to occur. The legal test is: (1) Did the accused genuinely believe their conduct was necessary to defend themselves or another person? (Subjective test), and (2) Was their conduct a reasonable response in the circumstances as they perceived them? (Objective test). Once evidence of self-defense is raised, the prosecution bears the heavy burden of disproving it beyond reasonable doubt.',
    keywords: ['self defense', 'hit first', 'punched first', 'pre-emptive strike', 'Section 418', 'reasonable force', 'justification', 'not guilty', 'trial'],
    slangTags: ['#self-defense', '#hit-first', '#reasonable-force', '#section-418', '#not-guilty-assault']
  },
  {
    id: 'assault-victim-withdraw-statement',
    category: 'Assault & Violent Offences',
    question: 'Can the police proceed with an assault charge if the alleged victim wants to drop it?',
    answer: 'Yes. In NSW, criminal charges are brought by the State (the NSW Police Force or Director of Public Prosecutions), not the private individual. Even if the complainant signs a formal retraction statement or refuses to attend court, police can and often do proceed using triple-zero (000) audio recordings, body-worn video (BWV) footage, and medical records. Adam Ashley negotiates with prosecution command and cross-examines evidence to achieve charge withdrawals or acquittals.',
    keywords: ['drop charges', 'withdraw statement', 'retraction', 'domestic assault', 'prosecution discretion', 'victim dropped charges', 'charges thrown out'],
    slangTags: ['#drop-charges', '#withdraw-statement', '#retraction', '#charges-thrown-out', '#prosecution-discretion']
  },

  // ==========================================
  // --- Domestic Violence & AVOs (Restraining Orders) ---
  // ==========================================
  {
    id: 'avo-difference-advo-apvo',
    category: 'Domestic Violence & AVOs',
    question: 'What is the difference between an ADVO (Domestic) and an APVO (Personal)?',
    answer: 'An Apprehended Domestic Violence Order (ADVO) is made between individuals who have had a domestic relationship (spouses, de facto partners, ex-partners, family members, or flatmates). An Apprehended Personal Violence Order (APVO) involves individuals who are not related (such as disputing neighbours, co-workers, or strangers). While an AVO itself is a civil order and not an initial criminal conviction, any alleged breach of an AVO is a serious criminal offence under Section 14 of the Crimes (Domestic and Personal Violence) Act 2007 carrying up to 2 years imprisonment.',
    keywords: ['ADVO', 'APVO', 'AVO breach', 'restraining order', 'neighbour dispute', 'domestic violence', 'dvo', 'court order'],
    slangTags: ['#advo', '#apvo', '#restraining-order', '#dvo', '#domestic-violence-order']
  },
  {
    id: 'avo-breach-text-message',
    category: 'Domestic Violence & AVOs',
    question: 'What happens if I breach an AVO by sending a text message or phone call to my ex?',
    answer: 'In NSW, under Section 14 of the Crimes (Domestic and Personal Violence) Act 2007, knowingly contravening an AVO—even via a single text message, email, social media DM, or asking a third party to send a message—is a criminal offence punishable by up to 2 years imprisonment and a $5,500 fine. Furthermore, if the breach involves an act of violence, Section 14(4) creates a statutory presumption that the court must impose a full-time prison sentence unless exceptional reasons exist.',
    keywords: ['AVO breach', 'texting ex', 'phone call breach', 'Section 14', 'domestic violence breach', 'sent a text', 'contacted ex'],
    slangTags: ['#breach-avo', '#texting-ex', '#section-14', '#restraining-order-breach', '#prison-presumption']
  },
  {
    id: 'avo-contest-consent-without-admission',
    category: 'Domestic Violence & AVOs',
    question: 'Should I contest an AVO or consent "Without Admissions" in the Local Court?',
    answer: 'Consenting to an AVO "without admission of liability" resolves the civil order without a formal finding that you committed domestic violence. However, accepting an AVO triggers immediate consequences: automatic revocation of firearms licences for 10 years, potential impacts on working with children checks or security clearances, and vulnerability to criminal breach charges. If the allegations are fabricated or exaggerated, Adam Ashley regularly defends and defeats contested AVO hearings.',
    keywords: ['consent without admissions', 'contest AVO', 'false domestic violence', 'gun licence revoked', 'AVO hearing', 'fighting an avo'],
    slangTags: ['#contest-avo', '#consent-without-admissions', '#fight-the-avo', '#false-allegations']
  },
  {
    id: 'avo-police-exclusion-order',
    category: 'Domestic Violence & AVOs',
    question: 'Can police immediately exclude me from my home using a provisional ADVO (kicked out)?',
    answer: 'Yes. NSW Police can make an urgent Provisional ADVO with an exclusion condition prohibiting you from approaching or entering the family residence, even if you are the sole owner, titleholder, or leaseholder. Once served, entering the property constitutes a criminal breach. Adam Ashley can make an urgent variation application to the Local Court to challenge unreasonable exclusion orders and negotiate property access protocols.',
    keywords: ['exclusion condition', 'provisional ADVO', 'family home', 'kicked out of house', 'variation', 'locked out of house', 'cops kicked me out'],
    slangTags: ['#kicked-out-of-home', '#exclusion-order', '#provisional-advo', '#locked-out', '#urgent-variation']
  },

  // ==========================================
  // --- Drug Charges (Weed, Gear, Pills, Ice, Coke) ---
  // ==========================================
  {
    id: 'drugs-weed-cannabis-possession',
    category: 'Drug Charges',
    question: 'What happens if police catch me with weed (cannabis) or personal gear in NSW?',
    answer: 'Under Section 10 of the Drug Misuse and Trafficking Act 1985 (NSW), possessing any quantity of an illicit drug is a criminal offence carrying penalties of up to 2 years imprisonment and a $2,200 fine. However, for minor first-time cannabis possession (under 15 grams), police may exercise discretion under the Cannabis Cautioning Scheme. If charged and brought to court, Adam Ashley frequently secures Section 10 dismissals or Conditional Release Orders (CROs) with NO criminal conviction recorded.',
    keywords: ['weed', 'cannabis', 'pot', 'bud', 'grass', 'marijuana', 'thc', 'cones', 'personal possession', 'caught with weed', 'drug charge'],
    slangTags: ['#weed-possession', '#pot', '#bud', '#cannabis-caution', '#no-conviction-weed']
  },
  {
    id: 'drugs-ice-coke-pills-possession',
    category: 'Drug Charges',
    question: 'What happens if police catch you with personal gear, ice, coke, or pills?',
    answer: 'Possession of prohibited drugs such as methylamphetamine (ice / gear / shard), cocaine (coke / rack / bags), or MDMA (ecstasy / caps / pills) is prosecuted under Section 10 of the DMTA. While classified as summary matters in the Local Court for personal use quantities, magistrates take hard drugs seriously. Defenses focus on whether you had legal knowledge and exclusive physical control, whether the search was lawful under LEPRA, or preparing comprehensive rehabilitation material to achieve a non-conviction outcome.',
    keywords: ['ice', 'meth', 'coke', 'cocaine', 'gear', 'rack', 'caps', 'pills', 'mdma', 'ecstasy', 'shard', 'speed', 'personal gear', 'caught with drugs'],
    slangTags: ['#ice-charges', '#coke-possession', '#gear', '#mdma-caps', '#personal-drugs-defense']
  },
  {
    id: 'drugs-deemed-supply',
    category: 'Drug Charges',
    question: 'What is "Deemed Supply" and when does having gear or pills become dealing in NSW?',
    answer: 'In NSW, under Section 29 of the Drug Misuse and Trafficking Act, if you are found possessing a quantity of drugs at or above the "trafficable quantity" threshold (e.g., 3 grams of cocaine, 3 grams of MDMA/caps, or 300 grams of cannabis), the law automatically PRESUMES you possessed them for commercial supply. The burden of proof shifts to the accused to prove on the balance of probabilities that the substances were exclusively for personal consumption. Forensic analysis, purity testing, and expert evidence are vital to defeat deemed supply.',
    keywords: ['deemed supply', 'trafficable quantity', 'Section 29', 'reverse burden', 'personal use', 'drug dealing', 'accused of dealing', 'supply charges'],
    slangTags: ['#deemed-supply', '#trafficable-quantity', '#drug-dealing-charge', '#reverse-burden', '#section-29']
  },
  {
    id: 'drugs-cannabis-caution-scheme',
    category: 'Drug Charges',
    question: 'What is the NSW Cannabis Cautioning Scheme and who qualifies?',
    answer: 'Under the NSW Police Cannabis Cautioning Scheme, police have discretion to issue a formal caution rather than charging you with an offence if you are found in possession of not more than 15 grams of cannabis for personal use. To qualify, you must be an adult, have no prior convictions for drug offences or violent crimes, and admit to the possession. You can receive a maximum of two cautions in a lifetime before criminal charges become mandatory.',
    keywords: ['cannabis caution', '15 grams cannabis', 'police discretion', 'weed caution', 'first time possession', 'pot caution', 'smoking weed'],
    slangTags: ['#cannabis-caution', '#weed-caution-scheme', '#15g-cannabis', '#police-discretion']
  },
  {
    id: 'drugs-merit-program',
    category: 'Drug Charges',
    question: 'What is the MERIT Program and can it help me avoid a criminal sentence?',
    answer: 'The Magistrates Early Referral Into Treatment (MERIT) program is a specialized court diversion program available in NSW Local Courts for eligible defendants with substance use issues. Participation is voluntary and lasts approximately 12 weeks while your court proceedings are adjourned. Successfully completing MERIT provides powerful mitigation at sentencing, frequently enabling magistrates to impose non-conviction orders (CROs) or avoid custodial penalties.',
    keywords: ['MERIT program', 'court diversion', 'drug rehab', 'sentencing mitigation', 'treatment', 'drug court', 'rehab program'],
    slangTags: ['#merit-program', '#court-diversion', '#drug-rehab', '#avoid-conviction']
  },
  {
    id: 'drugs-commercial-quantity',
    category: 'Drug Charges',
    question: 'What are the penalties for Commercial and Large Commercial Drug Supply in NSW?',
    answer: 'Commercial Quantity and Large Commercial Quantity supply are strictly indictable charges prosecuted by the DPP in the District or Supreme Court. Large Commercial Supply carries a maximum penalty of life imprisonment and substantial standard non-parole periods (ranging from 10 to 15 years). Defending these charges requires rigorous scrutiny of telecommunications warrants, electronic surveillance, undercover operatives, and supply chain evidence.',
    keywords: ['commercial quantity', 'large commercial supply', 'life imprisonment', 'non parole period', 'DPP', 'major drug bust', 'drug syndicate'],
    slangTags: ['#commercial-supply', '#large-commercial-quantity', '#life-imprisonment', '#dpp-prosecution']
  },
  {
    id: 'drugs-shared-house-possession',
    category: 'Drug Charges',
    question: 'Can I be charged with drug possession if illicit substances were found in a shared house?',
    answer: 'Yes, police often charge everyone on the premises when drugs are discovered in shared spaces like living rooms, kitchen cupboards, or shared cars. However, under the leading High Court authority He Kaw Teh and NSW case law (such as Filipetti), the prosecution must prove beyond reasonable doubt that you had both physical custody/control AND actual knowledge of the existence and illicit nature of the drug. If drugs were in a common area accessible to multiple housemates or visitors, we frequently achieve dismissals.',
    keywords: ['exclusive possession', 'shared house drugs', 'Filipetti', 'He Kaw Teh', 'constructive possession', 'housemates drugs', 'drugs in flat'],
    slangTags: ['#shared-house-drugs', '#exclusive-possession', '#he-kaw-teh', '#filipetti-defense']
  },

  // ==========================================
  // --- Guns & Weapons (Firearms) ---
  // ==========================================
  {
    id: 'weapons-unlicensed-guns-firearms',
    category: 'Guns & Weapons (Firearms)',
    question: 'Guns in NSW: What are the penalties for possessing an unregistered gun or unlicensed firearm?',
    answer: 'Under the Firearms Act 1996 (NSW), possessing an unauthorized or unregistered firearm (including rifles, shotguns, handguns, and pistols) is treated with extreme severity. Possessing an unregistered firearm (Section 36) carries up to 5 years imprisonment in the Local/District Court. Possessing an unauthorized pistol or prohibited firearm (Section 7A) carries up to 14 years imprisonment, with strict mandatory sentencing provisions for commercial supply or possessing multiple firearms (Section 51D). Even holding an inherited gun without a licence is a criminal offence. Frontline Lawyers provides specialized firearm defense representation.',
    keywords: ['guns', 'firearms', 'unregistered gun', 'unlicensed firearm', 'pistol', 'rifle', 'shotgun', 'strap', 'gat', 'firearms act', 'Section 7A', 'carrying heat'],
    slangTags: ['#guns', '#firearms', '#unregistered-guns', '#pistols', '#firearms-act-1996', '#gun-charges']
  },
  {
    id: 'weapons-gel-blasters-replicas',
    category: 'Guns & Weapons (Firearms)',
    question: 'Gel Blasters & Replicas: Are gel blasters, replica guns, or BB guns illegal in NSW?',
    answer: 'Yes. In New South Wales, gel blasters, airsoft guns, and replica firearms that closely resemble functioning firearms are legally classified as "imitation firearms" or "prohibited weapons" under the Firearms Act 1996 and Weapons Prohibition Act 1998. It is an offence to possess or use a gel blaster without a specific firearms permit or legitimate prohibited weapon permit. Penalties can mirror those for possessing a genuine firearm. If you have been charged after ordering a gel blaster online or possessing one recreationally, speak to Adam Ashley immediately.',
    keywords: ['gel blasters', 'replica guns', 'bb guns', 'airsoft', 'toy gun', 'imitation firearms', 'prohibited weapons', 'fake gun', 'blaster charges'],
    slangTags: ['#gel-blasters', '#replica-guns', '#imitation-firearms', '#airsoft', '#prohibited-weapons']
  },
  {
    id: 'weapons-safe-storage-guns',
    category: 'Guns & Weapons (Firearms)',
    question: 'Safe Gun Storage: What are the NSW laws for storing firearms and ammunition safely?',
    answer: 'Under Part 4 of the Firearms Act 1996, licence holders are held to strict statutory storage standards: Category A and B firearms must be stored in an approved steel gun safe (or solid timber safe) bolted to the structure, with ammunition stored in a separate locked receptacle. Category C, D, and H (pistols) require safes of specified steel thickness and compliant alarm systems. Police conduct random audits, and failing to comply can lead to criminal charges under Section 39, seizure of all firearms, and permanent licence cancellation.',
    keywords: ['safe gun storage', 'gun safe', 'firearm storage', 'ammunition storage', 'police safe inspection', 'Category H safe', 'rifle safe', 'gun inspection'],
    slangTags: ['#safe-gun-storage', '#gun-safe-laws', '#firearm-inspection', '#ammo-storage', '#category-h']
  },
  {
    id: 'weapons-pocket-knife-custody',
    category: 'Guns & Weapons (Firearms)',
    question: 'Knives & Blades: Is it illegal to carry a pocket knife, box cutter, or blade in NSW?',
    answer: 'Under Section 11C of the Summary Offences Act 1988 (NSW), it is an offence to possess a knife in a public place or school without a "reasonable excuse". While lawful occupation (tradesperson carrying tools for work), food preparation, or legitimate recreation (fishing or scouting) are recognized excuses, self-defense is explicitly NOT a legal excuse. Recent legislative reforms have granted police expanded powers to search individuals for knives, blades, and weapons without a warrant in designated entertainment precincts.',
    keywords: ['pocket knife', 'knife laws NSW', 'reasonable excuse', 'Section 11C', 'multitool', 'weapons', 'box cutter', 'shank', 'blade', 'carrying knife', 'folding knife'],
    slangTags: ['#pocket-knife', '#knife-laws', '#blade', '#box-cutter', '#reasonable-excuse', '#weapons-search']
  },
  {
    id: 'weapons-prohibited-weapons-act',
    category: 'Guns & Weapons (Firearms)',
    question: 'What is considered a "prohibited weapon" under NSW law (tasers, knuckle dusters)?',
    answer: 'Under Schedule 1 of the Weapons Prohibition Act 1998 (NSW), prohibited weapons include flick knives, butterfly knives, brass knuckles (knuckle dusters), tasers / stun devices, pepper spray / mace, extendable batons, and crossbows. Possessing an unauthorized prohibited weapon carries up to 14 years imprisonment. If you face weapons charges, Frontline Lawyers investigates classification issues, import permits, and collectors exemptions.',
    keywords: ['prohibited weapons', 'knuckle dusters', 'tasers', 'pepper spray', 'baton', 'Weapons Prohibition Act', 'brass knuckles', 'stun gun', 'mace'],
    slangTags: ['#prohibited-weapons', '#knuckle-dusters', '#tasers', '#pepper-spray', '#weapons-prohibition-act']
  },
  {
    id: 'weapons-firearms-licence-revocation',
    category: 'Guns & Weapons (Firearms)',
    question: 'How do criminal charges or AVOs affect my NSW firearms licence (seized guns)?',
    answer: 'Under the Firearms Act 1996 (NSW), the NSW Firearms Registry has strict statutory obligations: if an interim or final AVO is made against you, your firearms licence is automatically suspended or revoked, and police will seize all registered firearms and ammunition. Furthermore, convictions for violence or drug offences result in a mandatory 10-year statutory ban on holding a licence. We assist primary producers, sports shooters, and security personnel with Firearms Appeals in the NSW Civil and Administrative Tribunal (NCAT).',
    keywords: ['firearms licence', 'gun licence revoked', 'NCAT appeal', 'Firearms Registry', 'AVO gun seizure', 'cops took my guns', 'shooter licence appeal'],
    slangTags: ['#gun-licence-revoked', '#seized-firearms', '#ncat-gun-appeal', '#firearms-registry', '#avo-gun-ban']
  },

  // ==========================================
  // --- Fraud & Financial Crime (Shoplifting, Stealing, Scams) ---
  // ==========================================
  {
    id: 'fraud-larceny-vs-embezzlement',
    category: 'Fraud & Financial Crime',
    question: 'What is the legal difference between Larceny, Shoplifting, and Stealing in NSW?',
    answer: 'Larceny (Section 117 Crimes Act) occurs when a person takes and carries away personal property belonging to another without consent, intending to permanently deprive the owner. Shoplifting (nicking or pinching retail goods) is standard larceny carrying up to 5 years (or 2 years in Local Court). Stealing by Clerk or Servant / Embezzlement (Section 156 Crimes Act) involves an employee misappropriating money or goods entrusted to them, carrying a maximum penalty of 10 years due to the breach of fiduciary trust.',
    keywords: ['larceny', 'shoplifting', 'embezzlement', 'stealing clerk servant', 'Section 117', 'financial theft', 'nicking stuff', 'pinching', 'five finger discount'],
    slangTags: ['#shoplifting', '#larceny', '#nicking-stuff', '#stealing', '#theft-charges']
  },
  {
    id: 'fraud-commonwealth-vs-state',
    category: 'Fraud & Financial Crime',
    question: 'What is the difference between NSW state fraud and Commonwealth fraud (Centrelink/ATO)?',
    answer: 'NSW state fraud (Section 192E Crimes Act) involves dishonestly obtaining financial advantage or causing financial disadvantage by deception, carrying up to 10 years imprisonment. Commonwealth fraud charges (under the Criminal Code 1995 (Cth)) relate to federal institutions, including Centrelink, the Australian Taxation Office (ATO), Medicare, NDIS, or international banking transactions. Commonwealth offences are prosecuted by the CDPP and involve stringent federal sentencing guidelines.',
    keywords: ['fraud', 'Section 192E', 'Commonwealth fraud', 'CDPP', 'ATO fraud', 'Centrelink', 'NDIS', 'tax scam', 'centrelink fraud', 'rorting'],
    slangTags: ['#fraud', '#centrelink-fraud', '#ato-fraud', '#section-192e', '#cdpp']
  },
  {
    id: 'fraud-proceeds-of-crime-freezing',
    category: 'Fraud & Financial Crime',
    question: 'Can the police or Crime Commission freeze my bank accounts and assets before trial?',
    answer: 'Yes. Under the Proceeds of Crime Act 2002 (Cth) or the Criminal Assets Recovery Act 1990 (NSW), authorities such as the NSW Crime Commission (NSWCC) or Australian Federal Police (AFP) can obtain restraining orders freezing bank accounts, luxury vehicles, and real estate, even before criminal guilt has been proven. Urgent legal action is required to apply for living expenses, legal defense allowances, and exclusions of legitimate assets.',
    keywords: ['proceeds of crime', 'freezing order', 'restraining order', 'Crime Commission', 'asset seizure', 'frozen bank account', 'cops took my car'],
    slangTags: ['#frozen-bank-account', '#proceeds-of-crime', '#asset-seizure', '#crime-commission']
  },
  {
    id: 'fraud-identity-cyber-theft',
    category: 'Fraud & Financial Crime',
    question: 'What penalties apply for identity theft and cyber fraud in NSW?',
    answer: 'Identity fraud offences under Part 4AB of the Crimes Act 1900 carry up to 10 years imprisonment for possessing, producing, or using false identification information with intent to commit an indictable offence. Federal cyber crime provisions under the Criminal Code 1995 (Cth) target unauthorized access, computer modification, and business email compromise (BEC). We work with forensic cyber specialists to examine server logs and digital chains of custody.',
    keywords: ['identity fraud', 'cyber crime', 'business email compromise', 'digital theft', 'computer offences', 'phishing scam', 'online scam'],
    slangTags: ['#identity-theft', '#cyber-fraud', '#phishing-scam', '#digital-crime']
  },

  // ==========================================
  // --- Court Process & Sentencing (Beating Charges, Section 10, Clean Record) ---
  // ==========================================
  {
    id: 'court-beat-charges-representations',
    category: 'Court Process & Sentencing',
    question: 'Beating Charges: How can a criminal defense lawyer get charges dropped before trial?',
    answer: 'In many criminal matters, cases can be resolved without ever going to a defended hearing. Adam Ashley conducts detailed evidentiary audits of the police brief of evidence to identify fatal evidentiary flaws, unlawful police searches under LEPRA, or unreliable witness statements. We then draft formal Written Legal Representations to the Police Area Commander or Director of Public Prosecutions (DPP), petitioning for charges to be formally withdrawn, dismissed, or negotiated down to lesser summary offences.',
    keywords: ['beat charges', 'get charges dropped', 'representations', 'dropped charges', 'withdraw charges', 'thrown out', 'get off charges', 'case dismissed'],
    slangTags: ['#beat-charges', '#dropped-charges', '#representations', '#charges-thrown-out', '#case-dismissed']
  },
  {
    id: 'court-section-10-dismissal',
    category: 'Court Process & Sentencing',
    question: 'Section 10 & Clean Record: Can I avoid a criminal record in NSW?',
    answer: 'Yes. Under Section 10 of the Crimes (Sentencing Procedure) Act 1999, a court can find an offence proven but dismiss the charge without recording a criminal conviction. Alternatively, under Section 9(1)(b), the court can impose a Conditional Release Order (CRO) without conviction for up to 2 years. Factors magistrates weigh include: your prior clean record, age, mental health, remorse, the trivial nature of the offence, and the severe employment or travel impact a conviction would trigger. Frontline Lawyers has an exceptional track record achieving non-conviction outcomes.',
    keywords: ['section 10', 'clean record', 'no conviction', 'cro without conviction', 'keep record clean', 'avoid criminal record', 'dismissed without conviction'],
    slangTags: ['#section-10', '#clean-record', '#no-conviction', '#conditional-release-order', '#keep-clean-record']
  },
  {
    id: 'court-local-vs-district',
    category: 'Court Process & Sentencing',
    question: 'What is the difference between the Local Court and District Court of NSW?',
    answer: 'The Local Court handles summary offences (such as drink driving, minor assaults, and small drug possession) and table offences, presided over by a magistrate without a jury. Its jurisdictional sentencing limit is generally 2 years per offence (or 5 years cumulative). The District Court hears appeals from the Local Court and serious indictable charges (such as commercial drug supply, manslaughter, serious sexual assault, and robbery) before a judge and jury, with significantly higher sentencing powers.',
    keywords: ['Local Court', 'District Court', 'magistrate', 'judge and jury', 'indictable offence', 'summary', 'court hierarchy'],
    slangTags: ['#local-court', '#district-court', '#magistrate-court', '#jury-trial']
  },
  {
    id: 'court-section-14-mental-health',
    category: 'Court Process & Sentencing',
    question: 'What is a Section 14 Mental Health Diversion (formerly Section 32)?',
    answer: 'Under Section 14 of the Mental Health and Cognitive Impairment Forensic Provisions Act 2020 (NSW), a magistrate can dismiss your criminal charges without a conviction or finding of guilt on the condition that you participate in a mental health or psychological treatment plan. To succeed, we obtain expert forensic psychological or psychiatric reports establishing a diagnosis (e.g. PTSD, depression, ADHD, substance disorder) and drafting an enforceable treatment plan showing treatment is more appropriate than punitive sentencing.',
    keywords: ['Section 14', 'Section 32', 'mental health diversion', 'psychological report', 'dismiss charges', 'mental health court', 'bpd', 'ptsd'],
    slangTags: ['#section-14-mental-health', '#mental-health-diversion', '#psych-report', '#charges-dismissed']
  },
  {
    id: 'court-early-guilty-plea-discount',
    category: 'Court Process & Sentencing',
    question: 'What sentencing discount do I receive for an early guilty plea in NSW?',
    answer: 'Under the statutory sentencing discount scheme (Part 3 Division 1A of the Crimes (Sentencing Procedure) Act 1999), an early guilty plea entered in the Local Court at the committal stage provides a mandatory 25% discount on your sentence (including prison terms or community service). If entered later in the District Court, the discount drops to 10% or 5%. Strategic timing of pleas can make the difference between serving time or remaining in the community.',
    keywords: ['early guilty plea', '25 percent discount', 'sentencing discount', 'committal plea', 'Local Court', 'plead guilty discount'],
    slangTags: ['#early-guilty-plea', '#25-percent-discount', '#sentencing-discount', '#plea-deal']
  },
  {
    id: 'court-sentencing-ico',
    category: 'Court Process & Sentencing',
    question: 'What is an Intensive Correction Order (ICO) and can it keep me out of prison (jail)?',
    answer: 'An Intensive Correction Order (ICO) under Section 7 of the Crimes (Sentencing Procedure) Act 1999 is a term of imprisonment of up to 2 years served in the community under strict supervision, rather than inside a correctional centre. Mandatory conditions include not committing offences, alongside potential conditions like community service work, curfews, electronic monitoring, alcohol bans, or rehabilitation. Community safety is the paramount consideration.',
    keywords: ['Intensive Correction Order', 'ICO', 'avoid prison', 'community corrections', 'sentencing', 'avoid jail', 'ankle bracelet', 'home detention'],
    slangTags: ['#intensive-correction-order', '#ico', '#avoid-jail', '#ankle-monitor', '#home-detention']
  },
  {
    id: 'court-northern-rivers-locations',
    category: 'Court Process & Sentencing',
    question: 'What courts does Adam Ashley appear in across the Northern Rivers and NSW?',
    answer: 'Principal Counsel Adam Ashley regularly appears in Local and District Courts across the Northern Rivers and Far North Coast, including Ballina Local Court, Byron Bay Local Court, Lismore Local and District Courts, Tweed Heads Local Court, Murwillumbah Local Court, Casino Local Court, Kyogle Local Court, Grafton Local and District Courts, Maclean Local Court, and Coffs Harbour. We also represent clients in major Sydney courts including the Downing Centre and Supreme Court.',
    keywords: ['Ballina court', 'Byron Bay court', 'Lismore court', 'Tweed Heads court', 'Northern Rivers lawyer', 'local lawyer', 'court appearances'],
    slangTags: ['#northern-rivers-courts', '#byron-bay-court', '#ballina-court', '#lismore-court', '#tweed-heads-court']
  },
  {
    id: 'court-severity-appeal-district',
    category: 'Court Process & Sentencing',
    question: 'How do I appeal an unfair Local Court sentence to the District Court?',
    answer: 'You have an automatic right of appeal under the Crimes (Appeal and Review) Act 2001 to appeal a Local Court sentence (Severity Appeal) or conviction (All-Grounds Appeal) to the District Court within 28 days of sentencing (or up to 3 months with court leave). The District Court judge hears the matter afresh. If the judge is contemplating a more severe penalty than the magistrate imposed, they must give a "Parker Warning", allowing you to withdraw the appeal.',
    keywords: ['district court appeal', 'severity appeal', 'conviction appeal', 'Parker warning', '28 days', 'unfair magistrate', 'sentence appeal'],
    slangTags: ['#severity-appeal', '#district-court-appeal', '#parker-warning', '#appeal-sentence']
  },
  {
    id: 'court-pre-sentence-report',
    category: 'Court Process & Sentencing',
    question: 'What is a Pre-Sentence Report (Sentencing Assessment Report) from Community Corrections?',
    answer: 'A Sentencing Assessment Report (SAR) is an objective report ordered by the magistrate or judge and prepared by NSW Community Corrections officers before sentencing. They interview you to evaluate your risk of reoffending, suitability for community work or an Intensive Correction Order (ICO), and attitude toward the offence. Performing well in this interview is crucial, as an unfavorable report often leads magistrates to conclude that prison is the only viable sentence.',
    keywords: ['Sentencing Assessment Report', 'SAR', 'pre sentence report', 'Community Corrections', 'probation officer', 'probation interview'],
    slangTags: ['#sar-report', '#pre-sentence-report', '#community-corrections', '#sentencing-assessment']
  },
  {
    id: 'court-character-references',
    category: 'Court Process & Sentencing',
    question: 'How should character references be written for a NSW criminal court hearing?',
    answer: 'Effective character references can substantially alter sentencing outcomes. A reference must be typed, dated, signed, and addressed to "The Presiding Magistrate" or "The Presiding Judge". Crucially, the referee must state that they know about your specific criminal charges and are aware of your plea. They should outline your good character, work ethic, community contribution, and remorse without lecturing the court on what penalty to impose. We provide custom reference guideline templates to our clients.',
    keywords: ['character references', 'court letters', 'sentencing references', 'magistrate letter', 'character witness', 'letters to judge'],
    slangTags: ['#character-references', '#court-letters', '#magistrate-reference', '#sentencing-evidence']
  },
  {
    id: 'court-spent-convictions',
    category: 'Court Process & Sentencing',
    question: 'When does a criminal conviction become "spent" and disappear from my record in NSW?',
    answer: 'Under the Criminal Records Act 1991 (NSW), most Local Court convictions become "spent" after a 10-year crime-free period for adult offences (or 3 years for juvenile matters), meaning you generally do not need to disclose them for standard employment. However, certain convictions never become spent (such as prison sentences over 6 months or sexual offences), and exemptions exist for law enforcement, judicial, working with children, and security roles.',
    keywords: ['spent conviction', 'criminal records act', '10 year period', 'background check', 'national police check', 'record wiped', 'clean slate'],
    slangTags: ['#spent-conviction', '#criminal-record-check', '#10-year-rule', '#clean-slate']
  },

  // ==========================================
  // --- Legal Fees & Defense Team ---
  // ==========================================
  {
    id: 'fees-fixed-price-transparency',
    category: 'Legal Fees & Defense Team',
    question: 'How does Frontline Lawyers charge for criminal defense matters (fees & costs)?',
    answer: 'We believe in complete financial clarity during an already stressful period. For standard Local Court appearances (such as bail applications, guilty pleas, sentence hearings, and licence appeals), we provide transparent fixed-fee quotes so you know your exact investment upfront without unexpected billable hours. For complex jury trials and contested committals, we provide detailed, itemized cost agreements aligned with the NSW Legal Profession Uniform Law.',
    keywords: ['legal fees', 'fixed price lawyer', 'criminal defense cost', 'transparent pricing', 'quote', 'how much for lawyer', 'cheap lawyer', 'lawyer costs'],
    slangTags: ['#legal-fees', '#fixed-price-lawyer', '#criminal-lawyer-cost', '#transparent-fees']
  },
  {
    id: 'fees-why-choose-adam-ashley',
    category: 'Legal Fees & Defense Team',
    question: 'Why choose Adam Ashley and Frontline Lawyers over a duty solicitor or Legal Aid?',
    answer: 'While duty lawyers perform vital work, they often juggle dozens of complex cases on any single court morning with limited prep time. Principal Counsel Adam Ashley is recognized in Doyle\'s Guide as one of the state\'s premier criminal defense lawyers. When you retain Frontline Lawyers, your case receives exhaustive evidentiary analysis, bespoke defense strategy, senior representation at every hearing, and direct, responsive client communication.',
    keywords: ['Doyles guide', 'Adam Ashley', 'private criminal solicitor', 'duty lawyer', 'legal aid vs private', 'top lawyer', 'best criminal lawyer'],
    slangTags: ['#doyles-guide', '#adam-ashley', '#private-criminal-lawyer', '#legal-aid-comparison']
  },
  {
    id: 'fees-interstate-clients',
    category: 'Legal Fees & Defense Team',
    question: 'Can Frontline Lawyers represent me if I live in Queensland or interstate with a NSW charge?',
    answer: 'Yes. Many individuals visiting Byron Bay, Tweed Heads, or Northern Rivers from Brisbane, Gold Coast, Sydney, or Melbourne find themselves charged under NSW laws. Because NSW criminal law differs significantly from Queensland and other states, having experienced NSW criminal counsel is essential. We can manage your initial mentions remotely, obtain the police brief, and represent you in court so your travel is minimized.',
    keywords: ['interstate lawyer', 'Queensland driver NSW court', 'Gold Coast to Tweed', 'remote court appearance', 'qld driver in nsw'],
    slangTags: ['#interstate-representation', '#queensland-driver-nsw', '#gold-coast-tweed', '#remote-court-appearance']
  },
  {
    id: 'fees-24-7-police-emergency',
    category: 'Legal Fees & Defense Team',
    question: 'Do you offer emergency after-hours police station attendance in Northern Rivers?',
    answer: 'Yes. Criminal arrests and police raids happen at all hours of the night and weekend. Frontline Lawyers provides emergency on-call legal representation. If you or a loved one are in custody at Byron Bay, Ballina, Tweed Heads, or Lismore police stations, we can provide immediate telephone legal advice and attend the station in person to safeguard your rights.',
    keywords: ['emergency criminal lawyer', 'after hours police station lawyer', 'after hours arrest', 'custody lawyer', 'night lawyer', 'police station call'],
    slangTags: ['#emergency-criminal-lawyer', '#after-hours-legal-advice', '#police-station-attendance', '#custody-lawyer']
  },
  {
    id: 'fees-legal-confidentiality',
    category: 'Legal Fees & Defense Team',
    question: 'Are my initial communications and chatbot inquiries covered by legal privilege?',
    answer: 'Yes. Communications made with Frontline Lawyers for the purpose of seeking legal advice are protected by strict Legal Professional Privilege and solicitors\' rules of professional confidentiality. We never disclose your personal details, allegations, or case transcripts to third parties or law enforcement.',
    keywords: ['legal professional privilege', 'confidentiality', 'client privacy', 'privileged communication', 'safe to talk', 'secret'],
    slangTags: ['#legal-privilege', '#confidentiality', '#client-privacy', '#lawyer-client-privilege']
  }
];
