
import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';

function Home() {
  return (

    <>
      <Header />
      <div >
        <div className="carousel slide carousel-light" id="banners" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img src={"./assets/quiz.jpg"} height={500} className="w-100" />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={"./assets/quiz1.jpg"} height={500} className="w-100" />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={"./assets/quiz2.jpg"} height={500} className="w-100" />
            </div>
          </div>
          <button className="carousel-control-prev" data-bs-slide="prev" data-bs-target="#banners">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" data-bs-slide="next" data-bs-target="#banners">
            <span className="carousel-control-next-icon"></span>
          </button>
          <div className="carousel-indicators">
            <button className="active" data-bs-slide-to="0" data-bs-target="#banners"></button>
            <button data-bs-slide-to="1" data-bs-target="#banners"></button>
            <button data-bs-slide-to="2" data-bs-target="#banners"></button>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <div className="card m-3">
           <img src={"./assets/banner.jpg"} style={{height:425}} />
          </div>
        </div>
        <div className='col-6'>
          <div className="card m-3">
            <div className="card-body" style={{height:425,overflow:'auto'}}>
              <h5 className="card-title">Quiz Information</h5>
              <p className="lh-sm">
                This is a “QUIZ” android app which gives the information about CSE core subjects. First of
                all, every student should register in registration page by using his/her name unique roll number, by
                creating username and password. After registering, they need to login every time to access their account.
                Here we provide two menus i.e., test and reference books, these references provide necessary
                information which is needed to write test
              </p>
              <p className="lh-sm ">
                This is a “QUIZ” android app which gives the information about CSE core subjects. First of
                all, every student should register in registration page by using his/her name unique roll number, by
                creating username and password. After registering, they need to login every time to access their account.
                Here we provide two menus i.e., test and reference books, these references provide necessary
                information which is needed to write test
              </p>

              <p className="lh-sm">
                In the test menu there are subjects in which we can select among some subjects and for every
                test it contains 20 questions and marks will be allotted for the right one. References give the
                overall ideas and concepts included in the subjects. Thus the main objective of the research is
                to develop an interactive mobile application base on android platform to conduct quiz sessions in the
                class for different technical topics
              </p>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;