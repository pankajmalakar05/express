import React from 'react'
import Hero from '../component/Hero';
import TrackShipment from '../component/TrackShipment';
import About from './About';
import WorkProcess from '../component/WorkProcess';
import ChooseUs from '../component/Chooseus';
import Industry from '../component/Industry';



const Home = () => {
  return (
    <div>
      <Hero/>
      <TrackShipment/>
      <About/>
      <WorkProcess/>
      <ChooseUs/>
      <Industry/>
    </div>
  )
}

export default Home
