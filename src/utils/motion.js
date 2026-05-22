/** Shared motion presets — calm, premium easing */

export const ease = {
  premium: [0.22, 1, 0.36, 1],
  soft: [0.33, 1, 0.68, 1],
}

export const duration = {
  fast: 0.45,
  base: 0.85,
  slow: 1.15,
  reveal: 1.35,
}

export const transition = {
  premium: { duration: duration.reveal, ease: ease.premium },
  soft: { duration: duration.slow, ease: ease.soft },
  hover: { duration: duration.fast, ease: ease.premium },
}

export const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: transition.premium,
}

export const floatY = {
  animate: { y: [0, -8, 0] },
  transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
}
