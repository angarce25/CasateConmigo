import React from 'react';

import { NavLink } from 'react-router-dom';

import twitter from "../../../public/img/Twitter.png";
import instagram from "../../../public/img/Instagram.png";
import mail from "../../../public/img/mail.png";

function Footer() {
    return (
        <footer className='footer'>
            <div className='p-footer'>
                <NavLink to="/contact" className='footer-link footer-text'>Contacto</NavLink>
                <NavLink to="/about" className='footer-link footer-text'>Sobre Nosotros</NavLink>
                <p className='footer-text'>Copyrigth</p>
            </div>
            <div className='logo'>
                <NavLink to="https://twitter.com/" className='social-link'><img src={twitter} alt="Logo de twitter" className='social-logo' /></NavLink>
                <NavLink to="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2F" className='social-link'><img src={instagram} alt="Logo de instagram" className='social-logo' /></NavLink>
                <NavLink to="mailto:tu-correo@gmail.com" className='social-link' ><img src={mail} alt="Icono de email" className='social-logo' /></NavLink>
            </div>
        </footer>
    );
}
  
export default Footer;