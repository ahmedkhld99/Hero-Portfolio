import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle.jsx'

const floatingStats = [
  { value: '2+', label: 'Years Experience', position: 'top-6 -right-6' },
  { value: '20+', label: 'Projects', position: 'bottom-8 -left-1' },
]

export default function About() {
  return (
    <section id="about" className="section-py bg-white">
      <div className="container-px grid lg:grid-cols-2 gap-16 lg:gap-14 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative overflow-hidden rounded-[28px] shadow-card max-w-md mx-auto aspect-[4/5]">
            <img
              src="/images/about.jpg"
              alt="Ahmed Khaled Workspace"
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
          </div>

          {floatingStats.map((stat) => (
            <motion.div
              key={stat.label}
              animate={{ y: [0, -50, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className={`hidden sm:flex absolute ${stat.position} flex-col rounded-2xl bg-white px-5 py-4 shadow-card border border-primary/5`}
            >
              <span className="text-2xl font-extrabold text-accent">
                {stat.value}
              </span>

              <span className="text-xs font-medium text-primary/50">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT */}
        <div className="order-1 lg:order-2">
          <SectionTitle
            eyebrow="About Me"
            title="Helping Businesses Build A Strong"
            highlight="Online Presence"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 space-y-4 text-[15px] md:text-base leading-relaxed text-primary/60 max-w-xl"
          >
            <p>
              I'm Ahmed Khaled, a Web Specialist focused on building and
              managing professional business websites.
            </p>

            <p>
              I work with companies and business owners to create modern
              websites, manage website content, improve SEO, optimize user
              experience, prepare product catalogs and technical datasheets,
              edit product images when needed, and coordinate with
              development teams to continuously improve website performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl"
          >
            {[
              ['2+', 'Years Experience'],
              ['20+', 'Projects'],
              ['100%', 'Client Satisfaction'],
              ['24/7', 'Support'],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl bg-surface px-4 py-5 text-center border border-primary/5"
              >
                <p className="text-xl font-extrabold text-primary">
                  {value}
                </p>

                <p className="mt-1 text-[11px] font-medium text-primary/50 leading-tight">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}