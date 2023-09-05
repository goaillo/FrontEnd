import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider, useParams } from 'react-router-dom'

import App from './app/App'
import ErrorPage from './pages/404/404'
import Home from './pages/home/home'
import CreatePost from './pages/postCreate/postCreate'
import ViewPost from './pages/postView/postView'
import AuthRequiredRoute from './service/requiredAuth'
import reportWebVitals from './reportWebVitals'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Navigate to="/home" replace={true} />
    ),
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: (
      <App />
    )
  },
  {
    path: '/home',
    element: (
      <AuthRequiredRoute>
        <Home />
      </AuthRequiredRoute>
    )
  },
  {
    path: '/post',
    element: (
      <AuthRequiredRoute>
        <CreatePost />
      </AuthRequiredRoute>
    )
  },
  {
    path: '/post/:id',
    Component () {
      const { id } = useParams()
      return (
        <AuthRequiredRoute>
          <ViewPost id={id}/>
        </AuthRequiredRoute>
      )
    }
  }
])

export default function AppRouter (): JSX.Element {
  return (
    <RouterProvider router={router} />
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(null)
