import { NavLink, Outlet } from 'react-router-dom'

import { ROUTES } from '@/shared/config/routes'

interface NavigationLink {
  to: string
  label: string
  end?: boolean
}

const navigationLinks = [
  { to: ROUTES.home, label: 'Главная', end: true },
  { to: ROUTES.catalog, label: 'Каталог' },
  { to: ROUTES.masters, label: 'Мастера' },
  { to: ROUTES.shelves, label: 'Полки' },
  { to: ROUTES.giftQuiz, label: 'Квиз' },
  { to: ROUTES.events, label: 'События' },
  { to: ROUTES.rentShelf, label: 'Арендовать полку' },
] satisfies NavigationLink[]

export function PublicLayout() {
  return (
    <div className="min-h-screen bg-transparent">
      <header className="border-b border-stone-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <NavLink
              to={ROUTES.home}
              end
              className="text-2xl font-semibold tracking-tight text-stone-900"
            >
              Креатив Маркет
            </NavLink>
            <p className="mt-1 text-sm text-stone-500">
              Витрина локального маркета ручной работы
            </p>
          </div>

          <nav className="flex flex-wrap gap-2">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-stone-900 text-white'
                      : 'border border-stone-300 text-stone-700 hover:border-stone-900 hover:text-stone-900'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <NavLink
            to={ROUTES.adminDashboard}
            className="inline-flex items-center justify-center rounded-full border border-amber-300 bg-amber-100 px-4 py-2 text-sm font-medium text-amber-950 transition hover:bg-amber-200"
          >
            Админка
          </NavLink>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-stone-200 bg-white/70">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-6 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Креатив Маркет</p>
          <p>Технический фундамент публичной части проекта</p>
        </div>
      </footer>
    </div>
  )
}
