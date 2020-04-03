
import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
//import "../assets/EmployeeDir.png"
import pic from "../assets/EmployeeDir.png"
// import "./style.css"

const ProjectCard1 = (props) => {
  return (
    <div class= "diamond">
      <Card>
        <CardBody>
          <CardTitle>Employee Directory</CardTitle>
          <CardSubtitle>React Application</CardSubtitle>
        </CardBody>
        <CardImg  src={pic} alt="EmployeeDir" height="100px" weight="100px" />
        <CardBody>
          <CardText>A simple Employee Directory System that allows the user to search by specific ID.</CardText>
          <CardLink href=" https://github.com/raynawilliams1993/employeeDirectory"  type="btn"class="btn-flat">Github</CardLink>
          <CardLink href=" https://dashboard.heroku.com/apps/secret-dawn-67450">Heroku</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectCard1;