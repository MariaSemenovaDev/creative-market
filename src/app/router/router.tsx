import { createBrowserRouter } from 'react-router-dom'

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
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: ROUTES.catalog,
    element: <CatalogPage />,
  },
  {
    path: ROUTES.product,
    element: <ProductPage />,
  },
  {
    path: ROUTES.masters,
    element: <MastersPage />,
  },
  {
    path: ROUTES.master,
    element: <MasterPage />,
  },
  {
    path: ROUTES.shelves,
    element: <ShelvesPage />,
  },
  {
    path: ROUTES.giftQuiz,
    element: <GiftQuizPage />,
  },
  {
    path: ROUTES.rentShelf,
    element: <RentShelfPage />,
  },
  {
    path: ROUTES.events,
    element: <EventsPage />,
  },
  {
    path: ROUTES.favorites,
    element: <FavoritesPage />,
  },
  {
    path: ROUTES.adminLogin,
    element: <AdminLoginPage />,
  },
  {
    path: ROUTES.adminDashboard,
    element: <AdminDashboardPage />,
  },
  {
    path: ROUTES.adminProducts,
    element: <AdminProductsPage />,
  },
  {
    path: ROUTES.adminMasters,
    element: <AdminMastersPage />,
  },
  {
    path: ROUTES.adminShelves,
    element: <AdminShelvesPage />,
  },
  {
    path: ROUTES.adminApplications,
    element: <AdminApplicationsPage />,
  },
  {
    path: ROUTES.adminBookings,
    element: <AdminBookingsPage />,
  },
  {
    path: ROUTES.adminEvents,
    element: <AdminEventsPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
