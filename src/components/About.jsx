import React from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const edges = [
  {
    title: 'I have seen how systems fail',
    body: 'Fifteen years across pentesting, forensics, DevSecOps and the SOC taught me that breaches rarely come from a missing control. They come from a control that existed on paper and nowhere else. I design against that.',
  },
  {
    title: 'I build, I don\'t just advise',
    body: 'I founded AIFortess, which builds AI agents that do real security work with least-privilege access and human approval by default. The architecture I recommend to you is the one I run myself, so the advice has already been tested against reality.',
  },
  {
    title: 'I sit on both sides of the review',
    body: 'I have sold to enterprises and I have answered their security reviews. I know which controls buyers actually check and which ones are theatre, and I will tell you which is which.',
  },
  {
    title: 'AI-native, not AI-retrofitted',
    body: 'I did not add "AI" to a traditional security practice. I work at the point where LLMs, agents and security engineering meet, because that is where the new risk sits.',
  },
]

// Pull-quote in the doctrine register: dharma gold, used sparingly.
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
        <SectionHeading number="06" title="Why Me" />

        <div className="space-y-7 text-body leading-relaxed">
          <Reveal>
            <p className="text-xl text-veil/90">
              I think about AI security the way engineers think about reliability.
              Nobody writes a document promising the system will stay up. They
              design something that stays up, and they measure it.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-saturn">
              Most security for AI is still a document: a policy nobody reads, a
              questionnaire answered from memory, an audit describing a model that
              has since been replaced three times. I architect the alternative,
              security that runs as part of the system.
            </p>
          </Reveal>

          <Doctrine>
            If a control cannot report its own state, it is not a control. It is
            a hope.
          </Doctrine>

          <div className="space-y-10">
            {edges.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="border-l border-varuna/30 pl-6">
                  <h3 className="text-lg font-medium mb-2 text-veil">{item.title}</h3>
                  <p className="text-saturn text-base leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Doctrine>
            Certifications describe what someone studied. Architecture describes
            what someone built.
          </Doctrine>

          <Reveal>
            <p className="text-saturn">
              I also speak on AI security architecture, agentic AI risk and why
              enterprise trust is now an engineering discipline, for technical
              audiences, without a vendor pitch.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
