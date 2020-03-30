import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import "./style.css"
const Navi = (props) => {
  return (
    <div>
     
   <h1>Explore</h1>
      <Nav>
        <NavLink type="button-toggle" href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
      </Nav>
    </div>
  );
}

export default Navi;