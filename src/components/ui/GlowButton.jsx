import { motion } from 'framer-motion'
import { transition } from '../../utils/motion'
import { cn } from '../../utils/cn'

export default function GlowButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className,
  download,
  external,
  type = 'button',
  ...props
}) {
  const base =
    'relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300'
  const variants = {
    primary:
      'bg-gradient-to-r from-cyan-500 to-violet-600 text-white hover:shadow-lg hover:shadow-cyan-500/25',
    outline:
      'glass text-zinc-100 hover:border-cyan-400/50 hover:text-cyan-300',
    ghost: 'text-zinc-300 hover:text-cyan-300 hover:bg-white/5',
  }

  const classes = cn(base, variants[variant], className)

  const motionProps = {
    whileHover: { scale: 1.02, y: -1 },
    whileTap: { scale: 0.99 },
    transition: transition.hover,
  }

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} onClick={onClick} className={classes} {...motionProps} {...props}>
      {children}
    </motion.button>
  )
}
