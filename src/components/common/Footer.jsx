import footer from '../common/footer.css';
import { BrowserRouter as Rt, Routes, Route, Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer className="bg-dark text-white p-3 row" >
                <div className="left-panel col-3">
                    <div className="footer-title">Address :</div>
                    <div>SHIVAJINAGAR PUNE Post Office is located at PUNE, MAHARASHTRA, 411005</div>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30263.284210191352!2d73.84229954999999!3d18.532944999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0791d785177%3A0x20d86a81ca743dc8!2sShivajinagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709353430119!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="col-3">
                    <div className="footer-title">Services</div>
                    <div>Online Marketing</div>
                    <div>Technology</div>
                    <div>Business</div>
                    <div>Content strategy</div>
                    <div>Development</div>
                    <div>Advertising Strategy</div>

                </div>
                <div className="col-3 ">
                    <div className='col-6'>
                        <a href="#"> <div className="footer-title">About Us</div></a>
                        <a href="#"> <div>Shop</div></a>
                        <a href="#"> <div>Contact</div></a>
                        <a href="#"> <div>Blogs</div></a>
                        <a href="#"> <div>Privacy Policy</div></a>
                        <a href="#"> <div>Terms of Use</div></a>

                        <div>
                            <ul className="list-group">
                                <li className="list-item"><Link to={"/"}>Home</Link></li>
                                <li className="list-item"><Link to={"/login"}>Login</Link></li>
                                <li className="list-item"><Link to={"/register"}>Register</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="right-panel col-3">
                    <div className="footer-title">Contact us:</div>

                    <div>mail: <a href="#">demo_test@gmail.com</a></div>
                    <div>Mob: <a href="http://wa.me/915455151155">9898989898</a></div>
                    <div className='app'>
                        <a href="#"><span className='bi bi-instagram'></span></a>
                        <a href="#"><span className='bi bi-facebook'></span></a>
                        <a href=""><span className='bi bi-linkedin'></span></a>
                        <a href="#"><span className='bi bi-whatsapp'></span></a>
                    </div>

                </div>
                <div className='footer-bottom '>
                    <p style={{ marginBottom: -0 }}>Full Copyright & Design By@Ashish</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;