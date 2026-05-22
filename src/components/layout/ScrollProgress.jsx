import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 60, damping: 22, mass: 0.4, restDelta: 0.0008 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}
