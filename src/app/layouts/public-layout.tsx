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
    <div className="min-h-screen bg-[var(--surface-page)] text-[var(--color-ink)]">
      <header className="sticky top-0 z-50 border-b border-[var(--line-soft)] bg-[rgba(251,247,239,0.94)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-3 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex items-start gap-4">
            <span className="mt-1 h-3 w-3 bg-[var(--color-brand-blue)]" />
            <div>
              <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-warm-brown)]">
                Ростов-на-Дону / handmade market
              </p>
              <NavLink
                to={ROUTES.home}
                end
                className="mt-1 block font-[var(--font-display)] text-2xl font-medium tracking-[-0.06em] text-[var(--color-brand-blue-deep)] sm:text-3xl"
              >
                Креатив Маркет
              </NavLink>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            <nav className="flex flex-wrap gap-x-6 gap-y-3 lg:gap-x-8 xl:gap-x-10">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `group relative inline-grid whitespace-nowrap pb-1 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] transition ${
                      isActive
                        ? 'text-[var(--color-brand-blue-deep)]'
                        : 'text-[var(--color-ink)] hover:text-[var(--color-brand-blue)]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        aria-hidden="true"
                        className="invisible block text-center font-semibold tracking-[4px]"
                      >
                        {link.label}
                      </span>
                      <span
                        className={`absolute left-1/2 top-0 z-10 inline-block -translate-x-1/2 text-center transition-all duration-500 ease-out ${
                          isActive
                            ? 'translate-y-[-1px] scale-[1.03] font-semibold tracking-[4px]'
                            : 'group-hover:translate-y-[-1px] group-hover:font-semibold group-hover:tracking-[4px]'
                        }`}
                      >
                        {link.label}
                      </span>
                      <span
                        className={`absolute bottom-0 left-0 h-px origin-center bg-[var(--color-brand-blue)] transition-transform duration-500 ease-out ${
                          isActive
                            ? 'w-full scale-x-100'
                            : 'w-full scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-[var(--line-soft)] bg-[var(--surface-page)]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-[var(--font-display)] text-2xl tracking-[-0.06em] text-[var(--color-brand-blue-deep)]">
              Креатив Маркет
            </p>
            <p className="mt-2 max-w-xl font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-warm-brown)]">
              Цифровая афиша локального handmade-пространства, где каталог и
              история бренда живут в одном интерфейсе.
            </p>
          </div>
          <div className="text-sm text-[var(--color-ink)]">
            <p>Ростов-на-Дону</p>
            <p className="mt-1 text-[var(--color-warm-brown)]">Пушкинская, 80</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
