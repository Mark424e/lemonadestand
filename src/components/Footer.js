import React from 'react';
import '../output.css';
import logo from '../images/logo-grayscale.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub, faSquareFacebook, faTwitterSquare, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className='bg-cyan-800 text-white mt-10'>
      <div className='container mx-auto py-8 flex justify-center items-center'>
        <div className="flex gap-2 items-center w-full">
          <div className="h-[1px] w-full bg-white mx-4"></div>
            <ul className='flex gap-5 text-[2rem]'>
              <li><a href='https://github.com/Mark424e' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faSquareGithub} /></a></li>
              <li><a href='https://www.linkedin.com/in/markphillip1800/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li><button><FontAwesomeIcon icon={faSquareFacebook} /></button></li>
              <li><button><FontAwesomeIcon icon={faTwitterSquare} /></button></li>
              <li><button><FontAwesomeIcon icon={faSquareInstagram} /></button></li>
            </ul>
          <div className="h-[1px] w-full bg-white mx-4"></div>
        </div>
      </div>
      <div className='container mx-auto flex flex-col gap-2 justify-center items-center'>
        <img className='w-28 h-auto' src={logo} alt='logo'/>
        <p className='font-bold text-xs text-white/50'>Copyright &copy; 2024 Mark P. Thomassen
        </p>
      </div>
      <div className=' mx-auto py-8 flex justify-center items-center'>
        <ul className='flex gap-5 text-sm font-bold underline'>
          <li><a href='index.js'>Legal Stuff</a></li>
          <li><a href='index.js'>Privacy Policy</a></li>
          <li><a href='index.js'>Security</a></li>
          <li><a href='index.js'>Website Accessibility</a></li>
          <li><a href='index.js'>Manage Cookies</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
