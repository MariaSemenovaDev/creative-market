import { NavLink, Outlet, useNavigate } from 'react-router-dom'

import { logoutAdmin } from '@/features/auth/model/auth'
import { ROUTES } from '@/shared/config/routes'

interface NavigationLink {
  to: string
  label: string
  end?: boolean
}

const navigationLinks = [
  { to: ROUTES.adminDashboard, label: 'Dashboard', end: true },
  { to: ROUTES.adminProducts, label: 'Товары' },
  { to: ROUTES.adminMasters, label: 'Мастера' },
  { to: ROUTES.adminShelves, label: 'Полки' },
  { to: ROUTES.adminApplications, label: 'Заявки' },
  { to: ROUTES.adminBookings, label: 'Брони' },
  { to: ROUTES.adminEvents, label: 'События' },
] satisfies NavigationLink[]

export function AdminLayout() {
  const navigate = useNavigate()

  const handleLogout = () => {
    logoutAdmin()
    navigate(ROUTES.adminLogin, { replace: true })
  }

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <div className="mx-auto grid min-h-screen w-full max-w-7xl lg:grid-cols-[280px_1fr]">
        <aside className="border-b border-stone-800 bg-stone-900/90 px-6 py-8 lg:border-r lg:border-b-0">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-amber-400">
              Admin
            </p>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight">
              Креатив Маркет Admin
            </h1>
          </div>

          <nav className="mt-8 flex flex-col gap-2">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? 'bg-amber-300 text-stone-950'
                      : 'text-stone-300 hover:bg-stone-800 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <div className="flex min-h-screen flex-col">
          <header className="flex items-center justify-between border-b border-stone-800 bg-stone-950/90 px-6 py-5 backdrop-blur">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
                Закрытая зона
              </p>
              <p className="mt-1 text-sm text-stone-400">
                Управление контентом проекта без backend
              </p>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="rounded-full border border-stone-700 px-4 py-2 text-sm font-medium text-stone-100 transition hover:border-amber-300 hover:text-amber-200"
            >
              Logout
            </button>
          </header>

          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
