import { createBrowserRouter } from 'react-router-dom'

import { AdminLayout } from '@/app/layouts/admin-layout'
import { PublicLayout } from '@/app/layouts/public-layout'
import { ProtectedRoute } from '@/features/auth/ui/protected-route'
import { AdminApplicationsPage } from '@/pages/admin/admin-applications-page'
import { AdminBookingsPage } from '@/pages/admin/admin-bookings-page'
import { AdminDashboardPage } from '@/pages/admin/admin-dashboard-page'
import { AdminEventsPage } from '@/pages/admin/admin-events-page'
import { AdminLoginPage } from '@/pages/admin/admin-login-page'
import { AdminMastersPage } from '@/pages/admin/admin-masters-page'
import { AdminProductsPage } from '@/pages/admin/admin-products-page'
import { AdminShelvesPage } from '@/pages/admin/admin-shelves-page'
import { CatalogPage } from '@/pages/public/catalog-page'
import { EventsPage } from '@/pages/public/events-page'
import { FavoritesPage } from '@/pages/public/favorites-page'
import { GiftQuizPage } from '@/pages/public/gift-quiz-page'
import { HomePage } from '@/pages/public/home-page'
import { MasterPage } from '@/pages/public/master-page'
import { MastersPage } from '@/pages/public/masters-page'
import { NotFoundPage } from '@/pages/public/not-found-page'
import { ProductPage } from '@/pages/public/product-page'
import { RentShelfPage } from '@/pages/public/rent-shelf-page'
import { ShelvesPage } from '@/pages/public/shelves-page'
import { ROUTES } from '@/shared/config/routes'

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <PublicLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.catalog.slice(1),
        element: <CatalogPage />,
      },
      {
        path: ROUTES.product.slice(1),
        element: <ProductPage />,
      },
      {
        path: ROUTES.masters.slice(1),
        element: <MastersPage />,
      },
      {
        path: ROUTES.master.slice(1),
        element: <MasterPage />,
      },
      {
        path: ROUTES.shelves.slice(1),
        element: <ShelvesPage />,
      },
      {
        path: ROUTES.giftQuiz.slice(1),
        element: <GiftQuizPage />,
      },
      {
        path: ROUTES.rentShelf.slice(1),
        element: <RentShelfPage />,
      },
      {
        path: ROUTES.events.slice(1),
        element: <EventsPage />,
      },
      {
        path: ROUTES.favorites.slice(1),
        element: <FavoritesPage />,
      },
    ],
  },
  {
    path: ROUTES.adminLogin,
    element: <AdminLoginPage />,
  },
  {
    path: ROUTES.adminDashboard,
    element: <ProtectedRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <AdminDashboardPage />,
          },
          {
            path: 'products',
            element: <AdminProductsPage />,
          },
          {
            path: 'masters',
            element: <AdminMastersPage />,
          },
          {
            path: 'shelves',
            element: <AdminShelvesPage />,
          },
          {
            path: 'applications',
            element: <AdminApplicationsPage />,
          },
          {
            path: 'bookings',
            element: <AdminBookingsPage />,
          },
          {
            path: 'events',
            element: <AdminEventsPage />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
