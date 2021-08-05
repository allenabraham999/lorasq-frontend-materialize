import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo} from './Data';
import Team from '../../Team/Team';
import HeroVideo from '../../HeroVideo';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroVideo />
      {/* <HeroSection {...homeObjThree} /> */}
      <HeroSection {...homeObjTwo} />
      <Team />
      {/* <HeroSection {...homeObjFour} /> */}
    </>
  );
}

export default Home;
