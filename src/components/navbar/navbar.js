import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navi = (props) => {
  return (
    <div>
     
      <p>Link Based</p>
      <Nav>
        <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
      </Nav>
    </div>
  );
}

export default Navi;