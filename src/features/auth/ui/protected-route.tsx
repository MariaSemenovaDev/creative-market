import { Navigate, Outlet } from 'react-router-dom'

import { isAdminAuthenticated } from '@/features/auth/model/auth'
import { ROUTES } from '@/shared/config/routes'

export function ProtectedRoute() {
  if (!isAdminAuthenticated()) {
    return <Navigate to={ROUTES.adminLogin} replace />
  }

  return <Outlet />
}
