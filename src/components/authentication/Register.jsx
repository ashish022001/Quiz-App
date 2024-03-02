import Header from "../common/Header";
import Footer from "../common/Footer";
import { useState } from "react";
import axios from "axios";

function Register() {
	// States for registration
	const [user, setUser] = useState(
		{
			username: "",
			mobile: "",
			email: "",
			password: "",
			rePassword: ""
		}
	);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser(prevState => ({
			...prevState,
			[name]: value
		}));

	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		//console.log(user);
		try {
			await axios.post('http://localhost:5000/add_user', user);
			console.log("User Registered Successfully");
		}
		catch (error) {
			console.error("Error Form Submitting:", error);

		}
	}
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
	const VerifyEmail = () => {
        var email = document.getElementById("email").value;
        var emailError = document.getElementById("emailError");
        if (email.indexOf("@") < 2) {
            emailError.innerHTML = "Please Enter Your Valid Email with @".fontcolor('red');
        } else {
            emailError.innerHTML = "";
        }
    }
	const VerifyMobile = () => {
        var mobile = document.getElementById("mobile").value;
        var mobileError = document.getElementById("mobileError");
        var regExp = /\91[0-9]{10}/;
        if (mobile.match(regExp)) {
            mobileError.innerHTML = "";
        } else {
            mobileError.innerHTML = "Invalid Mobile : 91 with 10 digits".fontcolor('red');
        }
    }
	const VerifyName = () => {
        var name = document.getElementById("name").value;
        var nameError = document.getElementById("nameError");
        if (name === "") {
            nameError.innerHTML = "Please Enter Name".fontcolor('red');
        }
        else {
            nameError.innerHTML = "";
        }
    }
	return (
		<>
			<Header />
			<section className="bg-info d-flex p-5 justify-content-center">
				<div className="form ">
					<div className="card w-100 border-dark">
						<div className="card-header p-2 text-primary login-title">
							<h3 className="me-5 ms-5" style={{fontWeight:"bold"}}><span className="bi bi-person-plus-fill " style={{ fontSize: 30 }}></span>User Registration</h3>
						</div>
						<div className="card-body">
							<dl>
								<dt>Name</dt>
								<dd>
									<input style={{width:"100%"}}
										onChange={handleChange}
										className="form-control-sm"
										value={user.username}
										type="text"
										name="username"
										id="name"
										onKeyUp={VerifyName}
									/>
								</dd>
								<dd id="nameError"></dd>
							</dl>
							<dl>
								<dt>Mobile</dt>
								<dd>
									<input style={{width:"100%"}}
										onChange={handleChange}
										className="form-control-sm"
										value={user.mobile}
										type="number"
										name="mobile"
										id="mobile"
										onKeyUp={VerifyMobile}
									/>
								</dd>
								<dd id="mobileError"></dd>
							</dl>


							<dl>
								<dt>Email</dt>
								<dd>
									<input style={{width:"100%"}}
										onChange={handleChange}
										className="form-control-sm"
										value={user.email}
										type="email"
										name="email"
										id="email"
										onKeyUp={VerifyEmail}
									/>
								</dd>
								<dd id="emailError"></dd>
							</dl>
							<dl>
								<dt>Password</dt>
								<dd>
									<input style={{width:"100%"}}
										onChange={handleChange}
										className="form-control-sm"
										value={user.password}
										type="password"
										id="password"
										name="password"
										onKeyUp={VerifyPassword}
									/></dd>
									<dd id="passwordError"></dd>
							</dl>
							<dl>
								<dt>Re-Password</dt>
								<dd>
									<input style={{width:"100%"}}
										onChange={handleChange}
										className="form-control-sm"
										value={user.rePassword}
										type="password"
										name="rePassword"
									/></dd>
							</dl>
						</div>
						<div className="card-footer">
							<button onClick={handleSubmit} className="btn btn-success w-100" type="button">
								Submit
							</button>
						</div>
					</div>
				</div>

			</section>

			<Footer />
		</>
	);
}
export default Register;