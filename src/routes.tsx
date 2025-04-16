import { RouteObject } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Guest from './pages/layouts/Guest'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login' 

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/auth',
    element: <Guest/>,
    children: [
      {
        path: 'register',
        element: <Register/>,
      },
      {
        path: 'login',
        element: <Login/>,
      }
    ],
  }
]
