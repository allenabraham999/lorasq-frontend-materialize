import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          For any queries or difficulties contact
        </p>
        <p className='footer-subscription-text'>
          lorasq2021@gmail.com
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Send</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2 id="footer1">About Us</h2>
            <Link to='/sign-up' id="footer2">How it works</Link>
            <Link to='/' id="footer2">Our Team</Link>
            <Link to='/' id="footer2">About LoRaWAN</Link>
           
          </div>
          <div className='footer-link-items'>
            <h2 id="footer1">Contact Us</h2>
            <Link to='/' id="footer2">Email</Link>
            <Link to='/' id="footer2">Phone</Link> 
            <Link to='/' id="footer2">Drop a msg</Link>

         
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2 id="footer1">Content</h2>
            <Link to='/' id="footer2">Demo Video</Link>
            <Link to='/' id="footer2">Documentation</Link>
            <Link to='/' id="footer2">Source Code</Link>
            
          </div>
          <div className='footer-link-items'>
            <h2 id="footer1">Social Media</h2>
            <Link to='/' id="footer2">Instagram</Link>
            <Link to='/' id="footer2">Facebook</Link>
            <Link to='/' id="footer2">Youtube</Link>
        
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdFingerprint className='navbar-icon' />
              LoRasQ
            </Link>
          </div>
          <small className='website-rights'>LoRasQ © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
