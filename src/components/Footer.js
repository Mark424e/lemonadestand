import React from 'react';
import '../output.css'; // Import CSS file

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
      <footer className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white mt-10'>
        <div className='container mx-auto py-8'>
          <div className='flex justify-between items-center'>
            <p>
              Stay connected with me on social networks!
            </p>
            <ul className='flex gap-4 text-[2rem]'>
              <li className='social-item'><a href='index.js'><FontAwesomeIcon icon={faSquareGithub} /></a></li>
              <li className='social-item'><a href='index.js'><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li className='social-item'><a href='index.js'><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
            </ul>
          </div>
        </div>
        <div className='bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-4'>
          <div className="text-center">
            <p>&copy; 2024 Copyright: <a className='' href='https://www.linkedin.com/in/markphillip1800/' target='_blank' rel='noreferrer'>Mark P. Thomassen</a></p>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
