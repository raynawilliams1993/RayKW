import React from 'react';
import './contact.scss';
// import axios from 'axios';
// import Spinner from '../spinner/spinner';
import { CardLink, CardBody, Card, CardTitle } from 'reactstrap';

// need to improve on this im running into an issue, gonna ask a homie**
// this.state = { value: '' };

// this.handleChange = this.handleChange.bind(this);
// this.handleSubmit = this.handleSubmit.bind(this);


// handleChange(event) {
// 	this.setState({ value: event.target.value });
// }

// handleSubmit(event) {
// 	alert('A name was submitted: ' + this.state.value);
// 	event.preventDefault();
// }

function Contact() {

	return (
		<div>
			<div class="contact-image"></div>

			<div class="underline"></div>
			<div class="links">
				<Card>
					<CardBody>
						<CardTitle>SOCIAL & DEVELOPMENT PLATFORMS</CardTitle>
						<ul>
							<li>
								<CardLink href="https://github.com/raynawilliams1993">
									GitHub
									</CardLink>

							</li>
							<li>
								<CardLink href="https://www.linkedin.com/in/rayna-williams-225965191/">
									LinkedIn
									</CardLink>

							</li>
							<li>
								<CardLink href="https://docs.google.com/document/d/1VGxJrZkq4Ok5W4felziz_abvuS-3lW55m7eYnVMsTI0/edit?usp=sharing ">
									Resume
									</CardLink>


							</li>
						</ul>


					</CardBody>


				</Card>
			</div>
		</div>

	);
}

export default Contact;




