import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HiArrowUp } from 'react-icons/hi'
import { siteConfig } from '../../data/siteConfig'

const social = [
  { icon: FaGithub, href: siteConfig.social.github, label: 'GitHub' },
  { icon: FaLinkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { icon: FaEnvelope, href: `mailto:${siteConfig.email}`, label: 'Email' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/10 bg-[#08080c]">
      <div className="section-padding py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="font-display text-xl font-semibold text-white">{siteConfig.name}</p>
          <p className="text-zinc-500 text-sm mt-1">{siteConfig.title}</p>
          <p className="text-zinc-600 text-xs mt-4">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {social.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -4, scale: 1.1 }}
              className="p-3 rounded-xl glass text-zinc-400 hover:text-cyan-300 hover:border-cyan-500/30"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>

        <motion.button
          type="button"
          onClick={scrollTop}
          whileHover={{ y: -4 }}
          className="flex items-center gap-2 px-5 py-3 rounded-xl glass text-sm text-zinc-300 hover:text-cyan-300"
          aria-label="Back to top"
        >
          <HiArrowUp />
          Back to top
        </motion.button>
      </div>
    </footer>
  )
}
