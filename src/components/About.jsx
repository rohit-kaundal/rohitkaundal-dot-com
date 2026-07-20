import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const questions = [
  'What does an AI company need to prove before an enterprise buyer will trust it?',
  'Which security controls can be automated, and which genuinely require judgment?',
  'How do you keep governance current when the product ships every week?',
  'Who is accountable when an autonomous system makes a decision nobody reviewed?',
]

const practice = [
  {
    title: 'Cyber Operating System Build',
    body: 'The full system, installed. Policy as code, automated evidence, continuous control monitoring, and clear ownership. You stop rebuilding your security posture for every deal because it is always current.',
  },
  {
    title: 'Enterprise Readiness Assessment',
    body: 'A direct answer to one question: what is standing between you and closing enterprise contracts? Compass scores your readiness in three minutes for free. This is the deep version — your architecture, your buyers, your actual blockers, ranked by what costs you revenue rather than by control number.',
  },
  {
    title: 'Fractional Security Leadership',
    body: 'For teams that need security judgment in the room but not a full-time hire. I sit with your engineering leadership, own the security narrative for buyers, and build the system as we go.',
  },
  {
    title: 'Strategic Advisory',
    body: 'For founders, CTOs, and investors making decisions where security and governance change the outcome — architecture bets, diligence, or a first enterprise contract that will define the next five.',
  },
  {
    title: 'Speaking',
    body: 'On cyber operating systems, AI governance, and why enterprise trust is now an engineering discipline. Founder-to-founder, not a vendor pitch.',
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
              I think about security the way engineers think about reliability.
              Nobody writes a document promising the system will stay up. They
              build something that keeps it up, and they measure it.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-saturn">
              Security is still stuck one step behind that. It produces artifacts
              instead of systems. A policy nobody reads. A questionnaire answered
              from memory. An audit that describes a company which no longer
              exists by the time the report is printed.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-saturn">
              I spent years watching what happens when systems fail — forensics,
              incidents, the aftermath. The pattern was never a missing control.
              It was a control that existed on paper and nowhere else. So I built
              AIFortess to close that distance: governance that runs as software,
              not governance that is described in a folder.
            </p>
          </Reveal>

          <Doctrine>
            If a control cannot report its own state, it is not a control. It is
            a hope.
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
            Most companies buy compliance and hope it produces trust. It works in
            the opposite direction.
          </Doctrine>

          <Reveal>
            <h3 className="text-2xl mb-6 text-veil font-light">
              How I Work
            </h3>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-saturn">
              I build systems, not decks. Every engagement ends with something
              running in your environment that keeps working after I leave — and
              a team that understands why each piece is there.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-saturn">
              I work founder-to-founder. I have shipped product, sold to
              enterprises, and sat on the wrong side of a security review. I will
              tell you when a control is theatre, and I will tell you when the
              boring answer is the correct one.
            </p>
          </Reveal>

          <Doctrine>
            Certifications describe what someone studied. Systems describe what
            someone built.
          </Doctrine>

          <Reveal>
            <h3 className="text-2xl mb-8 text-veil font-light">
              Ways We Can Work Together
            </h3>
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
