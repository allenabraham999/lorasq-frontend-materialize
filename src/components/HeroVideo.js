import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player/youtube'

function HeroVideo() {
  return (
    <>
      <div
        className='home__hero-section' 
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: 'row-reverse',
            }}
          >
            <div className='col' style={{ paddingLeft: '150px',paddingTop: '50px'}}>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>The Motive behind LORASQ</div>
                <h1 className='heading dark'>
                  2018 Kerala Floods
                </h1>
                <p
                  className='home__hero-subtitle dark'
                  
                >
         On 16 August 2018, Kerala faced the worst flood in nearly a century.Over 483 people died, and 140 went missing. About a million people were evacuated and mainly from All 14 districts of the state were placed on red alert.According to the Kerala government, one-sixth of the total population of Kerala had been directly affected by the floods and related incidents.


                </p>
                <a href="https://en.wikipedia.org/wiki/2018_Kerala_floods">
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                   More
                  </Button>
                </a>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
              <ReactPlayer url='https://www.youtube.com/watch?v=-kHEI_76Bnc' controls height="360px" width="600px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroVideo;
