import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import AdminHeader from "../../common/AdminHeader";
function AddSubject()
{
	const navigate = useNavigate();
    const [Subject, setSubject] = useState(
		{
			
			subject_name:""
		}
	);
 
	const handleSubject = (e) =>
	{
		const {name,value} = e.target;
		setSubject(prevState => ({
			...prevState,
			[name]:value
		}));

	}

	const handleSubmit = async (e) =>
	{
		e.preventDefault();
		//console.log(subject);
		try{
			await axios.post('http://localhost:5000/add_subject',Subject);
			console.log("Subject added Successfully");
			navigate('/all_subjects');
		}
		catch(error){
			console.error("Error Adding subject:",error);

		}
	}

    return(
        <>
		<AdminHeader/>
        <div className="form row h-100 d-flex align-items-center justify-content-center bg-info pb-5">
			
   
			<form className="mt-3 mx-center col-4 bg-light p-3">
			<div className="card-header bg-primary text-white text-center">

                <label className="form-label col-4">Add Subject</label>
				<input
					onChange={handleSubject}
					className="input form-control-sm"
					value={Subject.subject_name}
					type="text"
                    name="subject_name"
				/>


                <div className="text-center">
				<button onClick={handleSubmit} className="btn form-group btn-success" type="submit">
					Add Subject
				</button>
				</div>
				</div>
			</form>
		</div>
		
		
        </>
    );
}
export default AddSubject;