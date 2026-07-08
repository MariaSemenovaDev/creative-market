interface PageStubProps {
  title: string
  description: string
  sectionLabel?: string
}

export function PageStub({
  title,
  description,
  sectionLabel = 'Public',
}: PageStubProps) {
  const isAdmin = sectionLabel === 'Admin'

  return (
    <section className="px-6 py-12 sm:py-16">
      <div
        className={`mx-auto w-full max-w-6xl border p-8 sm:p-12 ${
          isAdmin
            ? 'border-[var(--line-soft)] bg-[var(--color-paper)]'
            : 'border-[var(--line-strong)] bg-[var(--surface-muted)]'
        }`}
      >
        <div className="flex items-center gap-3">
          <span
            className={`h-2.5 w-2.5 ${
              isAdmin ? 'bg-[var(--color-brand-blue-deep)]' : 'bg-[var(--color-ochre)]'
            }`}
          />
          <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-warm-brown)]">
            {sectionLabel}
          </p>
        </div>
        <h1 className="mt-6 max-w-4xl font-[var(--font-display)] text-5xl font-medium tracking-[-0.06em] text-[var(--color-brand-blue-deep)] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <div className="mt-8 h-px w-full bg-[var(--line-soft)]" />
        <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-ink)] sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  )
}
