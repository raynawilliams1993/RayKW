import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import pic from "../assets/fitness.png"



const ProjectCard2 = (props) => {
  return (
    <div class="diamond">
      <Card>
        <CardBody>
          <CardTitle>Fitness Tracker</CardTitle>
          <CardSubtitle>MongoDB Application</CardSubtitle>
        </CardBody>
        <CardImg  src={pic} alt="fitness" height="100px" weight="100px"  />
        <CardBody>
          <CardText> A daily fitness log that is able to track the name, type, weight, sets, reps, and duration of the specific exercise.</CardText>
          <CardLink href="https://github.com/raynawilliams1993/fitnessTracker">Github</CardLink>
          <CardLink href=" https://agile-sands-15513.herokuapp.com/exercise?id=5e4b0f904df7e300171b940d">Heroku</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectCard2;