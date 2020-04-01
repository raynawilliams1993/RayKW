import React from 'react'
import { Provider, Heading, Subhead } from 'rebass'
import {
  Hero, CallToAction, ScrollDownIndicator
} from 'react-landing-page'
 
const LandingPage = props => (
  <Provider>
    <Hero
      color="white"
    //   bg="white"
       
      backgroundImage="https://images.wallpaperscraft.com/image/paint_stains_mixing_140283_1280x720.jpg"
    >
        <Heading>Rayna K. Williams</Heading>
        {/* <Subhead>use the navbar to explore</Subhead> */}
       
        
    </Hero>
  </Provider>
)
export default LandingPage;
