// Career narrative. Source of truth: the 2026 professional profile.
// Each phase: what was built, and what carried forward into the next one.

export const phases = [
  {
    id: 'software',
    word: 'Software',
    years: '2009 — 2010',
    title: 'Learning to build',
    body: 'I started as a PHP developer at Instablogs and became lead developer of instapress, the company’s own CMS. I led a team of four designing, building and deploying it, and testing its security myself, because nobody else was going to.',
    stops: [
      ['Instablogs', 'Lead developer, instapress CMS'],
    ],
    carried: 'Security is a property of how something is built, not a review added at the end.',
  },
  {
    id: 'security',
    word: 'Security',
    years: '2011 — 2014',
    title: 'Building security products',
    body: 'At Secpanel I audited client sites, researched new vulnerabilities and wrote a cloud-based host intrusion detection system. Then I co-founded Ankhorus as CISO: a security product and services company doing penetration testing, source code review, malware analysis and custom security software. In 2014 I went back to building full time, shipping PHP applications and hybrid Android apps for clients.',
    stops: [
      ['Secpanel', 'Sr security analyst · cloud HIDS'],
      ['Ankhorus', 'Co-founder & CISO'],
      ['Independent', 'Full-stack developer'],
    ],
    carried: 'The people who break systems and the people who build them should be the same people.',
  },
  {
    id: 'forensics',
    word: 'Forensics',
    years: '2015 — 2025',
    title: 'Investigating what broke',
    body: 'I ran Vassago Consultancy for a decade: digital forensics, cybercrime investigation, penetration testing, malware analysis and custom security tooling. For Chandigarh Police, under the national Cyber Crime Prevention against Women & Children scheme, I planned and set up a cyber forensic training lab, from tool procurement and network design to operations, risk assessment and training officers.',
    stops: [
      ['Vassago Consultancy', 'Founder · principal consultant'],
      ['Chandigarh Police', 'Cyber forensic lab · 2019–20'],
      ['Silicon India', 'Top 10 promising cyber forensic providers, 2021'],
    ],
    carried: 'Every incident is a record of a decision nobody could reconstruct afterwards. Keep the record.',
  },
  {
    id: 'systems',
    word: 'Systems',
    years: '2020 — 2026',
    title: 'Security as engineering',
    body: 'At QualSights I built and run the SOC platform and the DevSecOps lifecycle for the engineering team, and audit NIST SP 800-53 controls. At IKEA I helped digital product teams bring static analysis and infrastructure-as-code scanning into their pipelines and set up vulnerability management.',
    stops: [
      ['QualSights', 'Lead cyber security & DevSecOps'],
      ['IKEA', 'Cyber security consultant · 2023–26'],
    ],
    carried: 'A control that cannot run in the pipeline is a document. Build the control, not the document.',
  },
  {
    id: 'ai',
    word: 'Intelligence',
    years: '2025 — now',
    title: 'Building what comes next',
    body: 'In December 2025 I founded AIFortess in Dubai to build AI security and governance infrastructure: Assessor for ISO 42001 audits, AI agents for security work with a person approving anything consequential, and Vertias to decide what autonomous agents are allowed to do.',
    stops: [
      ['AIFortess', 'Founder'],
      ['Vertias AI', 'Agent authorization'],
    ],
    carried: 'Fifteen years of security work, pointed at the systems that will run everything else.',
  },
]

export const record = {
  education: 'MCA, Computer Software Engineering · BCA, Computer Science',
  credentials: [
    'ISO/IEC 42001 AI Management System',
    'ISO/IEC 27001 Information Security Associate',
    'Penetration Testing & Ethical Hacking',
    'Web Application Penetration Testing',
    'Certified Cyber Crime Intervention Officer',
    'CSA AI Trustworthy Pledge signatory',
  ],
}
