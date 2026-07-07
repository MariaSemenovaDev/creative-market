import { Link } from 'react-router-dom'

import { ROUTES } from '@/shared/config/routes'

export function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl rounded-[32px] border border-stone-200 bg-white/80 p-10 shadow-sm backdrop-blur">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900">
          Страница не найдена
        </h1>
        <p className="mt-4 text-base text-stone-600">
          Маршрут существует в приложении как заглушка, но этот конкретный адрес
          не найден.
        </p>
        <Link
          to={ROUTES.home}
          className="mt-8 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
        >
          Вернуться на главную
        </Link>
      </div>
    </main>
  )
}
