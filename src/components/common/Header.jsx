import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Rt, Routes, Route, Link } from "react-router-dom";


function Header() {

  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
        <Link className="navbar-brand" to="#"><img src={"/assets/quiz.png" } height={30} alt="" /></Link>
        <button className="navbar-toggler" data-bs-target="#menu" data-bs-toggle="collapse">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-nav navbar-collapse collapse p-2" id="menu">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to={'/home'}>Home </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/login'}>Login</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={'/register'}>Register</Link>
            </li>
          </ul>

        </div>
      </nav>

    </>
  );

}

export default Header;