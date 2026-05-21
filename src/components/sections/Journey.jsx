import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { timeline } from '../../data/timeline'
import { cn } from '../../utils/cn'

export default function Journey() {
  return (
    <section id="journey" className="relative section-padding">
      <SectionTitle
        eyebrow="Experience"
        title="My Journey"
        subtitle="From commerce graduate to aspiring full-stack developer."
      />

      <div className="relative max-w-3xl mx-auto">
        <div
          className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-violet-500/50 to-fuchsia-500/30"
          aria-hidden
        />

        {timeline.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={cn(
              'relative flex gap-8 mb-12 last:mb-0',
              'md:odd:flex-row-reverse md:odd:text-right'
            )}
          >
            <div className="hidden md:block md:w-1/2" />
            <div
              className={cn(
                'absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full border-2 mt-1.5',
                item.highlight
                  ? 'bg-cyan-400 border-cyan-300 shadow-lg shadow-cyan-500/50'
                  : 'bg-[#0a0a0f] border-violet-500'
              )}
              aria-hidden
            />
            <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
              <span className="text-cyan-400 text-sm font-semibold">{item.year}</span>
              <h3
                className={cn(
                  'font-display text-xl font-bold mt-1',
                  item.highlight ? 'text-gradient' : 'text-white'
                )}
              >
                {item.title}
              </h3>
              <p className="text-zinc-400 mt-2 text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
