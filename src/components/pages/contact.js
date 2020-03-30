import React from "react";
import { Nav } from "reactstrap";
import Hero from "../hero/hero";
import Footer from "../footer/footer";



function Contact() {
    return (
        <div>
        <Nav />
        <Hero backgroundImage="https://images.wallpaperscraft.com/image/cosmonaut_space_suit_multicolored_123724_3840x2160.jpg">
          <h1>Rayna K. Williams</h1>
          <h2> Full Stack Web Developer</h2>
        </Hero>
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label for="message">Message</label>
                <textarea className="form-control" rows="5" id="message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <Footer/>
        </div>
    );
}

export default Contact;