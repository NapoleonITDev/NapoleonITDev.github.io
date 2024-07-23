import React from 'react';
import { FaFacebook, FaTelegram } from 'react-icons/fa';
import './footer.css';


const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">
            <div className='footer__socials'>
                <a href='https://www.facebook.com/napoleon.it.dev/' className='home__social-link'>
                    <FaFacebook />
                </a>
                <a href='https://t.me/nikit34' className='home__social-link'>
                    <FaTelegram />
                </a>
            </div>
            <p className="footer__copyright text-cs">
                &copy; 2023 <span>Napoleon IT Dev</span>. All Rights Reserved
            </p>
            <p className="footer__copyright text-cs">
                Developed by <span>Nikita Permiakov</span>
            </p>
        </div>
    </footer>
  );
};

export default Footer;
