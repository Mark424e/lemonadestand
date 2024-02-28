import React from 'react';
import './Footer.css'; // Import CSS file

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
      <footer>
        <div className='footer-container'>
          <p>
            Stay connected with me on social networks!
          </p>
          <ul className='footer-social-list'>
            <li className='social-item'><a href='index.js'><FontAwesomeIcon icon={faSquareGithub} /></a></li>
            <li className='social-item'><a href='index.js'><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li className='social-item'><a href='index.js'><FontAwesomeIcon icon={faFacebookSquare} /></a></li>
          </ul>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2024 Copyright: <a className='' href='https://www.linkedin.com/in/markphillip1800/' target='_blank' rel='noreferrer'>Mark P. Thomassen</a></p>
        </div>
      </footer>
  );
}

export default Footer;
