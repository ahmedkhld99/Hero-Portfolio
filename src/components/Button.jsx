import { motion } from 'framer-motion'

/**
 * Reusable button.
 * variant: 'primary' | 'secondary' | 'ghost'
 * as: 'button' | 'a'
 */
export default function Button({
  children,
  variant = 'primary',
  icon: Icon,
  className = '',
  as = 'button',
  href,
  onClick,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold text-[15px] px-7 py-3.5 transition-all duration-300 whitespace-nowrap'

  const variants = {
    primary:
      'bg-primary text-white shadow-soft hover:bg-accent hover:shadow-glow',
    secondary:
      'bg-white text-primary border border-primary/12 hover:border-accent/40 hover:text-accent shadow-softer',
    ghost: 'text-primary hover:text-accent',
  }

  const Component = as === 'a' ? motion.a : motion.button

  return (
    <Component
      href={as === 'a' ? href : undefined}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.98 }}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon className="text-lg" />}
    </Component>
  )
}
