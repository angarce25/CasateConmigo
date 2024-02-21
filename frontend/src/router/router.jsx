import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar'; // Importa tu componente Navbar
import Footer from '../components/footer/Footer'; // Importa tu componente Footer

// Crea el objeto de ruta utilizando createBrowserRouter
export const router = createBrowserRouter([
  {
    path: '/', // Define la ruta para el Navbar
    element: <Navbar />, // Asigna tu componente Navbar al elemento
  },
  {
    path: '/footer', // Define la ruta para el Footer
    element: <Footer />, // Asigna tu componente Footer al elemento
  },
]);

export default router;
