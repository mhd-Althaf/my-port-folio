import { motion } from 'framer-motion'
import { transition } from '../../utils/motion'
import { FaPuzzlePiece, FaUsers, FaBolt, FaComments } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'
import TiltCard from '../ui/TiltCard'
import { aboutCards } from '../../data/about'

const iconMap = {
  puzzle: FaPuzzlePiece,
  users: FaUsers,
  zap: FaBolt,
  message: FaComments,
}

export default function About() {
  return (
    <section id="about" className="relative section-padding">
      <SectionTitle
        eyebrow="About Me"
        title="Building the Future, One Stack at a Time"
        subtitle="B.Com graduate turned MERN developer with a passion for scalable products."
      />

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={transition.premium}
          className="glass rounded-3xl p-8 md:p-10"
        >
          <p className="text-zinc-300 leading-relaxed mb-4">
            I&apos;m a <strong className="text-white">B.Com graduate (2022)</strong> transitioning into
            full-stack development with hands-on{' '}
            <strong className="text-cyan-400">MERN stack training at Brototype</strong>.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-4">
            I&apos;m passionate about building{' '}
            <strong className="text-white">scalable web applications</strong> that balance polished
            frontends with robust backends. I enjoy working across the stack — from React UIs to
            Node.js APIs and MongoDB data layers.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            With a <strong className="text-violet-300">continuous learning mindset</strong>, I stay
            curious about new tools, patterns, and production-ready practices that help teams ship
            faster and smarter.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {aboutCards.map((card, i) => {
            const Icon = iconMap[card.icon]
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, ...transition.soft }}
              >
                <TiltCard>
                  <div className="glass rounded-2xl p-6 h-full hover:border-cyan-500/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex items-center justify-center mb-4">
                      <Icon className="text-cyan-400" size={22} />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-zinc-400">{card.description}</p>
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
