// Field Notes: the running log of the lab.
//
// To add an entry, prepend an object to `entries`:
//   {
//     date: 'YYYY-MM-DD',
//     type: one of the keys in `types` below,
//     title: 'Short, specific headline',
//     body: 'Two or three sentences. What was tried, what happened.',
//     href: optional link (repo, write-up, demo),
//     linkLabel: optional link text,
//   }
//
// Rule: log only what actually happened. Failed experiments belong here too,
// under the 'failed' type.

export const types = {
  build: { label: 'Build', note: 'Something shipped or reached a working state.' },
  design: { label: 'Design', note: 'Architecture decisions, written down.' },
  oss: { label: 'Open source', note: 'Released for anyone to use.' },
  research: { label: 'Research', note: 'Investigations into how things break.' },
  failed: { label: "Didn't work", note: 'Experiments that failed, and why.' },
}

export const entries = [
  {
    date: '2026-11-27',
    type: 'build',
    title: 'Hacker Cam: from a script to cross-platform installers in one day',
    body: 'Started the morning as a single Python script piping frames to a virtual camera. By evening it was a menu-bar app with installers for macOS, Windows and Linux built by GitHub Actions, opt-in telemetry, and v1.0.4 on GitHub Releases.',
    href: 'https://github.com/rohit-kaundal/HackerCamFilter',
    linkLabel: 'Source',
  },
  {
    date: '2026-07-23',
    type: 'design',
    title: 'Vertias v1 design locked: MCP proxy, Cedar, fail closed',
    body: 'Settled the decisions the rest of the product hangs on: intercept at the MCP layer so no agent code changes, use Cedar as the policy engine, escalate to a human when no policy matches, and write every decision to a hash-chained audit log.',
    href: 'https://vertias.ai',
    linkLabel: 'vertias.ai',
  },
  {
    date: '2026-06-22',
    type: 'build',
    title: 'Handler v0.1: a local-first day planner, installable as an app',
    body: 'Built the briefing, execution and debrief loop as a PWA with no backend, no account and no network calls. Everything stays in the browser on your own device.',
  },
  {
    date: '2025-12-18',
    type: 'build',
    title: 'Assessor v2.16: gap analysis rebuilt',
    body: 'Reworked gap analysis to merge organisation-level and AI system-level gaps into a single list ordered by priority, with an owner, target date and progress for each remediation.',
    href: 'https://aifortess.com/assessor.html',
    linkLabel: 'Product page',
  },
  {
    date: '2025-07-19',
    type: 'oss',
    title: 'digitalocean-mcp-server',
    body: 'An MCP server in Go that gives AI agents 48 tools across seven DigitalOcean services, from droplets and firewalls to Kubernetes. Writing it showed exactly how much infrastructure an agent can be handed through one interface.',
    href: 'https://github.com/rohit-kaundal/digitalocean-mcp-server',
    linkLabel: 'Source',
  },
  {
    date: '2025-07-15',
    type: 'oss',
    title: 'k8s-scanner',
    body: 'A Kubernetes misconfiguration scanner in Go, checking clusters against the CIS Kubernetes Benchmark and NIST SP 800-190. Rules live in JSON, so new checks need no code change.',
    href: 'https://github.com/rohit-kaundal/k8s-scanner',
    linkLabel: 'Source',
  },
]
