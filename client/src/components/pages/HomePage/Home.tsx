import React from 'react';
import CtaSection from '../../CtaSection';
import LandingSection from '../../LandingSection';
import MainSection from '../../MainSection';
import ParalaxSection from '../../ParalaxSection';
import * as data from './Data';

function Home() {
  return (
    <main>
      <LandingSection />
      <CtaSection {...data.ctaObjOne}/>
      <MainSection {...data.mainObjOne}/>
      <MainSection {...data.mainObjTwo}/>
      <MainSection {...data.mainObjThree}/>
      <CtaSection {...data.ctaObjTwo}/>
      <ParalaxSection />
    </main>
  )
}

export default Home
