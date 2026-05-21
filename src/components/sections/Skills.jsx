import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiBootstrap,
  SiTailwindcss,
} from 'react-icons/si'
import { FaCss3Alt, FaKey } from 'react-icons/fa'
import { TbDatabase } from 'react-icons/tb'
import SectionTitle from '../ui/SectionTitle'
import TiltCard from '../ui/TiltCard'
import { skills } from '../../data/skills'

const iconBySkill = {
  HTML: SiHtml5,
  CSS: FaCss3Alt,
  JavaScript: SiJavascript,
  'React.js': SiReact,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  MongoDB: SiMongodb,
  Mongoose: TbDatabase,
  JWT: FaKey,
  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,
  Bootstrap: SiBootstrap,
  'Tailwind CSS': SiTailwindcss,
}

function SkillBar({ skill, inView }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (inView) setWidth(skill.level)
  }, [inView, skill.level])

  return (
    <div className="group">
      <div className="flex justify-between mb-2 text-sm">
        <span className="text-zinc-300 group-hover:text-cyan-300 transition-colors">
          {skill.name}
        </span>
        <span className="text-zinc-500">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative section-padding">
      <SectionTitle
        eyebrow="Skills"
        title="Tech Stack & Tools"
        subtitle="Interactive proficiency across the MERN ecosystem and modern frontend tooling."
      />

      <div ref={ref} className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <SkillBar skill={skill} inView={inView} />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
          {skills.map((skill, i) => {
            const Icon = iconBySkill[skill.name] || SiJavascript
            return (
              <motion.div
                key={`icon-${skill.name}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <TiltCard>
                  <div className="glass rounded-2xl p-4 flex flex-col items-center gap-2 hover:glow-cyan transition-shadow h-full">
                    <Icon size={32} className="text-cyan-400" />
                    <span className="text-xs text-zinc-400 text-center">{skill.name}</span>
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
