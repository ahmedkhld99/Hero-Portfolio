export default function ServiceCard({
  service,
  isActive,
  onActivate,
}) {
  const Icon = service.icon

  return (
    <button
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      className={`group w-full rounded-2xl border transition-all duration-300 text-center ${
        isActive
          ? 'bg-primary border-primary shadow-card scale-[1.02]'
          : 'bg-white border-primary/10 hover:border-accent/30 hover:-translate-y-1 hover:shadow-lg'
      }`}
    >
      <div className="flex min-h-[92px] flex-col items-center justify-center gap-2 px-2 py-3">

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
            isActive
              ? 'bg-accent text-white'
              : 'bg-surface text-primary group-hover:bg-accent/10 group-hover:text-accent'
          }`}
        >
          <Icon className="text-lg" />
        </div>

        <h3
          className={`text-[13px] md:text-[14px] font-semibold leading-tight break-words transition-colors ${
            isActive ? 'text-white' : 'text-primary'
          }`}
        >
          {service.title}
        </h3>

      </div>
    </button>
  )
}export default function ServiceCard({
  service,
  isActive,
  onActivate,
}) {
  const Icon = service.icon

  return (
    <button
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      className={`group w-full rounded-2xl border transition-all duration-300 text-center ${
        isActive
          ? 'bg-primary border-primary shadow-card scale-[1.02]'
          : 'bg-white border-primary/10 hover:border-accent/30 hover:-translate-y-1 hover:shadow-lg'
      }`}
    >
      <div className="flex h-[96px] md:h-[92px] flex-col items-center justify-center gap-2 px-2">

        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
            isActive
              ? 'bg-accent text-white'
              : 'bg-surface text-primary group-hover:bg-accent/10 group-hover:text-accent'
          }`}
        >
          <Icon className="text-lg" />
        </div>

        <h3
          className={`text-[11px] sm:text-[12px] md:text-[14px] font-semibold leading-tight text-center transition-colors ${
            isActive ? 'text-white' : 'text-primary'
          }`}
        >
          {service.title}
        </h3>

      </div>
    </button>
  )
}