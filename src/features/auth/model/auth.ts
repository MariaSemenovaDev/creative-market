import { STORAGE_KEYS } from '@/shared/config/storage-keys'

export const MOCK_ADMIN_EMAIL = 'admin@creative-market.ru'
export const MOCK_ADMIN_PASSWORD = 'admin123'

export interface AuthUser {
  email: string
  role: 'admin'
}

export function loginAdmin(email: string, password: string) {
  const normalizedEmail = email.trim().toLowerCase()

  if (
    normalizedEmail !== MOCK_ADMIN_EMAIL ||
    password !== MOCK_ADMIN_PASSWORD
  ) {
    return false
  }

  const authUser: AuthUser = {
    email: MOCK_ADMIN_EMAIL,
    role: 'admin',
  }

  localStorage.setItem(STORAGE_KEYS.authUser, JSON.stringify(authUser))

  return true
}

export function logoutAdmin() {
  localStorage.removeItem(STORAGE_KEYS.authUser)
}

export function getAuthUser(): AuthUser | null {
  const storedValue = localStorage.getItem(STORAGE_KEYS.authUser)

  if (!storedValue) {
    return null
  }

  try {
    const parsedValue = JSON.parse(storedValue) as Partial<AuthUser>

    if (parsedValue.role !== 'admin' || typeof parsedValue.email !== 'string') {
      return null
    }

    return {
      email: parsedValue.email,
      role: 'admin',
    }
  } catch {
    return null
  }
}

export function isAdminAuthenticated() {
  return getAuthUser() !== null
}
