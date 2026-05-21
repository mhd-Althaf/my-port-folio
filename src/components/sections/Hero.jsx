import { lazy, Suspense, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import { HiChevronDown } from 'react-icons/hi'
import { SiReact, SiNodedotjs, SiMongodb, SiJavascript } from 'react-icons/si'
import { siteConfig } from '../../data/siteConfig'
import GlowButton from '../ui/GlowButton'
import { useMediaQuery } from '../../hooks/useMediaQuery'

const HeroScene = lazy(() => import('../three/HeroScene'))

const techIcons = [
  { Icon: SiReact, label: 'React', className: 'top-[18%] left-[8%] text-cyan-400' },
  { Icon: SiNodedotjs, label: 'Node', className: 'top-[30%] right-[10%] text-emerald-400' },
  { Icon: SiMongodb, label: 'MongoDB', className: 'bottom-[35%] left-[12%] text-green-400' },
  { Icon: SiJavascript, label: 'JS', className: 'bottom-[28%] right-[14%] text-yellow-300' },
]

export default function Hero() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (isMobile) return
    const handler = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      })
    }
    window.addEventListener('mousemove', handler, { passive: true })
    return () => window.removeEventListener('mousemove', handler)
  }, [isMobile])

  const scrollToAbout = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      <Suspense fallback={<div className="absolute inset-0 bg-cyan-950/10" />}>
        <HeroScene mouse={mouse} />
      </Suspense>

      {!isMobile &&
        techIcons.map(({ Icon, label, className }, i) => (
          <motion.div
            key={label}
            className={`absolute hidden lg:flex p-3 rounded-2xl glass ${className}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -12, 0] }}
            transition={{
              opacity: { delay: 0.8 + i * 0.1, duration: 0.5 },
              y: { repeat: Infinity, duration: 4 + i, ease: 'easeInOut' },
            }}
            aria-hidden
          >
            <Icon size={28} title={label} />
          </motion.div>
        ))}

      <div className="relative z-10 section-padding w-full text-center lg:text-left">
        <div className="max-w-4xl mx-auto lg:mx-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 font-medium tracking-wide mb-4"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-4 text-xl md:text-2xl text-zinc-400"
          >
            {siteConfig.title}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 h-10 flex items-center justify-center lg:justify-start text-lg md:text-xl text-zinc-300"
          >
            <span className="text-violet-400 mr-2">&gt;</span>
            <TypeAnimation
              sequence={siteConfig.typingRoles.flatMap((role) => [role, 2000])}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-gradient font-medium"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <GlowButton href={siteConfig.resumeUrl} download variant="primary">
              <FaDownload /> Resume
            </GlowButton>
            <GlowButton href={siteConfig.social.github} external variant="outline">
              <FaGithub size={18} /> GitHub
            </GlowButton>
            <GlowButton href={siteConfig.social.linkedin} external variant="outline">
              <FaLinkedin size={18} /> LinkedIn
            </GlowButton>
          </motion.div>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-zinc-500 hover:text-cyan-400"
        aria-label="Scroll to about section"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <HiChevronDown size={24} />
      </motion.button>
    </section>
  )
}
