import Header from "../common/Header";
import Footer from "../common/Footer";
import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

function Login() {

	// States for registration
	const navigate = useNavigate();
	const [user, setUser] = useState(
		{
			mobile: "",
			password: ""
		}
	);


	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser(prevState => ({
			...prevState,
			[name]: value
		}));

	}

	// Handling the form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		//console.log(user);
		try {
			const response = await axios.post('http://localhost:5000/user_login', user);
			//console.log(response.data);
			setUser(
				{
					mobile: "",
					password: ""
				}
			);
			navigate('/selecttest');
		}
		catch (error) {
			console.error("Error Form login:", error);
			setUser(
				{
					mobile: "",
					password: ""
				}
			);

			alert("Wrong mobile or password");

		}
	};
	// password vrification validation
	const VerifyPassword = () => {
		var password = document.getElementById("password").value;
		var passwordError = document.getElementById("passwordError");
		var regExp = /(?=.*[A-Z])(?=.*[0-9])(?=.*\W)[A-Za-z0-9\W]{4,10}/;
		if (password.match(regExp)) {
			passwordError.innerHTML = "Strong Password".fontcolor('green');
		} else {
			if (password.length < 4) {
				passwordError.innerHTML = "Poor Password".fontcolor('red');
			} else {
				passwordError.innerHTML = "Weak Password".fontcolor('orange');
			}
		}
	}
	// Login Button desabled
	function VerifyMobile() {
		var Mobile = document.getElementById("mobile").value;
		var MobileError = document.getElementById("mobilError");
		var loginButton = document.querySelector("button");
		if (Mobile == "") {
			MobileError.innerHTML = "Enter Your Mobile".fontcolor('red');
			loginButton.disabled = true;
		}
		else {
			MobileError.innerHTML = "";
			loginButton.disabled = false;
		}
	}
	return (
		<>
			<Header />
			<section className="bg-info d-flex p-5 justify-content-center">
				<form>
					<div className="card w-100 border-dark">
						<div className="card-header  text-primary login-title">
							<h3><span className="bi bi-person-fill" style={{ fontSize: 30 }}></span>User Login</h3>
						</div>
						<div className="card-body">
							<dl>
								<dt>Mobile</dt>
								<dd>
									<input
										onChange={handleChange}
										className="input form-control-sm"
										value={user.mobile}
										type="number"
										name="mobile"
										id="mobile"
										onBlur={VerifyMobile}
									/>
								</dd>
								<dd id="mobilError"></dd>

							</dl>
							<dl>
								<dt>Password</dt>
								<dd><input onChange={handleChange} className="input form-control-sm" lue={user.password}
									type="password"
									name="password"
									id="password"
									onKeyUp={VerifyPassword}
								/>
								</dd>
								<dd id="passwordError"></dd>
							</dl>
						</div>
						<div className="card-footer">
							<button onClick={handleSubmit} className="btn form-group btn-success w-100" type="submit">
								Login
							</button>
						</div>
					</div>
				</form>

			</section>
			<Footer />
		</>
	);
}

export default Login;