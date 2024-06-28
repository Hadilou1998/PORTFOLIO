import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'animate.css';
import Home from './pages/Home.tsx';
import Skills from './pages/Skills.tsx';
import Contact from './pages/Contact.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// Création du router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/contact",
    element: <Contact />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
