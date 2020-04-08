import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import pic from "../assets/burger.png"
import "./project.scss";


const ProjectCard3 = (props) => {
  return (
    <div class="diamond">
      <Card>
        <CardBody>
          <CardTitle style={{color: "magenta"}}>Burger Eater</CardTitle>
          <CardSubtitle style={{color: "magenta"}}>Node Express Handlebars</CardSubtitle>
        </CardBody>
        <CardImg  src={pic} alt="burger" height="100px" weight="100px" />
        <CardBody>
          <CardText style={{color: "purple"}}>a burger log in app with MySQL, Node, Express, Handlebars and ORMS. </CardText>
          <CardLink href="https://github.com/raynawilliams1993/burger">Github</CardLink>
          <CardLink href=" https://eatingburgers2424.herokuapp.com/">Heroku</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectCard3;