import { motion } from 'framer-motion'
import { HiMiniStar } from 'react-icons/hi2'
import SectionTitle from './SectionTitle.jsx'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Founder, Coastal Interiors',
    quote:
      'Ahmed rebuilt our site from the ground up and our organic traffic has grown every month since. Communication was clear and every update landed on time.',
  },
  {
    name: 'Omar Farouk',
    role: 'Operations Lead, Farouk Trading Co.',
    quote:
      'Our product catalog finally looks as professional as the products themselves. Ahmed handled the datasheets, the images, and the site updates without us lifting a finger.',
  },
  {
    name: 'Layla Haddad',
    role: 'Marketing Manager, Haddad Group',
    quote:
      'The SEO work alone paid for itself within a quarter. Ahmed is responsive, detail-oriented, and genuinely invested in the result.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-py bg-surface">
      <div className="container-px">
        <SectionTitle
          eyebrow="Testimonials"
          title="What Clients Say About"
          highlight="Working Together"
          align="center"
        />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-xl3 bg-white p-8 shadow-softer hover:shadow-card border border-primary/[0.06] transition-shadow duration-300 flex flex-col"
            >
              <div className="flex gap-1 text-accent text-sm">
                {Array.from({ length: 5 }).map((_, s) => (
                  <HiMiniStar key={s} />
                ))}
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-primary/70 flex-1">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">
                    {t.name}
                  </p>
                  <p className="text-xs text-primary/50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
