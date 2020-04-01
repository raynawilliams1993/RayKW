import React from 'react'
import { Provider, Heading, Subhead } from 'rebass'
import {
  Hero, CallToAction, ScrollDownIndicator
} from 'react-landing-page'
 
const LandingPage = props => (
  <Provider>
    <Hero
      color="black"
      bg="white"
      backgroundImage="https://source.unsplash.com/jxaj-UrzQbc/1600x900"
    >
        <Heading>Rayna K. Williams</Heading>
        {/* <Subhead>use the navbar to explore</Subhead> */}
       
        
    </Hero>
  </Provider>
)
export default LandingPage;
