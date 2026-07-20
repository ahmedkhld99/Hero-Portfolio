import { motion } from 'framer-motion'

export default function StatCard({ icon: Icon, value, label, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="rounded-xl3 bg-white border border-primary/[0.06] p-7 md:p-8 text-center shadow-softer hover:shadow-card transition-shadow duration-300"
    >
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent text-2xl">
        <Icon />
      </div>
      <p className="mt-5 text-3xl md:text-4xl font-extrabold text-primary">
        {value}
      </p>
      <p className="mt-2 text-sm font-medium text-primary/50">{label}</p>
    </motion.div>
  )
}
