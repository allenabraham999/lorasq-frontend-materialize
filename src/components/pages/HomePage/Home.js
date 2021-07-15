import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data';
import Pricing from '../../Pricing/Pricing';
import HeroVideo from '../../HeroVideo';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroVideo />
      {/* <HeroSection {...homeObjThree} /> */}
      <HeroSection {...homeObjTwo} />
      <Pricing />
      {/* <HeroSection {...homeObjFour} /> */}
    </>
  );
}

export default Home;
