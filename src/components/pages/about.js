import React from "react";
import Hero from "../Hero/Hero";
import Container from "../Container/Container";
import Row from "../Row/Row";
import Col from "../Col/Col";
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
              Hello, my name is Rayna Williams, I am twenty-seven years old and have lived in Colorado my entire life. I am very creative, passionate and strive to live my life to the fullest. I enjoy the great outdoors, especially golf because not only am I good at it, but I know that I am also challenging myself physically and mentally as well when playing. Growing up in Denver I have developed and matured, expanding my knowledge just as the city continues to expand its limits. I enjoy the music scene and culture this city has to offer. To sum it up, I am extremely excited to enter Denver's ever-expanding tech world!
            </p>
            <p>
              I graduated from Denver University's full-time Coding Boot Camp and received a Certificate in Full Stack Web Development. I enjoyed the fast pace and challenging material of the class. The self-taught learning and research helped me build my desire to create incredible apps and websites in my future careers. The reason I am here today trying to pursue a career as a Junior Web Developer is because my grandfather was a coder during his career working for banks across Colorado and has inspired me to join the family trade. I look up to him so much; he is the reason why I have become a coder and even the reason behind my passion for golf too.
            </p>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;