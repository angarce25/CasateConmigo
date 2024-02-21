import React from 'react';
import '../footer/footer.css';

import twitter from "../../../public/image/Twitter.png";
import instagram from "../../../public/image/Instagram.png";
import mail from "../../../public/image/mail.png";


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='p-footer'>
                <p className='contact'>Contacto</p>
                <p className='about-us'>Sobre Nosotros</p>
                <p>Copyrigth</p>
            </div>
            <div className='logo'>
                <img src={twitter} alt="Logo de twitter" />
                <img src={instagram} alt="Logo de instagram" />
                <img src={mail} alt="Icono de email" />
            </div>
        </footer>
    );
  }
  
  export default Footer;
