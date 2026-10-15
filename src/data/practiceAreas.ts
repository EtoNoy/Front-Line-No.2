import { 
  Wine, 
  Pill, 
  Navigation, 
  Car, 
  Home, 
  Hand, 
  Key, 
  Shield, 
  Gavel, 
  AlertTriangle, 
  ShieldCheck, 
  ArrowUpRight, 
  Megaphone, 
  Landmark, 
  DollarSign, 
  Eye, 
  Laptop, 
  UserX, 
  AlertCircle, 
  Skull 
} from 'lucide-react';

export interface PracticeArea {
  slug: string;
  icon: any;
  title: string;
  desc: string;
  urgency: string;
  severity: string;
  fullDescription: string;
}

export const practiceAreasData: PracticeArea[] = [
  { 
    slug: "drink-driving-dui", 
    icon: Wine, 
    title: "Drink Driving / DUI", 
    desc: "Low, Mid, and High-Range PCA, drug driving, and breath analysis matters.",
    urgency: "Immediate action required. Police issue on-the-spot licence suspensions that take effect immediately. Speaking to counsel promptly allows proper review of breath analysis procedures.",
    severity: "Severe. Mandatory minimum licence disqualifications, hefty financial penalties, mandatory alcohol interlock installation, and permanent criminal records that impact employment.",
    fullDescription: "Prescribed Concentration of Alcohol (PCA) and DUI offences carry harsh, mandatory statutory disqualification periods and interlock requirements under NSW and Queensland traffic laws. Police frequently assume guilt based on breath analysis readings, but breath testing procedures, instrument calibration logs, and roadside detention timelines must strictly adhere to statutory requirements. You have the right to remain silent and should never make informal admissions to investigating officers regarding how many drinks you consumed or when you last ate. Attempting to navigate the court process alone often results in avoidable criminal convictions and severe disqualifications. You need to contact a lawyer as soon as possible so the police brief and technical evidentiary records can be scrutinised properly."
  },
  { 
    slug: "drug-offences", 
    icon: Pill, 
    title: "Drug Possession & Supply Charges", 
    desc: "Personal possession, deemed supply, commercial quantities, and trafficking allegations.",
    urgency: "High. Search procedures, drug weights, and police body-worn footage must be scrutinised immediately. Do not consent to phone extractions or make statements regarding ownership.",
    severity: "Extreme. Penalties range from permanent criminal records and international travel bans to substantial mandatory custodial sentences for commercial drug supply matters.",
    fullDescription: "Drug charges are vigorously prosecuted under the Drug Misuse and Trafficking Act (NSW) and Drugs Misuse Act (QLD). Police frequently rely on 'deemed supply' provisions where possession of an arbitrary weight legally presumes an intention to sell or distribute, shifting a severe burden onto the accused. You have an absolute legal right to silence—you are never required to explain where substances came from, who owns them, or provide pin codes to encrypted mobile devices. Police search powers under LEPRA and PPRA are strictly limited; if police searched your car, bag, or residence without lawful reasonable suspicion or a valid warrant, that evidence may be ruled inadmissible. Never attempt to explain your situation to detectives without legal counsel. You should contact a lawyer to ensure your rights are safeguarded before answering any questions."
  },
  { 
    slug: "traffic-offences", 
    icon: Navigation, 
    title: "Traffic Offences & Driving Charges", 
    desc: "Negligent driving, dangerous operation, excessive speeding, and camera-detected offences.",
    urgency: "Strict statutory deadlines apply. Election to take infringement notices to court or lodging formal appeals must be executed within tight timeframes before automatic convictions register.",
    severity: "Substantial. Unchecked demerit accumulation, heavy court fines, licence loss, and potential imprisonment for aggravated or dangerous driving charges.",
    fullDescription: "Traffic charges such as negligent driving, driving in a manner dangerous, and high-range speed infringements carry life-disrupting consequences. Many people make the critical mistake of simply paying a fine or appearing unrepresented in the Local or Magistrates Court, only to discover that doing so triggered an automatic conviction and long-term driving disqualification. You have the right to challenge police evidence, speed detection calibration records, and road conditions. Do not make statements admitting inattention or fatigue to police officers at the roadside. Before making any election or attending court, you should contact a lawyer to have the police allegations reviewed."
  },
  { 
    slug: "licence-matters", 
    icon: Car, 
    title: "Licence Matters & RMS Appeals", 
    desc: "Police immediate suspensions, demerit point bans, and licence appeals.",
    urgency: "Extremely time-sensitive. Administrative appeal windows for police-issued immediate suspensions or Transport agency cancellation notices must be lodged strictly within 28 days.",
    severity: "Immediate loss of driving privileges, threatening your job, family care responsibilities, business operations, and leading to severe secondary driving-while-disqualified charges.",
    fullDescription: "Losing your driver licence can instantly jeopardize your employment, business, and family obligations. If police have suspended your licence on the spot following a speed or PCA allegation, or you have received a Notice of Suspension from Transport for NSW or Queensland Transport, strict statutory appeal windows apply. Representing yourself without understanding magistrate sentencing principles and exceptional circumstances thresholds can lead to your appeal being dismissed on the spot. You have the right to appeal administrative suspensions to the Local Court. You need to contact a lawyer promptly to prepare your appeal and protect your licence before deadlines lapse."
  },
  { 
    slug: "domestic-violence", 
    icon: Home, 
    title: "Domestic Violence & AVO / DVO Matters", 
    desc: "Domestic allegations, Apprehended Domestic Violence Orders (ADVOs), and order variations.",
    urgency: "Critical. Police apply immediate provisional exclusion orders that instantly remove you from your family home and restrict access to children within hours of an allegation.",
    severity: "Severe. Immediate homelessness under interim orders, loss of child contact, weapon licence cancellations, and mandatory criminal charges and custodial risks for any alleged breach.",
    fullDescription: "Domestic violence allegations trigger immediate, mandatory police action where officers are instructed to arrest first and investigate later. Provisional and interim Apprehended Violence Orders (AVOs) or Domestic Violence Orders (DVOs) are routinely issued with severe conditions that can immediately bar you from returning to your own home or contacting loved ones. An AVO is a civil order, but any alleged breach—even an accidental text message—is a serious criminal offence carrying a presumption of imprisonment. You have the right to silence; do not attempt to 'clear your name' or give a recorded interview to police, as statements will be used to corroborate the complainant's claims. You should contact a lawyer immediately so restrictive conditions can be contested and your rights protected."
  },
  { 
    slug: "assault-charges", 
    icon: Hand, 
    title: "Assault Charges & Violent Offences", 
    desc: "Common assault, assault occasioning actual bodily harm (AOABH), wounding, and affray.",
    urgency: "Urgent evidence preservation required. Security CCTV footage, pub recordings, mobile videos, and witness accounts are routinely overwritten within days if subpoenas are not served.",
    severity: "Significant to severe. Ranging from permanent convictions on criminal records to multi-year custodial sentences in maximum-security correctional facilities.",
    fullDescription: "Assault charges frequently stem from misunderstandings, mutual altercations, or justified acts of self-defence. Police rarely collect evidence that exonerates the accused—they routinely take statements only from the alleged victim and their associates. A violence conviction will bar you from employment in security, healthcare, education, childcare, and government sectors. Under Australian law, you have the absolute right to remain silent and refuse police interview questions. You also have the fundamental legal right to defend yourself, another person, or your property using reasonable force. Do not give an account to police that might inadvertently undermine your defence. You should contact a lawyer immediately so critical CCTV footage can be secured, independent witnesses located, and a robust defence prepared."
  },
  { 
    slug: "bail-matters", 
    icon: Key, 
    title: "Bail Applications & Show Cause", 
    desc: "Release applications across Local, Magistrates, District, and Supreme Courts.",
    urgency: "Extreme emergency. Once bail is refused by police and a magistrate, you cannot easily make a second application without demonstrating fresh facts or exceptional change of circumstances.",
    severity: "Immediate and total loss of liberty. Being remanded in maximum security custody for months or years awaiting trial disrupts your family, job, and defence preparation.",
    fullDescription: "A bail hearing is one of the most consequential steps in any criminal proceeding. Under the NSW Bail Act 2013 and Queensland Bail Act 1980, strict 'Show Cause' requirements and 'unacceptable risk' tests apply to numerous offences. If an unrepresented or poorly prepared bail application is refused by a magistrate, you are generally barred from applying again in that court without showing fresh evidence—meaning you may remain in prison on remand for months or years awaiting trial. You have the right to apply for bail and to be represented by counsel of your choice. Do not allow a rushed, unrepresented bail attempt to cost you your freedom; you need to contact a lawyer for urgent bail representation."
  },
  { 
    slug: "police-matters", 
    icon: Shield, 
    title: "Police Matters & Questioning Rights", 
    desc: "Police station interviews, search warrants, arrest procedures, and statutory rights.",
    urgency: "Immediate. The critical window to protect your rights is before answering a single question or stepping into an interview room. Contact our defence line immediately.",
    severity: "Extreme. Admissions made during police questioning form the cornerstone of prosecution cases. Waiving your rights can ensure a conviction that could otherwise have been avoided.",
    fullDescription: "When police contact you for a 'chat' or ask you to come down to the station 'to clear things up,' they are not acting in your interests; they are actively gathering evidence to charge you. You are legally required to provide only your name, address, and driver licence (if driving). You have an absolute statutory Right to Silence under the Evidence Act 1995 and are NOT required to participate in an electronically recorded interview (ERISP), answer questions, or provide statements. Anything you say will be recorded and used against you in court. Never attend a police interview alone. You have the right to have a criminal defence lawyer present. You should contact a lawyer before speaking with police so your rights are protected from the very start."
  },
  { 
    slug: "court-hearings-trials", 
    icon: Gavel, 
    title: "Court Hearings & Contested Trials", 
    desc: "Contested hearings, committals, and jury trials in Local, District, and Supreme Courts.",
    urgency: "High. Evidence subpoenas, expert forensic reports, and cross-examination strategies require systematic preparation months prior to entering the courtroom.",
    severity: "Maximum. The final determination of innocence or guilt. A guilty verdict results in immediate criminal conviction, sentencing, and potential imprisonment.",
    fullDescription: "Entering a contested hearing or jury trial is an intense adversarial process where the prosecution deploys the full weight of police investigators and crown prosecutors against you. Entering a courtroom without meticulous legal representation puts your future in grave jeopardy. You have the right to a fair trial, the right to put the prosecution to strict proof on every single element of the charge, and the right to robust cross-examination of state witnesses. You need to contact a lawyer to discuss your trial strategy and ensure your case is defended with expert advocacy."
  },
  { 
    slug: "avo", 
    icon: AlertTriangle, 
    title: "AVO & Restraining Orders", 
    desc: "Apprehended Violence Orders (AVO), restraining orders, and private application disputes.",
    urgency: "High. Initial court appearances occur quickly following service of the application. Strict deadlines apply to lodge formal objections and evidence.",
    severity: "Severe. Restricts employment, working with children certificates, travel, and possession of firearms. Violations constitute criminal offences carrying custodial sentences.",
    fullDescription: "Apprehended Violence Orders (AVOs) and Domestic Violence Orders (DVOs) can be sought by police or private applicants, sometimes based on uncorroborated, exaggerated, or malicious claims. While an AVO itself is technically a civil order, consenting to it—even 'without admissions'—places your freedom on a knife edge, as any minor alleged breach constitutes an immediate criminal offence. You have the right to vigorously contest an AVO, demand the applicant give sworn evidence, and cross-examine them in court. Do not consent to orders without professional representation; you should contact a lawyer to defend your interests."
  },
  { 
    slug: "self-defence", 
    icon: ShieldCheck, 
    title: "Self-Defence & Justifiable Force", 
    desc: "Lawful self-defence, protection of person or property, and proportionate force.",
    urgency: "High. Securing witness statements, CCTV footage, and independent photographic documentation of your injuries must occur before evidence disappears.",
    severity: "Decisive. Successfully raising self-defence creates a complete legal barrier to conviction, requiring the prosecution to disprove your claim beyond all reasonable doubt.",
    fullDescription: "Under Australian criminal law, every person has a fundamental common law and statutory right to defend themselves, their family, or their property from imminent harm. Once the defence of self-defence is properly raised, the prosecution carries the heavy burden of disproving it beyond all reasonable doubt—if they cannot, you must be acquitted of all assault and violence charges. However, establishing self-defence requires precise evidentiary proof demonstrating that you believed your actions were necessary and that your conduct was a reasonable response. Unrepresented defendants often fail to present this defence properly; you should contact a lawyer to help present your case."
  },
  { 
    slug: "appeals", 
    icon: ArrowUpRight, 
    title: "Conviction & Severity Sentence Appeals", 
    desc: "Local Court conviction and severity of sentence appeals in the District Court.",
    urgency: "Critical strict deadline. Appeals against conviction or severity of sentence must be lodged within 28 days of the magistrate's sentencing date.",
    severity: "Your essential legal remedy. Failing to appeal leaves you permanently bound to an unjust conviction, licence loss, or custodial sentence.",
    fullDescription: "If you were convicted or received a disproportionately harsh sentence in the Local or Magistrates Court, the justice system provides a vital avenue for appeal to the District Court. An appeal is not a simple plea for mercy; it requires identifying legal errors, demonstrating that a penalty is manifestly excessive, or proving that a conviction is unsafe and unsupported by the evidence. You have a statutory right to appeal within 28 days of sentencing. Do not allow an unfair ruling to stand; you need to contact a lawyer promptly to examine the magistrate's remarks and structure an appeal."
  },
  { 
    slug: "public-nuisance", 
    icon: Megaphone, 
    title: "Public Nuisance & Public Order", 
    desc: "Offensive language, public nuisance, resisting police, and street disorder matters.",
    urgency: "Moderate to high. Body-worn camera footage must be formally requested from the police before standard recording retention cycles expire.",
    severity: "Carries the significant risk of a permanent criminal record, impacting professional certifications, international visas, and corporate careers.",
    fullDescription: "Public order offences frequently result from escalated interactions where police overstep their authority during routine street encounters. What began as a minor disagreement can quickly result in charges of offensive conduct, resisting arrest, or assaulting police. You have the right to question whether the police were acting in the lawful execution of their duty—if an arrest was unlawful, charges of resisting arrest cannot stand. Never assume a charge is too minor to warrant help; you should contact a lawyer to review body-worn video and defend your record."
  },
  { 
    slug: "centrelink-fraud", 
    icon: Landmark, 
    title: "Centrelink & Commonwealth Fraud", 
    desc: "Commonwealth DPP investigations, Services Australia overpayments, and taxation fraud.",
    urgency: "High. Never participate in formal administrative interviews or voluntary phone audits conducted by federal investigators without legal counsel.",
    severity: "Severe. Commonwealth fraud offences carry strict federal sentencing benchmarks, frequently resulting in substantial restitution orders and federal prison sentences.",
    fullDescription: "Commonwealth prosecutions brought by the Commonwealth DPP leverage sophisticated cross-agency data matching, bank records, and tax returns. When investigators contact you regarding suspected overpayments or undeclared income, you are at extreme legal risk. You have the right to silence and are not required to provide incriminating answers during informal audit phone calls. Statements made in panic are frequently tendered as primary proof of deliberate deception. You should contact a lawyer to manage all communications with Commonwealth agencies."
  },
  { 
    slug: "money-laundering", 
    icon: DollarSign, 
    title: "Money Laundering & Proceeds of Crime", 
    desc: "Crime Commission freezing orders, proceeds of crime, and financial transaction charges.",
    urgency: "Extreme. High-level restraining orders freeze bank accounts, mortgages, and business accounts immediately upon application.",
    severity: "Catastrophic. Total loss of personal and family assets, business collapse, and lengthy terms of imprisonment under state and federal proceeds of crime statutes.",
    fullDescription: "Under the Proceeds of Crime Act and Criminal Assets Recovery legislation, authorities such as the NSW Crime Commission and Australian Federal Police can freeze your properties, vehicles, and bank accounts on mere suspicion of illegal activity—even before any criminal guilt is proven. Challenging these draconian orders is highly technical and requires specialist legal advocacy to secure living expense allowances, protect legitimate family assets, and defeat the forfeiture application. You need to contact a lawyer promptly to contest freezing orders and protect legitimate assets."
  },
  { 
    slug: "stalk-intimidation", 
    icon: Eye, 
    title: "Stalk or Intimidation Charges", 
    desc: "Personal intimidation, stalking, harassment, and carriage service telecommunications matters.",
    urgency: "High. Electronic records, messaging threads, call histories, and location data must be preserved and forensically backed up immediately.",
    severity: "Substantial. Immediate local court AVOs, criminal records, and potential custodial sentences of up to 5 years under Section 13 of the Crimes (Domestic and Personal Violence) Act.",
    fullDescription: "Stalking and intimidation laws in NSW and Queensland are extraordinarily broad. Allegations frequently arise from contested relationship breakdowns or workplace disputes where ordinary messages or phone calls are taken out of context. You have the right to silence; do not attempt to contact the complainant to 'clear things up,' as any further message will be used as evidence of ongoing harassment or an AVO breach. You should contact a lawyer immediately to evaluate digital evidence and dispute false claims."
  },
  { 
    slug: "cybercrime", 
    icon: Laptop, 
    title: "Cybercrime & Digital Offences", 
    desc: "Unauthorised computer access, data tampering, online fraud, and digital device investigations.",
    urgency: "High. Digital chain-of-custody must be audited. Do not provide passcodes or decrypt electronic hardware without receiving legal advice.",
    severity: "Severe state and federal penalties, forfeiture of computing equipment, and long-term supervision or device restrictions.",
    fullDescription: "Cybercrime charges rely heavily on automated IP tracking, server logs, and digital forensics. However, digital evidence is vulnerable to attribution errors, shared Wi-Fi networks, malware, and third-party unauthorised access. You have the right to legal advice before complying with any digital access or password orders. Do not speak to detectives unrepresented; you should contact a lawyer to coordinate a proper defence."
  },
  { 
    slug: "rape-sexual-assault", 
    icon: UserX, 
    title: "Sexual Assault & Indictable Allegations", 
    desc: "Indictable sexual offences, historical allegations, and committal proceedings.",
    urgency: "Extreme emergency. Do not respond to any messages, phone calls, or social media communications from the complainant or investigating detectives.",
    severity: "Catastrophic. Lengthy mandatory minimum prison terms, lifetime placement on the child protection / sex offender registry, and total social ruin.",
    fullDescription: "Sexual offence allegations are among the most serious charges known to the law and are investigated with immense state resources. Police frequently employ 'pretext phone calls' where the complainant contacts the accused under police supervision to elicit recorded admissions or apologies. You have an absolute right to remain silent and refuse police interviews. Anything you say in panic will be scrutinized and presented to a jury. You have an absolute right to silence; you need to contact a lawyer immediately for urgent legal protection."
  },
  { 
    slug: "manslaughter", 
    icon: AlertCircle, 
    title: "Manslaughter & Fatal Incidents", 
    desc: "Criminal negligence, unlawful and dangerous acts, and vehicular manslaughter allegations.",
    urgency: "Extreme. Independent accident reconstruction, mechanical audits, and pathology assessments must be commissioned before the scene is compromised.",
    severity: "Maximum. Custodial sentences of up to 25 years, permanent destruction of career, and intense media scrutiny.",
    fullDescription: "Manslaughter allegations arise from vehicular collisions, workplace incidents, or physical altercations where a death occurred without specific homicidal intent. The prosecution must prove causation and a criminal degree of negligence beyond all reasonable doubt. You have the right to silence and must not participate in walk-throughs, reconstructions, or police interviews without your legal team present. You should contact a lawyer immediately so independent experts can examine the evidence and protect your defence."
  },
  { 
    slug: "murder-charges", 
    icon: Skull, 
    title: "Murder Charges & Homicide Advocacy", 
    desc: "Murder, homicide, and attempted murder trials in the Supreme Court.",
    urgency: "Absolute emergency. Immediate legal attendance at the police station is non-negotiable. Do not utter a single word to homicide detectives.",
    severity: "The ultimate penalty in the criminal justice system—life imprisonment in a maximum-security correctional centre.",
    fullDescription: "A charge of murder mobilises the state's full forensic, ballistic, pathology, and surveillance apparatus. You have an absolute legal right to silence under the law. Exercise it without hesitation. Demand to speak with a lawyer immediately. Call our direct defence line immediately."
  }
];
