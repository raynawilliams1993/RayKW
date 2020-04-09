import React, { useState } from 'react';
import './contact.scss';
import axios from 'axios';
import Spinner from '../spinner/spinner';
import { CardText, CardBody, Card, CardLink } from 'reactstrap';

export default function Contact() {
	document.title = 'Contact';
	const [spinner, setSpinner] = useState(false);
	const [state, setState] = useState({ message: '', status: true });
	async function sendEmail(e) {
		e.preventDefault();
		if (localStorage.getItem('dateOfSend')) {
			if (Date.now() - localStorage.getItem('dateOfSend') < 1200000) {
				setState({ message: `Fail, Try in ${Math.ceil((1200000 / 60000) - (Date.now() - +localStorage.getItem('dateOfSend')) / 60000)} min `, status: false });
				return;
			}
		}
		setSpinner(true);
		try {
			const result = await axios.post('raynawilliams123@gmail.com', {
				text: e.target.emailText.value,
				them: e.target.emailSubject.value
			});
			if (result.status === 200) {
				window.localStorage.setItem('dateOfSend', Date.now());
				setState({ ...state, message: 'Success, Thank you', status: true });
			}
			setSpinner(false);
		} catch (err) {
			// setState({message: err.response.data.message, status: false});
			setSpinner(false);
		}
	}

	return (


		<div className='contact'>
			{spinner ? <Spinner /> : ''}
			<div className="contact-image"></div>
			<div className='contact-form'>
				<form onSubmit={sendEmail}>
					<label>Enter your theme</label>
					<br></br>
					<input required type='text' name="emailSubject" className="form-control z-depth-1" rows="3" placeholder="Write your them"></input>
					<br></br>
					<label>Enter your message</label>
					<br></br>
					<textarea type='textarea' name="emailText" className="form-control z-depth-1" rows="3" placeholder="Write your message"></textarea>
					<br></br>
					<input className='submitButton' type="submit" color='info' value='Send'></input>
					<br></br>
					<br></br>
					<h2 style={{ color: state.status ? 'green' : 'red', fontStyle: 'italic', textAlign: 'center' }}>{state.message}</h2>
					<div className="underline"></div>



				</form>
			</div>
			<div class="links">
				<Card>
					<CardBody>
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
	)
}