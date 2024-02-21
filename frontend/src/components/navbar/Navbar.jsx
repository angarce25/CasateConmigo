import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const navbarStyle = {
        backgroundColor: '#E8F3F3',
        padding: '5px 0',
    };

    const logoStyle = {
        maxWidth: '60px', // Define el ancho máximo del logo
        maxHeight: 'auto', // Mantén la relación de aspecto
    };

    return (
        <nav className="navbar navbar-expand-md border-bottom mb-3" style={navbarStyle}>
            <div className="container">
              
                    <div >   
                         <NavLink to="/"><img className="logoStyle" src="../../img/logoCasateConmigo1.png" alt="logo anillo" style={logoStyle} /></NavLink>
                    </div>
                    <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <NavLink className="nav-link text-secondary" to="/" activeClassName="text-dark">Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-secondary" to="/contact" activeClassName="text-dark">Contacto</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-secondary" to="/favorites" activeClassName="text-dark">Favoritos</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;