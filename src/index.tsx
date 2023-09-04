import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/home';
import App from './app/App';
import AuthRequiredRoute from './service/requiredAuth';
import CreatePost from './pages/postCreate/postCreate';
import ErrorPage from './pages/404/404';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Navigate to="/home" replace={true} />
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: (
      <App />
    ),
  },
  {
    path: "/home",
    element: (
      <AuthRequiredRoute>
        <Home />
      </AuthRequiredRoute>
    ),
  },
  {
    path: "/post",
    element: (
      <AuthRequiredRoute>
        <CreatePost />
      </AuthRequiredRoute>
    ),
  },
]);


export default function AppRouter() {
  return (
    <RouterProvider router={router} />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(null);
