import { motion } from 'framer-motion'
import { HiOutlineArrowRight, HiOutlineEnvelope } from 'react-icons/hi2'
import Button from './Button.jsx'

export default function CTA() {
  return (
    <section id="cta" className="section-py bg-white">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-xl4 bg-primary px-8 py-16 md:px-16 md:py-20 text-center"
        >
          <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-accent/25 blur-[100px]" />
          <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-accent/15 blur-[100px]" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] [background-size:40px_40px]" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.15] text-white text-balance">
              Ready To Elevate Your Business Online?
            </h2>
            <p className="mt-5 text-white/60 text-base md:text-lg leading-relaxed">
              Let's discuss your project and create a professional website
              that helps your business grow.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                as="a"
                href="mailto:ahmedkhld72@gmail.com"
                variant="primary"
                icon={HiOutlineArrowRight}
                className="!bg-accent hover:!bg-white hover:!text-primary"
              >
                Start Your Project
              </Button>
              <Button
                as="a"
                href="mailto:ahmedkhld72@gmail.com"
                variant="secondary"
                icon={HiOutlineEnvelope}
                className="!bg-white/[0.06] !text-white !border-white/15 hover:!border-white/30 hover:!text-white"
              >
                Email Me
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
