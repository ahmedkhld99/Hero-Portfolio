import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiOutlinePaintBrush,
  HiOutlineCodeBracket,
  HiOutlineCog6Tooth,
  HiOutlineDocumentText,
  HiOutlineClipboardDocumentList,
  HiOutlinePhoto,
  HiOutlineRocketLaunch,
  HiOutlineChartBarSquare,
  HiOutlineCheckCircle,
} from 'react-icons/hi2'
import { TbSeo } from 'react-icons/tb'

import SectionTitle from './SectionTitle'
import ServiceCard from './ServiceCard'

const services = [
  {
    icon: HiOutlinePaintBrush,
    title: 'Website Design',
    description: 'Creating premium portfolio and business websites.',
    features: ['Custom UI/UX', 'Responsive', 'Modern Design', 'Brand Focus'],
  },
  {
    icon: HiOutlineCodeBracket,
    title: 'Development',
    description: 'Building fast responsive websites.',
    features: ['Responsive', 'Clean Code', 'Fast', 'Scalable'],
  },
  {
    icon: HiOutlineCog6Tooth,
    title: 'Management',
    description: 'Managing websites and keeping everything updated.',
    features: ['Updates', 'Maintenance', 'Monitoring', 'Content'],
  },
  {
    icon: HiOutlineDocumentText,
    title: 'Content',
    description: 'Editing website content and product information.',
    features: ['Pages', 'Products', 'Editing', 'SEO Copy'],
  },
  {
    icon: TbSeo,
    title: 'SEO',
    description: 'Improving search visibility.',
    features: ['Technical', 'Meta', 'Speed', 'On-page'],
  },
  {
    icon: HiOutlineClipboardDocumentList,
    title: 'Catalogs',
    description: 'Catalogs & Datasheets.',
    features: ['Catalogs', 'Datasheets', 'Specs', 'PDF'],
  },
  {
    icon: HiOutlinePhoto,
    title: 'Image Editing',
    description: 'Professional Photoshop editing.',
    features: ['Retouch', 'Background', 'Colors', 'Optimize'],
  },
  {
    icon: HiOutlineRocketLaunch,
    title: 'Optimization',
    description: 'Improving UX & Performance.',
    features: ['UX', 'Performance', 'Speed', 'Accessibility'],
  },
  {
    icon: HiOutlineChartBarSquare,
    title: 'Analytics',
    description: 'Tracking website performance.',
    features: ['Reports', 'Analytics', 'Insights', 'Conversions'],
  },
]

export default function Services() {
  const [active, setActive] = useState(0)
  const ActiveIcon = services[active].icon

  return (
    <section id="services" className="py-20  bg-surface">
      <div className="container-px ">

        <SectionTitle
          eyebrow="Services"
          title="Everything Your Business Website"
          highlight="Needs To Perform"
          description="From design to long-term management, everything your business website needs in one place."
        />

<div className="mt-8 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
  {services.map((service, i) => (
    <ServiceCard
      key={service.title}
      service={service}
      isActive={active === i}
      onActivate={() => setActive(i)}
    />
  ))}
</div>
<div className="mt-8 flex justify-center">
  <div
    className="
      relative
      w-full
      max-w-4xl
      overflow-hidden
      rounded-[28px]
      bg-primary
      p-6 md:p-8
      shadow-card
    "
  >
    <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />

    <AnimatePresence mode="wait">
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="
relative z-10
grid
grid-cols-1
md:grid-cols-[80px_1fr]
gap-6
md:gap-8
text-center
md:text-left
items-center
"
      >
        {/* ICON */}
<div className="flex justify-center sm:justify-start">
  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-accent text-4xl text-white shadow-glow">
    <ActiveIcon />
  </div>
</div>

        {/* CONTENT */}
<div className="flex flex-col justify-between h-full">
  <div>
<h3 className="text-2xl sm:text-3xl font-bold text-white">
  {services[active].title}
</h3>

    <p className="mt-3 text-sm leading-6 text-white/70">
      {services[active].description}
    </p>
  </div>

  <div className="
    mt-6
    grid
    grid-cols-1
    sm:grid-cols-2
    gap-3
    justify-items-center
    md:justify-items-start
">
    {services[active].features.map((feature) => (
      <div
        key={feature}
        className="flex items-center gap-2 text-sm text-white/90"
      >
        <HiOutlineCheckCircle className="text-accent" />
        {feature}
      </div>
    ))}
  </div>
</div>
      </motion.div>
    </AnimatePresence>

    {/* Pagination */}
    <div className="relative z-10 mt-6 flex justify-center gap-2">
      {services.map((_, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={`rounded-full transition-all duration-300 ${
            active === i
              ? 'h-2 w-8 bg-accent'
              : 'h-2 w-2 bg-white/20'
          }`}
        />
      ))}
    </div>

  </div>
</div>

      </div>
    </section>
  )
}