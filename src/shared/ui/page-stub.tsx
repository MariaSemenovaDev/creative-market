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
  return (
    <section className="px-6 py-10">
      <div className="mx-auto w-full max-w-6xl rounded-[32px] border border-stone-200 bg-white/80 p-8 shadow-sm backdrop-blur sm:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-amber-700">
          {sectionLabel}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-stone-600 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  )
}
