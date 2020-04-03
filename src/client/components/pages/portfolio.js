import React from "react";
import Hero from "../hero/hero";
import {
    Navbar
} from 'reactstrap';
import ProjectCard1 from "../projectCard/projectCard1";
import ProjectCard2 from "../projectCard/projectCard2";
import ProjectCard3 from "../projectCard/projectCard3";
import ProjectCard4 from "../projectCard/projectCard4";
// import ProjectCard5 from "../projectCard/projectCard5";




function Portfolio() {
    return (
        <div>
            <Navbar />
            <Hero backgroundImage="https://images.wallpaperscraft.com/image/cosmonaut_astronaut_space_suit_137404_3840x2160.jpg">
                <h1>Rayna K. Williams</h1>
                <h2>Full Stack Web Developer</h2>
            </Hero>
            <div>
                <ProjectCard1 />
                <ProjectCard2 />
                <ProjectCard3 />
                <ProjectCard4 />
                {/* <ProjectCard5 /> */}
            </div>
        </div>
    )
}
export default Portfolio;