import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import pic from "../assets/Project1.png"
import "./project.scss";

const ProjectCard4 = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Bored in Denver</CardTitle>
          <CardSubtitle>Server Side Api</CardSubtitle>
        </CardBody>
        <CardImg  src={pic} alt="Project01" height="100px" weight="100px" />

        <CardBody>
          <CardText> Using a Ticketmaster API pulls information about certain events. Ajax calls data for a specified date. The Google API used the Routes API, from the Google Maps Platform.</CardText>
          <CardLink href="https://github.com/7thact/Project01">Github Repo</CardLink>
          <CardLink href="https://7thact.github.io/Project01/">Github Site</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectCard4;