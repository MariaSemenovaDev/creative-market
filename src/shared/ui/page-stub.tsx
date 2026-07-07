import { Link } from 'react-router-dom'

import { ROUTES } from '@/shared/config/routes'

interface PageStubProps {
  title: string
  description: string
  sectionLabel?: string
}

const publicLinks = [
  { to: ROUTES.home, label: 'Главная' },
  { to: ROUTES.catalog, label: 'Каталог' },
  { to: ROUTES.masters, label: 'Мастера' },
  { to: ROUTES.shelves, label: 'Полки' },
  { to: ROUTES.giftQuiz, label: 'Квиз' },
]

const adminLinks = [
  { to: ROUTES.adminDashboard, label: 'Dashboard' },
  { to: ROUTES.adminProducts, label: 'Товары' },
  { to: ROUTES.adminMasters, label: 'Мастера' },
  { to: ROUTES.adminShelves, label: 'Полки' },
  { to: ROUTES.adminBookings, label: 'Брони' },
]

export function PageStub({
  title,
  description,
  sectionLabel = 'Public',
}: PageStubProps) {
  const links = sectionLabel === 'Admin' ? adminLinks : publicLinks

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="rounded-[32px] border border-stone-200 bg-white/80 p-8 shadow-sm backdrop-blur">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-amber-700">
            {sectionLabel}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-stone-600 sm:text-lg">
            {description}
          </p>
        </header>

        <section className="rounded-[32px] border border-stone-200 bg-white/80 p-8 shadow-sm backdrop-blur">
          <h2 className="text-lg font-semibold text-stone-900">Навигационный каркас</h2>
          <p className="mt-2 text-sm text-stone-600">
            На этом этапе маршрут существует и готов для дальнейшего наполнения без
            бизнес-логики.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-900 hover:text-stone-900"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
