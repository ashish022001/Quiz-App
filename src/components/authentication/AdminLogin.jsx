import Header from "../common/Header";
import Footer from "../common/Footer";
import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

function AdminLogin()
{
    
	// States for registration
	const navigate = useNavigate();
	const [user, setUser] = useState(
		{
			mobile:"",
			password:""
		}
	);


	const handleChange = (e) =>
	{
		const {name,value} = e.target;
		setUser(prevState => ({
			...prevState,
			[name]:value
		}));

	}

	// Handling the form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		//console.log(user);
		try{
			const response = await axios.post('http://localhost:5000/admin_login',user);
			//console.log(response.data);
			setUser(
				{
					mobile:"",
					password:""
				}
			);
				navigate('/dashboard');
		}
		catch(error){
			console.error("Error Form login:",error);
			setUser(
				{
					mobile:"",
					password:""
				}
			);

			alert("Wrong mobile or password");

		}

	};

	return (
		<>
		
		<div className="form row h-100 d-flex align-items-center justify-content-center bg-info pb-5">
			<div className="text-center bg-grey mt-3">
				<h3 className="text-danger">Admin Login</h3>
			</div>

			
   
			<form className="mt-3 mx-center col-4 bg-light p-3">
			<div className="card-header bg-primary text-white text-center pt-2">

                <label className="form-label col-4">Mobile</label>
				<input
					onChange={handleChange}
					className="input form-control-sm"
					value={user.mobile}
					type="number"
					name="mobile"
				/>

				<label className="form-label col-4">Password</label>
				<input
					onChange={handleChange}
					className="input form-control-sm"
					value={user.password}
					type="password"
					name="password"
				/>
                <div className="text-center">
				<button onClick={handleSubmit} className="btn form-group btn-success" type="submit">
					Login
				</button>
				</div>
				</div>
			</form>
		</div>
		
		<Footer/>
		</>
	);



}

export default AdminLogin;