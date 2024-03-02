import logo from './logo.svg';
import './App.css';
import { ReactDOM } from 'react-dom';
import {BrowserRouter as Rt,Routes,Route,Link} from "react-router-dom";
import Login from './components/authentication/Login';
import AdminLogin from './components/authentication/AdminLogin';
import Header from './components/common/Header';
import Register from './components/authentication/Register';
import Home from './components/home/Home';
import AddSubject from './components/admin/queues/AddSubject';
import AddQuestion from './components/admin/queues/AddQuestion';
import SelectTest from './components/quiz/SelectTest';
import Dashboard from './components/admin/dashboard/Dashboard';
import AllQuestions from './components/admin/queues/AllQuestions';
import AllSubjects from './components/admin/queues/AllSubjects';
import EditQuestions from './components/admin/queues/EditQuestions';
import EditSubject from './components/admin/queues/EditSubject';
import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
      <>
      <Rt> 
      <Routes>
        <Route path='/' Component={Home}/>
         <Route path='/login' Component={Login}/>
         <Route path='/register' Component={Register}/>
         <Route path='/addsubject' Component={AddSubject}/>
         <Route path='/addquestion' Component={AddQuestion}/> 
         <Route path='/selecttest' Component={SelectTest}/>
         <Route path='/dashboard' Component={Dashboard}/>
         <Route path='/admin_login' Component={AdminLogin}/>
         <Route path='/admin_login' Component={AdminLogin}/>
         <Route path='/all_questions' Component={AllQuestions}/>
         <Route path='/all_subjects' Component={AllSubjects}/>
         <Route path='/edit_question/:questionId' Component={EditQuestions}/>
         <Route path='/edit_subject/:subjectId' Component={EditSubject}/>
      </Routes>
      </Rt>      
      </>
  );
}
export default App;
