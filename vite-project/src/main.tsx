import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import 'animate.css';

// Création du router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/skills",
    element: <div className=''>Skills</div>,
  },
  {
    path: "/contact",
    element: <div>Contact</div>,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
