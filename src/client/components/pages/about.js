import React from "react";
import Hero from "../hero/hero";
import Container from "../container/container";
import Row from "../row/row";
import Col from "../col/col";
import { Nav } from "reactstrap";

function About() {
  return (
    <div>
      <Nav />
      <Hero backgroundImage="https://images.wallpaperscraft.com/image/cosmonaut_space_suit_multicolored_123724_3840x2160.jpg">
        <h1>Rayna K. Williams</h1>
        <h2> Full Stack Web Developer</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Backend Web Developer and QA Specialist for Amazon with a strong background in management and communication skills with the ability to problem-solve across various work environments. Earned a certificate in Full Stack Web Development from the University of Denver.
        </p>
            <p>
              Hello, my name is Rayna Williams, I am twenty-seven years old and have lived in Colorado my entire life. I am very creative, passionate and strive to live my life to the fullest. I enjoy the great outdoors, especially golf because not only am I good at it, but I know that I am also challenging myself physically and mentally as well when playing. Growing up in Denver I have developed and matured, expanding my knowledge just as the city continues to expand its limits. I enjoy the music scene and culture this city has to offer. To sum it up, I am extremely excited to enter Denver's ever-expanding tech world!
            </p>
            

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;