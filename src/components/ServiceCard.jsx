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
      <div className="flex h-[72px] flex-col items-center justify-center gap-1 px-2 py-2">

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
          className={`text-[14px] font-semibold leading-4 transition-colors ${
            isActive ? 'text-white' : 'text-primary'
          }`}
        >
          {service.title}
        </h3>

      </div>
    </button>
  )
}