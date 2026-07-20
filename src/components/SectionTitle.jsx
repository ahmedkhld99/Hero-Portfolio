import { motion } from 'framer-motion'

export default function SectionTitle({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
}) {
  const isCenter = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.15!important] text-balance text-primary">
        {title}{' '}
        {highlight && <span className="text-accent">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-5 text-[15px] md:text-base leading-relaxed text-primary/60">
          {description}
        </p>
      )}
    </motion.div>
  )
}
