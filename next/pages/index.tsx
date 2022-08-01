import type { NextPage } from 'next'
import CallToAction from '../src/components/CallToAction/CallToAction'
import Paralax from '../src/components/ParalaxSection/Paralax';
import Splash from '../src/components/Splash/Splash'
import StackingCard from '../src/components/StackingCard/StackingCard';
import * as data from '../src/data/DataHome';


const Home: NextPage = () => {

  return (
    <main>
      <Splash />
      <CallToAction  {...data.ctaObjOne} />
      <StackingCard {...data.mainObjOne} />
      <StackingCard {...data.mainObjTwo} />
      <StackingCard {...data.mainObjThree} />
      <CallToAction  {...data.ctaObjTwo} />
      <Paralax />
    </main>
  )
}

export default Home
