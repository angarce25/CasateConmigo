import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            {/* Logo */}
            <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
          </div>
          <div className="hidden sm:block">
            {/* Espacio para botones adicionales (si es necesario) */}
          </div>
          <div>
            {/* Botón de sugerencias */}
            <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200">
              Sugerencias
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

