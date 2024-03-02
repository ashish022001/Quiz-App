import AdminHeader from "../../common/AdminHeader";
import {BrowserRouter as Rt,Routes,Route,Link} from "react-router-dom";  
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
function AllQuestions()
{
    const [data,setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:5000/fetch_all_questions');
            setData(response.data);
          } catch (error) {
            console.error('Error fetching questions:', error);
          }
        };
    
        fetchData();
      }, []);

      const deleteQuestion = async (id) => {
        try {
          await axios.delete(`http://localhost:5000/delete_question/${id}`);
          const updatedQuestions = data.filter(data => data._id !== id);
          setData(updatedQuestions);
          console.log('Question deleted successfully');
         // fetchUpdatedData();
         
        } catch (error) {
          console.error('Error deleting question:', error);
        }
      };
    return(
        <>
        <AdminHeader/>
        <div className="text-end">
        <Link className="btn btn-success" to={"/addQuestion"}>Add Question</Link> 
        </div>
         <table border={2} className="table table-hover shadow w-100">
                <thead>

                    <tr>
                        <th>Question</th>
                        <th>opt1</th>
                        <th>opt2</th>
                        <th>opt3</th>
                        <th>opt4</th>
                        <th>Ans</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map((element, index) => {
                            return (
                                <>
                                    <tr key={index}>
                                        <td>{element.question}</td>
                                        <td>{element.opt1}</td>
                                        <td>{element.opt2}</td>
                                        <td>{element.opt3}</td>
                                        <td>{element.opt4}</td>
                                        <td>{element.ans}</td>
                                        <td><Link className="btn btn-primary" to={`/edit_question/${element._id}`}>Edit</Link>
                                        <button class="btn btn-danger btn-sm" onClick={() => deleteQuestion(element._id)}>Delete</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }

                </tbody>
            </table>

        </>
    )
}
export default AllQuestions