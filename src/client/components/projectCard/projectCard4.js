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
          <CardTitle style={{ color: "magenta" }}>Bored in Denver</CardTitle>
          <CardSubtitle style={{ color: "magenta" }} >Server Side Api</CardSubtitle>
        </CardBody>
        <CardImg src={pic} alt="Project01" height="100px" weight="100px" />

        <CardBody>
          <CardText style={{ color: "purple" }}> Using a Ticketmaster API pulls information about certain events. Ajax calls data for a specified date. The Google API used the Routes API, from the Google Maps Platform.</CardText>
          <ul>
            <li>
              <CardLink href="https://github.com/7thact/Project01">Github Repo</CardLink>

            </li>
            <li>
              <CardLink href="https://7thact.github.io/Project01/">Github Site</CardLink>

            </li>
          </ul>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectCard4;