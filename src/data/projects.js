// The builds shown in "The Lab". Every claim here is taken from the project's
// own repository or live site (README, spec, design doc, git history). Do not add features,
// users or metrics that the repo cannot back up.
//
// repo.public: only public repos are linked. Private ones render as
// "Source · private" instead of a dead link. Flip the flag when a repo opens up.

export const projects = [
  {
    id: 'assessor',
    index: '01',
    name: 'AIFortess Assessor',
    kind: 'Product · AI governance',
    status: { label: 'In beta · v2.17', tone: 'live' },
    oneLiner:
      'An ISO/IEC 42001 audit workspace that takes AI governance assessments out of spreadsheets.',
    problem:
      'Auditors assessing AI systems were working in spreadsheets and generic GRC tools that know nothing about AI-specific risk, with evidence scattered across email and file shares.',
    what:
      'Each client organisation gets an isolated workspace: an inventory of its AI systems, the 38 Annex A controls split into organisation and system level, a risk register built on the ISO/IEC 23894 taxonomy, gap analysis with owners and target dates, a Statement of Applicability, evidence linked to controls, and PDF reports.',
    capabilities: [
      '38 Annex A controls · A.2 → A.10',
      '5 × 5 likelihood-impact risk scoring',
      'Gap analysis + remediation plans',
      'Statement of Applicability',
      'Evidence linked to controls',
      'Multi-client data isolation',
    ],
    stack: ['Vue 3', 'TypeScript', 'Supabase', 'Clerk', 'Chart.js'],
    links: [{ label: 'Product page', href: 'https://aifortess.com/assessor.html' }],
    repo: { href: 'https://github.com/rohit-kaundal/aifortess-assessor', public: false },
  },
  {
    id: 'vertias',
    index: '02',
    name: 'Vertias AI',
    kind: 'Product · Agent authorization',
    status: { label: 'In build · launch by Feb 2027', tone: 'build' },
    oneLiner:
      'A zero-trust authorization layer between AI agents and the tools they call.',
    problem:
      'Agents are being handed real credentials: kubectl, cloud APIs, production databases. Nothing decides, call by call, whether a given agent should be allowed to do a given thing right now.',
    what:
      'Every tool call an agent makes is intercepted, checked against declarative Cedar policies and then allowed, blocked, or escalated to a person for approval. Silence never means allow: if no policy permits a call, it goes to a human. Every decision is written to a hash-chained, tamper-evident audit log.',
    capabilities: [
      'MCP proxy · no agent code changes',
      'Amazon Cedar policy engine',
      'Allow · block · escalate',
      'Human approval with blast-radius context',
      'Hash-chained audit log',
      'Fails closed on any error',
    ],
    maturity:
      'Interactive UI prototype and the v1 design are done. The production gateway (a self-hosted Go service) is being built now.',
    stack: ['Go', 'cedar-go', 'MCP', 'PostgreSQL', 'htmx'],
    links: [{ label: 'vertias.ai', href: 'https://vertias.ai' }],
    repo: { href: 'https://github.com/rohit-kaundal/vertias-ai', public: false },
  },
  {
    id: 'fortess',
    index: '03',
    name: 'Fortess Files',
    kind: 'Product · AI security education',
    status: { label: 'Live · 5 floors', tone: 'live' },
    oneLiner:
      'A 2D game that teaches AI security by making you break an AI system first, then defend it.',
    problem:
      'AI security is mostly taught with slides and checklists. Attacks like prompt injection or data poisoning only really click once you have pulled one off yourself, and there was nowhere safe to do that.',
    what:
      'You start as a new analyst at AIFortess Labs, a fictional company having a very bad week. Each floor of its office is an incident: walk the floor, interview the staff and collect clues, reproduce the attack in a hands-on mini-game, then pick defenses and replay real attacks against them. A debrief and quiz close each floor.',
    capabilities: [
      'Five incidents · OWASP LLM Top 10',
      'Attack first, then defend',
      'Real models trained in the browser',
      'Simulated chatbots · no AI API calls',
      'XP, badges and a leaderboard',
      'Keeps playing offline, syncs later',
    ],
    stack: ['React', 'TypeScript', 'Phaser', 'Cloudflare Workers', 'D1', 'Clerk'],
    links: [{ label: 'Play it', href: 'https://fortessfiles.aifortess.com' }],
    repo: { href: '', public: false },
  },
  {
    id: 'handler',
    index: '04',
    name: 'Handler',
    kind: 'App · Personal operating system',
    status: { label: 'v0.1 · working PWA', tone: 'live' },
    oneLiner:
      'A day planner that applies need-to-know and least privilege to your own attention.',
    problem:
      'Most productivity apps help you do more. The real problem is everything leaking into everything else, so one bad meeting floods the whole day.',
    what:
      'Life is split into sealed sectors. A morning briefing sets one objective per sector. During execution every other sector is invisible, not just dimmed. Stray thoughts go into a write-only Dead Drop that only opens at the next briefing. The day ends with a short debrief and an enforced stand-down.',
    capabilities: [
      'Sealed sectors · need-to-know view',
      'Briefing → execution → debrief',
      'Write-only Dead Drop capture',
      'Enforced stand-down window',
      'Local-first · no account, no network',
      'Installable, works offline',
    ],
    stack: ['React', 'TypeScript', 'PWA', 'LocalStorage'],
    links: [],
    repo: { href: 'https://github.com/rohit-kaundal/handler-day-productivity-app', public: false },
  },
  {
    id: 'hackercam',
    index: '05',
    name: 'Hacker Cam',
    kind: 'Experiment · Computer vision',
    status: { label: 'v1.0.4 · open source', tone: 'live' },
    oneLiner:
      'A virtual camera that opens your video calls with a terminal breach sequence, then cuts to you.',
    problem:
      'None. It started as a joke for my own calls and turned into a proper engineering exercise: real-time segmentation, face tracking and a cross-platform desktop app.',
    what:
      'Frames go to a virtual camera, so Zoom, Teams or Meet see it as an ordinary webcam. The intro plays, then your real camera takes over, and global hotkeys stack live effects: matrix-rain or world-trace backgrounds, a hologram mode, a biometric face scan and an away screen.',
    capabilities: [
      'MediaPipe segmentation + face mesh',
      'Global hotkeys · stackable effects',
      'Menu-bar / tray desktop app',
      'Installers for macOS, Windows, Linux',
      'Built by GitHub Actions',
      'Opt-in telemetry · never video',
    ],
    stack: ['Python', 'OpenCV', 'MediaPipe', 'Qt', 'pyvirtualcam'],
    links: [
      { label: 'Project site', href: 'https://rohit-kaundal.github.io/HackerCamFilter/' },
      { label: 'Download', href: 'https://github.com/rohit-kaundal/HackerCamFilter/releases/latest' },
    ],
    repo: { href: 'https://github.com/rohit-kaundal/HackerCamFilter', public: true },
  },
]
