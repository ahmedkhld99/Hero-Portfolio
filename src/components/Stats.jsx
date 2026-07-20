import {
  HiOutlineCalendarDays,
  HiOutlineBriefcase,
  HiOutlineFaceSmile,
  HiOutlineLifebuoy,
} from 'react-icons/hi2'
import StatCard from './StatCard.jsx'

const stats = [
  { icon: HiOutlineCalendarDays, value: '2+', label: 'Years Experience' },
  { icon: HiOutlineBriefcase, value: '20+', label: 'Projects' },
  { icon: HiOutlineFaceSmile, value: '100%', label: 'Client Satisfaction' },
  { icon: HiOutlineLifebuoy, value: '24/7', label: 'Support' },
]

export default function Stats() {
  return (
    <section className="section-py bg-white">
      <div className="container-px">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
