import { Link } from 'react-router-dom'

import { ROUTES } from '@/shared/config/routes'

export function NotFoundPage() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-[var(--surface-page)] px-6 py-16">
      <div className="w-full max-w-2xl border border-[var(--line-strong)] bg-[var(--surface-muted)] p-10 sm:p-14">
        <p className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-warm-brown)]">
          404
        </p>
        <h1 className="mt-5 font-[var(--font-display)] text-5xl font-medium tracking-[-0.06em] text-[var(--color-brand-blue-deep)] sm:text-6xl">
          Страница не найдена
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-[var(--color-ink)]">
          Маршрут существует в приложении как заглушка, но этот конкретный адрес
          не найден.
        </p>
        <div className="mt-8 h-px w-full bg-[var(--line-soft)]" />
        <Link
          to={ROUTES.home}
          className="mt-8 inline-flex items-center gap-3 border border-[var(--line-strong)] bg-[var(--color-paper)] px-5 py-4 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-brand-blue-deep)] transition hover:border-[var(--color-brand-blue)]"
        >
          <span className="h-2.5 w-2.5 bg-[var(--color-brand-blue)]" />
          Вернуться на главную
        </Link>
      </div>
    </main>
  )
}
