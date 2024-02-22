import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    border: '2px solid green',
    padding: '10px 20px', // Ajusta el padding según tu preferencia
  };

  const logoContainerStyle = {
    // Puedes ajustar el tamaño y margen del logo según sea necesario
  };

  const logoStyle = {
    maxWidth: '100px', // Ajusta el tamaño máximo del logo
  };

  const favoritesContainerStyle = {
    // Puedes ajustar el espacio y margen del botón de favoritos según sea necesario
  };

  const favoritesButtonStyle = {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    padding: '10px 20px', // Ajusta el padding según tu preferencia
    cursor: 'pointer',
    borderRadius: '5px',
  };

  const favoritesButtonHoverStyle = {
    backgroundColor: 'darkgreen', // Cambia el color al pasar el cursor sobre el botón
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoContainerStyle}>

      <NavLink to="/"><img src="../../img/logoCasateConmigo1.png" alt="Logo" style={logoStyle} /></NavLink>

        <img src="/path/to/your/logo.png" alt="Logo" style={logoStyle} />

      </div>
      <div style={favoritesContainerStyle}>
        <button style={favoritesButtonStyle}>Favoritos</button>
      </div>
    </nav>
  );
}

export default Navbar;
