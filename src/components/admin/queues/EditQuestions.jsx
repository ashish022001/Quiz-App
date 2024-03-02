import {BrowserRouter as Rt,Routes,Route,Link} from "react-router-dom";  
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import AdminHeader from "../../common/AdminHeader";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function EditQuestions()
{
    const  id  = useParams();
    const navigate = useNavigate();
    const [Question, setQuestion] = useState(
		{
			
			question:"",
            opt1:"",
            opt2:"",
            opt3:"",
            opt4:"",
			ans:""
		}
	);
    useEffect(() => {
        const fetchQuestionData = async () => {
          try {
            const response = await axios.get(`http://localhost:5000/fetch_single_question/${id.questionId}`);
            setQuestion(response.data);
          } catch (error) {
            console.error('Error fetching question data:', error);
          }
        };
      
        if (id) {
            fetchQuestionData();
        }
      }, [id]);

      const handleQuestion = (e) =>
	{
		const {name,value} = e.target;
		setQuestion(prevState => ({
			...prevState,
			[name]:value
		}));

	}

	const handleSubmit = async (e) =>
	{
		e.preventDefault();
		//console.log(question);
		try{
            await axios.put(`http://localhost:5000/update_question/${id.questionId}`, Question);
			console.log("Question edited Successfully");
			navigate('/all_questions');
		}
		catch(error){
			console.error("Error editing question:",error);

		}
	}
    return(
        <>
        <AdminHeader/>
        <div className="card w-75 m-5 ">
                    <div className="m-4">
                    <div>
                    <dl>
                        <dt>Ques</dt>
                        <dd><textarea style={{height:"100px"}} type="text" value={Question.question} name="question" onChange={handleQuestion} className="form-control" /></dd>
                    </dl>
                    </div>
                    <div>
                    <ol>
                        <dt>Option</dt>
                        <li className="mb-3 w-25"><input type="text" value={Question.opt1} name="opt1" onChange={handleQuestion} className="form-control" /></li>
                        <li className="mb-3 w-25"><input type="text" value={Question.opt2} name="opt2" onChange={handleQuestion} className="form-control" /></li>
                        <li className="mb-3 w-25"><input type="text" value={Question.opt3} name="opt3" onChange={handleQuestion} className="form-control" /></li>
                        <li className="mb-3 w-25"><input type="text" value={Question.opt4} name="opt4" onChange={handleQuestion} className="form-control" /></li>

                    </ol>
                    </div>
                    <div>
                        <dt>Answar</dt>
                        <input type="number" value={Question.ans} onChange={handleQuestion} name="ans" min={1} max={4} className="form-control w-25" />
                        </div>

                    <button onClick={handleSubmit} className="btn btn-primary mt-3"><span className="bi bi-person-plus-fill "></span>noUpdate</button>
                </div>

                </div>
        </>
    )
}
export default EditQuestions;