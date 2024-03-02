import React from 'react';
import '../output.css'; // Import CSS file

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
      <footer className='relative bg-gradient-to-tr from-primary via-primary to-cyan-200 text-white mt-10 h-[82vh]'>
        <div className='container mx-auto py-8'>
          <div className='flex justify-between items-center'>
            <p>
              Stay connected with me on social networks!
            </p>
            <ul className='flex gap-4 text-[2rem]'>
              <li className='social-item'><a href='https://github.com/Mark424e' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faSquareGithub} /></a></li>
              <li className='social-item'><a href='https://www.linkedin.com/in/markphillip1800/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a></li>
            </ul>
          </div>
        </div>
        <div className='absolute bg-cyan-800/40 py-4 w-full bottom-0'>
          <div className="text-center">
            <p>&copy; 2024 Copyright: <a className='' href='https://www.linkedin.com/in/markphillip1800/' target='_blank' rel='noreferrer'>Mark P. Thomassen</a></p>
          </div>
        </div>
      </footer>
  );
}

export default Footer;
