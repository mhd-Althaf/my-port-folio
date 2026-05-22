import { useState } from 'react'
import { motion } from 'framer-motion'
import { downloadResume } from '../../utils/downloadResume'
import { transition } from '../../utils/motion'
import { cn } from '../../utils/cn'

export default function ResumeButton({ children, className }) {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    if (loading) return
    setLoading(true)
    try {
      await downloadResume()
    } catch (err) {
      console.error(err)
      window.open('/resume.pdf', '_blank', 'noopener,noreferrer')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      disabled={loading}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.99 }}
      transition={transition.hover}
      className={cn(
        'relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm',
        'bg-gradient-to-r from-cyan-600 to-violet-700 text-white shadow-lg shadow-cyan-900/20',
        'hover:shadow-cyan-800/25 disabled:opacity-70 disabled:cursor-wait',
        className
      )}
      aria-label="Download resume as PDF"
    >
      {loading ? 'Downloading…' : children}
    </motion.button>
  )
}
