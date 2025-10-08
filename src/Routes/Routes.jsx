import { createBrowserRouter } from 'react-router'
import Home from '../Pages/Home'
import Apps from '../Pages/Apps'
import Installation from '../Pages/Installation'
import MainLayout from '../Layouts/MainLayout'
import Error from '../Pages/Error'

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
        loader: ()=> fetch('./AppsList.json'),
      },
      {
        path: '/apps',
        element: <Apps></Apps>,
      },
      {
        path: '/installation',
        element: <Installation></Installation>,
      },
    ],
  },
])

export default router
