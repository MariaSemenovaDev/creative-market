import { createBrowserRouter } from 'react-router-dom'

import { PublicLayout } from '@/app/layouts/public-layout'
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

export const router = createBrowserRouter(
  [
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
      path: '*',
      element: <NotFoundPage />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
)
