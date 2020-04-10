import React from 'react';
import { Nav, NavLink } from 'reactstrap';
import "./style.css"
const Navi = (props) => {
  return (
    <div>
     
   <h1 >Welcome!</h1>
      <Nav>
        <NavLink type="button-toggle" href="/about">About Me</NavLink> <NavLink href="/contact">Contact</NavLink> <NavLink href="/portfolio">Portfolio</NavLink> 
      </Nav>
    </div>
  );
}

export default Navi;