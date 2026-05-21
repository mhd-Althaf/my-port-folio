import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useMousePosition } from '../../hooks/useMousePosition'
import { useMediaQuery, usePrefersReducedMotion } from '../../hooks/useMediaQuery'

export default function CustomCursor() {
  const { x, y } = useMousePosition()
  const isDesktop = useMediaQuery('(pointer: fine)')
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (!isDesktop || reducedMotion) return
    document.body.classList.add('custom-cursor-active')
    return () => document.body.classList.remove('custom-cursor-active')
  }, [isDesktop, reducedMotion])

  if (!isDesktop || reducedMotion) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400/60 pointer-events-none z-[200] mix-blend-difference"
        animate={{ x: x - 16, y: y - 16 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
        aria-hidden="true"
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-[201]"
        animate={{ x: x - 4, y: y - 4 }}
        transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.2 }}
        aria-hidden="true"
      />
    </>
  )
}
