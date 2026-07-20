import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import {
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
} from 'react-icons/hi2'
import { TbBrandGoogleAnalytics } from 'react-icons/tb'
import { BsGraphUpArrow, BsShieldCheck } from 'react-icons/bs'
import Button from './Button.jsx'

const badges = [
  'Portfolio Websites',
  'Business Websites',
  'SEO Focused',
  'Website Management',
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section
      id="home"
  className="relative pt-32 pb-24 md:pt-32 md:pb-32 overflow-hidden"
    >
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-surface" />
      <div className="absolute inset-0 -z-10 bg-grid-pattern [background-size:44px_44px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-40 -right-40 -z-10 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[110px]" />
      <div className="absolute top-40 -left-40 -z-10 h-[380px] w-[380px] rounded-full bg-primary/10 blur-[110px]" />

      <div className="container-px grid lg:grid-cols-2 gap-16 lg:gap-10 items-center">
        {/* LEFT */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-primary/70 shadow-softer border border-primary/[0.06]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Currently taking on new projects
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.12] tracking-tight text-primary text-balance"
          >
            Professional Websites That Grow Your{' '}
            <span className="text-accent">Business</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 text-base md:text-lg leading-relaxed text-primary/60 max-w-xl"
          >
            I help businesses build, manage, and improve their online
            presence through professional websites, content management, SEO
            optimization, and digital solutions that drive real business
            growth.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link to="cta" smooth duration={600} offset={-80}>
              <Button variant="primary" icon={HiOutlineArrowRight}>
                Start Your Project
              </Button>
            </Link>
            <Link to="services" smooth duration={600} offset={-80}>
              <Button variant="secondary">View Services</Button>
            </Link>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 max-w-md"
          >
            {badges.map((badge) => (
              <li
                key={badge}
                className="flex items-center gap-2 text-sm font-medium text-primary/70"
              >
                <HiOutlineCheckCircle className="text-accent text-lg shrink-0" />
                {badge}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* glass card holding the laptop */}
          <div className="relative rounded-xl4 border border-white/60 bg-white/40 backdrop-blur-xl shadow-card p-6 md:p-10">
            <div className="rounded-xl3 overflow-hidden bg-primary shadow-soft">
              {/* browser bar */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-primary-900">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <div className="ml-3 h-5 flex-1 rounded-md bg-white/[0.06]" />
              </div>
              {/* mock dashboard screen */}
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-24 rounded-full bg-white/20" />
                  <div className="h-7 w-20 rounded-full bg-accent" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="rounded-xl2 bg-white/[0.06] p-3 space-y-2"
                    >
                      <div className="h-2 w-10 rounded-full bg-white/20" />
                      <div className="h-4 w-14 rounded-full bg-white/40" />
                    </div>
                  ))}
                </div>
                <div className="rounded-xl2 bg-white/[0.06] p-4 h-28 flex items-end gap-2">
                  {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-accent/40 to-accent"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* laptop base */}
            <div className="mx-auto mt-2 h-3 w-[70%] rounded-b-2xl bg-primary-900/90" />
          </div>

          {/* floating card 1 */}
          <motion.div
            animate={{ y: [1, -50, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-6 md:-left-10 top-8 flex items-center gap-3 rounded-xl2 bg-white px-4 py-3 shadow-card border border-primary/[0.05]"
          >
            <div className="h-9 w-9 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <BsGraphUpArrow />
            </div>
            <div>
              <p className="text-[11px] text-primary/50 font-medium">
                SEO Score
              </p>
              <p className="text-sm font-bold text-primary">98 / 100</p>
            </div>
          </motion.div>

          {/* floating card 2 */}
          <motion.div
            animate={{ y: [1, 50, 1] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="absolute -right-4 md:-right-8 bottom-14 flex items-center gap-3 rounded-xl2 bg-white px-4 py-3 shadow-card border border-primary/[0.05]"
          >
            <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <TbBrandGoogleAnalytics />
            </div>
            <div>
              <p className="text-[11px] text-primary/50 font-medium">
                Live Visitors
              </p>
              <p className="text-sm font-bold text-primary">2,481</p>
            </div>
          </motion.div>

          {/* floating card 3 */}
          <motion.div
            animate={{ y: [1, -50, 1] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute left-1/2 -translate-x-1/2 -bottom-8 flex items-center gap-3 rounded-xl2 bg-white px-4 py-3 shadow-card border border-primary/[0.05]"
          >
            <div className="h-9 w-9 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <BsShieldCheck />
            </div>
            <div>
              <p className="text-[11px] text-primary/50 font-medium">
                Uptime
              </p>
              <p className="text-sm font-bold text-primary">99.9%</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
