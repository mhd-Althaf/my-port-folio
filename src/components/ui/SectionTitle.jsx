import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="mb-12 md:mb-16 text-center"
    >
      {eyebrow && (
        <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500" />
    </motion.div>
  )
}
