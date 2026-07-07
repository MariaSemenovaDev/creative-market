import { type ChangeEvent, type FormEvent, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import {
  MOCK_ADMIN_EMAIL,
  MOCK_ADMIN_PASSWORD,
  isAdminAuthenticated,
  loginAdmin,
} from '@/features/auth/model/auth'
import { ROUTES } from '@/shared/config/routes'

export function AdminLoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState(MOCK_ADMIN_EMAIL)
  const [password, setPassword] = useState(MOCK_ADMIN_PASSWORD)
  const [errorMessage, setErrorMessage] = useState('')

  if (isAdminAuthenticated()) {
    return <Navigate to={ROUTES.adminDashboard} replace />
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const isAuthorized = loginAdmin(email, password)

    if (!isAuthorized) {
      setErrorMessage('Неверный email или пароль.')
      return
    }

    setErrorMessage('')
    navigate(ROUTES.adminDashboard, { replace: true })
  }

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-md rounded-[32px] border border-stone-200 bg-white/90 p-8 shadow-sm backdrop-blur">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-amber-700">
          Admin
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-stone-900">
          Вход в админку
        </h1>
        <p className="mt-3 text-sm text-stone-600">
          Простая mock-авторизация для закрытой зоны проекта «Креатив Маркет».
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-stone-700">
              Email
            </span>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-900"
              placeholder="admin@creative-market.ru"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-stone-700">
              Пароль
            </span>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-900"
              placeholder="admin123"
            />
          </label>

          {errorMessage ? (
            <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {errorMessage}
            </p>
          ) : null}

          <button
            type="submit"
            className="w-full rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
          >
            Войти
          </button>
        </form>

        <div className="mt-8 rounded-2xl border border-stone-200 bg-stone-50 px-4 py-4 text-sm text-stone-600">
          <p className="font-medium text-stone-800">Demo-доступ</p>
          <p className="mt-2">email: {MOCK_ADMIN_EMAIL}</p>
          <p>password: {MOCK_ADMIN_PASSWORD}</p>
        </div>
      </div>
    </main>
  )
}
