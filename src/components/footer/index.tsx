import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image';
import logoImage from '../../../public/images/logo-footer.png';
import {Poppins} from 'next/font/google'

const poppins = Poppins({
    weight: ['200', '400'],
    style: ['normal', 'normal'],
    subsets: ['latin'],
    display: 'swap',
  })

const Footer = () => {
  return (
    <footer className="footer">
      <div className={poppins.className}>
      <div className="footer__content">
        <div className="footer__left">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
        </div>
        <div className="footer__middle">
          <Image src={logoImage} alt="Logo" placeholder='blur'/>
        </div>
        <div className="footer__right">
          <a href="#">Link 3</a>
          <a href="#">Link 4</a>
        </div>
      </div>
      <div className="footer__social">
            <a href="#">
            <i id="social1" className="fa-brands fa-instagram fa-lg"></i>
            </a>
            <a href="#">
            <i id="social2" className="fa-brands fa-youtube fa-lg" ></i>
            </a>
      </div>
      <div className="footer__text">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
