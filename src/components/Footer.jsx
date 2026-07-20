import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin,
} from 'react-icons/hi2'

const contact = [
  {
    icon: HiOutlineEnvelope,
    label: 'Email',
    value: 'ahmedkhld72@gmail.com',
    href: 'mailto:ahmedkhld72@gmail.com',
  },
  {
    icon: HiOutlinePhone,
    label: 'Phone',
    value: '+20 109 214 5163',
    href: 'tel:+201092145163',
  },
  {
    icon: HiOutlineMapPin,
    label: 'Location',
    value: 'Egypt',
    href: null,
  },
]

export default function Footer() {
  return (
    <footer className="bg-primary-900">
      <div className="container-px py-16 grid md:grid-cols-2 gap-12">
        <div>
          <span className="text-xl font-extrabold tracking-tight text-white">
            Ahmed<span className="text-accent">.</span>Khaled
          </span>
          <p className="mt-4 text-sm leading-relaxed text-white/50 max-w-xs">
            Professional Website Designer &amp; Manager helping businesses
            grow online.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {contact.map((item) => (
            <div key={item.label}>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] text-accent text-lg">
                <item.icon />
              </div>
              <p className="mt-3 text-xs font-medium text-white/40">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm font-medium text-white/80 hover:text-accent transition-colors break-words"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm font-medium text-white/80">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="container-px py-6">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Ahmed Khaled. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
