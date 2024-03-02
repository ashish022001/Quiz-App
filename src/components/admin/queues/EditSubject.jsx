import {BrowserRouter as Rt,Routes,Route,Link} from "react-router-dom";  
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import AdminHeader from "../../common/AdminHeader";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function EditSubject()
{
    const  id  = useParams();
	const navigate = useNavigate();
    const [Subject, setSubject] = useState(
		{			
			subject_name:""
		}
	);
 
    useEffect(() => {
        const fetchSubjectData = async () => {
          try {
            const response = await axios.get(`http://localhost:5000/fetch_single_subject/${id.subjectId}`);
            setSubject(response.data);
          } catch (error) {
            console.error('Error fetching subject data:', error);
          }
        };
      
        if (id) {
            fetchSubjectData();
        }
      }, [id]);

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
			await axios.put(`http://localhost:5000/update_subject/${id.subjectId}`, Subject);
			console.log("Subject edited Successfully");
			
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
					Update Subject
				</button>
				</div>
				</div>
			</form>
		</div>		
        </>
    );
}
export default EditSubject;