import { createBrowserRouter } from 'react-router'
import Home from '../Pages/Home'
import Apps from '../Pages/Apps'
import Installation from '../Pages/Installation'
import MainLayout from '../Layouts/MainLayout'
import Error from '../Pages/Error'
import AppDetails from '../Pages/AppDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    hydrateFallbackElement: <p>Loading...</p>,
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
        element: <AppDetails></AppDetails>
      }
    ],
  },
])

export default router
