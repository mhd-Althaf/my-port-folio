import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { siteConfig } from '../../data/siteConfig'
import { cn } from '../../utils/cn'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass py-3 shadow-lg shadow-black/20' : 'py-5 bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <button
          type="button"
          onClick={() => scrollTo('home')}
          className="font-display font-bold text-lg text-gradient"
          aria-label="Go to home"
        >
          MA
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {siteConfig.navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => scrollTo(link.id)}
                className="text-sm text-zinc-400 hover:text-cyan-300 transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <GlowButtonNav onClick={() => scrollTo('contact')} />

        <button
          type="button"
          className="md:hidden p-2 text-zinc-300"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 mx-4 mt-2 rounded-2xl overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-2">
              {siteConfig.navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="w-full text-left py-3 px-4 rounded-lg hover:bg-white/5 text-zinc-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('contact')}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-medium"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function GlowButtonNav({ onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="hidden md:inline-flex px-5 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-cyan-500 to-violet-600 text-white"
    >
      Hire Me
    </motion.button>
  )
}
