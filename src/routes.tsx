import { RouteObject } from 'react-router-dom'
import About from './pages/About'
import Guest from './pages/layouts/Guest'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import AppLayout from './pages/layouts/AppLayout'
import Dashboard from './pages/Dashboard'

export const routes: RouteObject[] = [
  {
    path: '',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ]
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/auth',
    element: <Guest />,
    children: [
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      }
    ],
  }
]
