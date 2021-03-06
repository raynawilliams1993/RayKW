
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
    <div class="diamond">
      <Card>
        <CardBody>
          <CardTitle style={{ color: "magenta" }}>Employee Directory</CardTitle>
          <CardSubtitle style={{ color: "magenta" }}>React Application</CardSubtitle>
        </CardBody>
        <CardImg src={pic} alt="EmployeeDir" height="100px" weight="100px" />
        <CardBody>
          <CardText style={{ color: "purple" }}>A simple Employee Directory System that allows the user to search by specific ID.</CardText>
          <ul>
            <li>
              <CardLink href=" https://github.com/raynawilliams1993/employeeDirectory" type="btn" class="btn-flat">Github</CardLink>

            </li>
            <li>
              <CardLink href=" https://dashboard.heroku.com/apps/secret-dawn-67450">Heroku</CardLink>

            </li>

          </ul>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectCard1;