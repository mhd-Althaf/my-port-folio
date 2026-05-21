import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'
import GlowButton from '../ui/GlowButton'
import { siteConfig } from '../../data/siteConfig'

const social = [
  { icon: FaGithub, href: siteConfig.social.github, label: 'GitHub' },
  { icon: FaLinkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { icon: FaEnvelope, href: `mailto:${siteConfig.email}`, label: 'Email' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    setStatus('success')
  }

  return (
    <section id="contact" className="relative section-padding">
      <SectionTitle
        eyebrow="Contact"
        title="Let's Build Something Great"
        subtitle="Open to full-stack and MERN opportunities. Reach out anytime."
      />

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 space-y-6"
        >
          {['name', 'email', 'message'].map((field) => (
            <div key={field} className="group">
              <label htmlFor={field} className="block text-sm text-zinc-400 mb-2 capitalize">
                {field}
              </label>
              {field === 'message' ? (
                <textarea
                  id={field}
                  required
                  rows={5}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all outline-none resize-none"
                  placeholder="Tell me about your opportunity..."
                />
              ) : (
                <input
                  id={field}
                  type={field === 'email' ? 'email' : 'text'}
                  required
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-600 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all outline-none"
                  placeholder={field === 'name' ? 'Your name' : 'you@email.com'}
                />
              )}
            </div>
          ))}
          <GlowButton type="submit" variant="primary" className="w-full sm:w-auto">
            Send Message
          </GlowButton>
          {status === 'success' && (
            <p className="text-sm text-cyan-400">Opening your email client…</p>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            className="w-16 h-16 rounded-2xl glass flex items-center justify-center mb-8 text-cyan-400"
          >
            <FaEnvelope size={28} />
          </motion.div>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Prefer email? Write to{' '}
            <a href={`mailto:${siteConfig.email}`} className="text-cyan-400 hover:underline">
              {siteConfig.email}
            </a>
            . I typically respond within 24–48 hours.
          </p>
          <div className="flex gap-4">
            {social.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -4 }}
                className="p-4 rounded-2xl glass text-zinc-400 hover:text-cyan-300"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
