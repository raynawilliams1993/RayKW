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
        <Subhead>Email: raynawilliams123@gmail.com </Subhead>
        <Subhead> GitHub: https://github.com/raynawilliams1993 </Subhead>
        <Subhead>LinkedIn: https://www.linkedin.com/in/rayna-williams-225965191/ </Subhead>
        <Subhead> Resume: https://docs.google.com/document/d/1VGxJrZkq4Ok5W4felziz_abvuS-3lW55m7eYnVMsTI0/edit?usp=sharing </Subhead>
        
    </Hero>
  </Provider>
)
export default LandingPage;
