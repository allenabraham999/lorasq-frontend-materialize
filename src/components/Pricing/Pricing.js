import React from 'react';
import './Pricing.css';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import image1 from './team_images/man1f.png'
import image2 from './team_images/man2f.png'


function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading' >Team Members</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div>
                  <img src={image1} alt="" style={{ borderRadius: '10%' }} />
                </div>
                <h3>Amith Tony</h3>
                <ul className='pricing__container-features'>
                <li>100 Transactions</li>

                </ul>

              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
              <div>
                  <img src={image2} alt="" style={{ borderRadius: '10%' }} />
                </div>
                <h3>Allen Alex</h3>
                <ul className='pricing__container-features'>
                <li>100 Transactions</li>

                </ul>


              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
              <div>
                  <img src={image1} alt="" style={{ borderRadius: '10%' }} />
                </div>
                <h3>Bharath S</h3>
                <ul className='pricing__container-features'>
                <li>100 Transactions</li>

                </ul>

              </div>
            </Link>

            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo' >
              <div>
                  <img src={image2} alt="" style={{ borderRadius: '10%' }} />
                </div>
                <h3>Gouri Krishna</h3>
                <ul className='pricing__container-features'>
                <li>100 Transactions</li>

                </ul>


              </div>
            </Link>

          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
