import 'bootstrap/dist/css/bootstrap.min.css';  
import {BrowserRouter as Rt,Routes,Route,Link} from "react-router-dom";  


function AdminHeader()
{
   
    return(
        <>

<nav className="navbar navbar-dark navbar-expand-lg bg-dark">
  <Link className="navbar-brand" to="#"><img src={"/assets/quiz.png"} style={{height:30}} alt="" /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to={'/dashboard'}>Dashboard </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/all_subjects'}>All Subjects</Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link" to={'/all_questions'}>All Questions</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/all_users'}>All Users</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={'/admin_logout'}>Logout</Link>
      </li>
    </ul>
    
  </div>
</nav>
           
        </>
    );

}

export default AdminHeader;