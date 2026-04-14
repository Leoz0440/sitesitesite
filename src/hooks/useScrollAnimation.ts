export const useScrollAnimation = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

export const useScrollAnimationX = (direction: 'left' | 'right' = 'left', delay = 0) => ({
  initial: { opacity: 0, x: direction === 'left' ? -60 : 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

export const useScrollAnimationScale = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});
