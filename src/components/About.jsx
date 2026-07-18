import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const questions = [
  'How does an organisation demonstrate AI accountability before compliance standards mature?',
  'What does "defensible AI" mean beyond penetration testing?',
  'How should responsibility be defined when intelligent systems fail?',
  'How does governance keep pace when AI evolves faster than oversight?',
]

const practice = [
  {
    title: 'Governance Design',
    body: 'Working with technical leaders to design AI risk postures, accountability structures, and governance suited to real constraints.',
  },
  {
    title: 'Security Reasoning for AI Systems',
    body: 'Threat models covering adversarial manipulation, data poisoning, and inference risk — research translated into practical security thinking.',
  },
  {
    title: 'Regulatory Translation',
    body: 'Converting emerging AI regulation into governance requirements that hold operationally, not just on paper.',
  },
  {
    title: 'Readiness Assessments',
    body: 'Evaluating whether governance, documentation, and controls survive scrutiny — regulatory, investor, or adversarial.',
  },
  {
    title: 'Platform-Supported Governance',
    body: 'For practitioners who need governance operationalised consistently, AIFortess codifies policy, generates evidence, and maintains audit trails.',
  },
]

// Pull-quote in the doctrine register — dharma gold, used sparingly.
const Doctrine = ({ children }) => (
  <Reveal>
    <div className="my-12">
      <hr className="oath-rule mb-8" />
      <p className="text-xl lg:text-2xl font-light text-dharma leading-relaxed">
        {children}
      </p>
    </div>
  </Reveal>
)

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="prose">
        <SectionHeading number="03" title="About" />

        <div className="space-y-7 text-body leading-relaxed">
          <Reveal>
            <p className="text-xl text-veil/90">
              The hardest part of AI security is not the technology. It is the
              absence of clear governance under pressure.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-saturn">
              I began in digital forensics, cybercrime investigation, and
              infrastructure security. That work taught me how systems fail, how
              adversaries exploit ambiguity, and how governance collapses the
              moment accountability goes undefined.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-saturn">
              My focus shifted toward turning that operational reality into
              structures teams can reason with — before incidents, audits, or
              regulators force the conversation. That led to AIFortess, a platform
              built to codify governance into usable systems.
            </p>
          </Reveal>

          <Doctrine>
            Tools operationalise decisions. They do not make them.
          </Doctrine>

          <Reveal>
            <h3 className="text-2xl mb-8 text-veil font-light">
              The Questions I&apos;m Working On
            </h3>
          </Reveal>

          <ol className="space-y-5">
            {questions.map((q, i) => (
              <Reveal key={q} delay={i * 0.06}>
                <li className="flex gap-5 items-baseline">
                  <span className="font-mono text-xs text-varuna/70 shrink-0 pt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-veil/85">{q}</span>
                </li>
              </Reveal>
            ))}
          </ol>

          <Doctrine>
            This work is systems-oriented, not transactional. It prioritises
            clarity, structure, and long-term defensibility.
          </Doctrine>

          <Reveal>
            <h3 className="text-2xl mb-6 text-veil font-light">Background</h3>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-saturn">
              Over a decade of operational security experience — forensics,
              infrastructure security, and regulated environments. I hold
              certifications in information security management, network security,
              penetration testing, and data protection. They inform the work. They
              are not its foundation.
            </p>
          </Reveal>

          <Doctrine>
            Governance frameworks endure because they reflect reality, not
            credentials.
          </Doctrine>

          <Reveal>
            <h3 className="text-2xl mb-8 text-veil font-light">How I Work</h3>
          </Reveal>

          <div className="space-y-10">
            {practice.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="border-l border-varuna/30 pl-6">
                  <h4 className="text-lg font-medium mb-2 text-veil">
                    {item.title}
                  </h4>
                  <p className="text-saturn text-base leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
