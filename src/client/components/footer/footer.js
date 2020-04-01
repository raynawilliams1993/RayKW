import React from "react";
import "./style.css"

import {Container, Row, Col } from "reactstrap";

function Footer(){
    return(
        <footer id="mainFooter" className="at-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}> 
                     PORTFOLIO
                     
                    </Col>
    
                    <Col className="p-0 d-flex justify-content-end " md="3">
                    Author: Rayna K. Williams
                    </Col>
                </Row>
            </Container>
        </footer>

    );

}

export default Footer;