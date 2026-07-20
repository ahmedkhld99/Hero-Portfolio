import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import Button from './Button.jsx'

const links = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Services', to: 'services' },
  { label: 'Contact', to: 'cta' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-softer border-b border-primary/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex items-center justify-between h-20">
        <Link
          to="home"
          smooth
          duration={400}
          className="cursor-pointer select-none"
        >
          <span className="text-xl font-extrabold tracking-tight text-primary">
            Ahmed<span className="text-accent">.</span>Khaled
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={100}
              offset={-80}
              spy
              activeClass="!text-primary after:w-full"
              className="relative text-[15px] font-medium text-primary/60 hover:text-primary cursor-pointer transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link to="cta" smooth duration={600} offset={-80}>
            <Button variant="primary" className="!px-6 !py-3 !text-sm">
              Start Your Project
            </Button>
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-2xl text-primary p-2 -mr-2"
        >
          {open ? <HiXMark /> : <HiBars3 />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg border-b border-primary/[0.06]"
          >
            <div className="container-px flex flex-col gap-1 py-5">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-80}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[15px] font-medium text-primary/70 hover:text-primary cursor-pointer border-b border-primary/[0.05] last:border-none"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="cta"
                smooth
                duration={600}
                offset={-80}
                onClick={() => setOpen(false)}
              >
                <Button variant="primary" className="w-full mt-4">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
