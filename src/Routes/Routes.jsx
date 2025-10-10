import { createBrowserRouter } from 'react-router'
import Home from '../Pages/Home'
import Apps from '../Pages/Apps'
import Installation from '../Pages/Installation'
import Error from '../Pages/Error'
import AppDetails from '../Pages/AppDetails'
import { Suspense, lazy } from 'react'
import LoadingSpinner from '../Components/LoadingSpinner'
const MainLayout = lazy(() => import('../Layouts/MainLayout'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <MainLayout></MainLayout>
      </Suspense>
    ),
    hydrateFallbackElement: <LoadingSpinner />,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/apps',
        element: <Apps></Apps>,
      },
      {
        path: '/installation',
        element: <Installation></Installation>,
      },
      {
        path: '/app/:id',
        element: <AppDetails></AppDetails>,
      },
    ],
  },
])

export default router
