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

      backgroundImage="https://images.wallpaperscraft.com/image/earth_moon_space_galaxy_118437_1280x720.jpg"
    >
      <Heading>Rayna K. Williams</Heading>

      <Subhead>Email: raynawilliams123@gmail.com </Subhead>




    </Hero>
  </Provider>
)
export default LandingPage;
