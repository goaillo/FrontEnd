import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/home';
import App from './app/App';
import AuthRequiredRoute from './service/requiredAuth';
import CreatePost from './pages/post/postCreate';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<App />}>
          <Route index element={<App />} />
        </Route>
        <Route path="/home" index element={
          <AuthRequiredRoute>
            <Home />
          </AuthRequiredRoute>
        } />
        <Route path="/post" index element={
          <AuthRequiredRoute>
            <CreatePost />
          </AuthRequiredRoute>
        } />
      </Routes>
    </BrowserRouter>
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
