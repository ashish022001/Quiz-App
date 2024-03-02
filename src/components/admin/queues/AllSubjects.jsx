import AdminHeader from "../../common/AdminHeader";
import {BrowserRouter as Rt,Routes,Route,Link} from "react-router-dom";  
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
function AllSubjects() {

    const [data,setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:5000/fetch_all_subjects');
            setData(response.data);
          } catch (error) {
            console.error('Error fetching subjects:', error);
          }
        };
    
        fetchData();
      }, []);

      const deleteSubbject = async (id) => {
        try {
          await axios.delete(`http://localhost:5000/delete_subject/${id}`);
          const updatedSubjects = data.filter(data => data._id !== id);
          setData(updatedSubjects);
          console.log('subject deleted successfully');
         // fetchUpdatedData();
         
        } catch (error) {
          console.error('Error deleting subject:', error);
        }
      };

    return (
        <>

        <AdminHeader/>
                
            <table border={2} className="table table-hover shadow w-100">
                <thead>

                    <tr>
                        <th>Subject</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map((element, index) => {
                            return (
                                <>
                                    <tr key={index}>
                                        <td>{element.subject_name}</td>
                                        <td><Link className="btn btn-primary" to={`/edit_subject/${element._id}`}>Edit</Link>
                                        <button class="btn btn-danger btn-sm" onClick={() => deleteSubbject(element._id)}>Delete</button>

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
export default AllSubjects;