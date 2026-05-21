import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'
import GlowButton from '../ui/GlowButton'
import { projects } from '../../data/projects'
import { cn } from '../../utils/cn'

function FeaturedProject({ project }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 25 })
  const springY = useSpring(y, { stiffness: 200, damping: 25 })

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative mb-16 rounded-3xl p-[2px] overflow-hidden group"
    >
      <div
        className={cn(
          'absolute inset-0 rounded-3xl bg-gradient-to-r opacity-80',
          project.gradient,
          'animate-[spin_8s_linear_infinite] group-hover:opacity-100'
        )}
        style={{ backgroundSize: '200% 200%' }}
      />
      <div className="relative rounded-[22px] bg-[#0d0d14] overflow-hidden">
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
          style={{
            background: `radial-gradient(400px circle at ${springX}px ${springY}px, rgba(34,211,238,0.15), transparent 50%)`,
          }}
        />
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="relative aspect-video lg:aspect-auto lg:min-h-[320px] bg-gradient-to-br from-cyan-950/50 to-violet-950/50 flex items-center justify-center p-8">
            <img
              src={project.image}
              alt={project.title}
              className="max-h-48 w-auto object-contain drop-shadow-2xl"
            />
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              Featured
            </span>
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <p className="text-cyan-400 text-sm font-medium mb-2">{project.subtitle}</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              {project.title}
            </h3>
            <p className="text-zinc-400 mb-6">{project.description}</p>
            <ul className="grid sm:grid-cols-2 gap-2 mb-8">
              {project.highlights.map((item) => (
                <li key={item} className="text-sm text-zinc-500 flex items-start gap-2">
                  <span className="text-cyan-500 mt-1">▹</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs rounded-full glass text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              {project.live && project.live !== '#projects' && (
                <GlowButton href={project.live} external variant="primary">
                  <FaExternalLinkAlt size={14} /> Live Demo
                </GlowButton>
              )}
              <GlowButton href={project.github} external variant="outline">
                <FaGithub size={18} /> GitHub
              </GlowButton>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass rounded-2xl overflow-hidden group hover:border-violet-500/30 transition-all duration-300"
    >
      <div
        className={cn(
          'h-40 bg-gradient-to-br flex items-center justify-center',
          project.gradient,
          'opacity-20 group-hover:opacity-30 transition-opacity'
        )}
      >
        <img src={project.image} alt="" className="h-24 object-contain opacity-90" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
        <p className="text-sm text-cyan-400/80 mt-1">{project.subtitle}</p>
        <p className="text-zinc-400 text-sm mt-3 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-zinc-400">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3 mt-6">
          {project.live && (
            <GlowButton href={project.live} external variant="ghost" className="!px-4 !py-2 text-xs">
              <FaExternalLinkAlt size={12} /> Demo
            </GlowButton>
          )}
          <GlowButton href={project.github} external variant="outline" className="!px-4 !py-2 text-xs">
            <FaGithub size={14} /> Code
          </GlowButton>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const featured = projects.find((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative section-padding">
      <SectionTitle
        eyebrow="Portfolio"
        title="Featured Work"
        subtitle="Production-oriented MERN projects built with security, scalability, and polish."
      />

      {featured && <FeaturedProject project={featured} />}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {others.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
