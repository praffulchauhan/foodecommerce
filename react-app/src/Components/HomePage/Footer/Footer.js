import "./Footer.css";
import {Link} from "react-router-dom";

const Footer = () => {
    return(
        <div className="footer">
            <div className="row">
                <div className="col-md-6">
                    <div className="address">
                        <div className="logo">
                            <img  src="https://cdn3.vectorstock.com/i/thumb-large/10/77/food-fox-logo-vector-24171077.jpg" alt="footer-logo" />
                            <h2>Food Fox</h2>
                        </div>
                        <hr/>
                        <p>10, Model Town</p>
                        <p>Phone No: 6327637868</p>
                        <p>Email: abc@gmail.com</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="connect">
                        <h2>Connect With US</h2>
                    </div>
                    <div className="social">
                        <Link to="/" ><i className="fa fa-facebook"></i></Link>
                        <Link to="/" ><i className="fa fa-twitter"></i></Link>
                        <Link to="/" ><i className="fa fa-instagram"></i></Link>
                        <Link to="/" ><i className="fa fa-youtube"></i></Link>
                    </div>

                </div>
                <div className="copyright">
                    &#169;Copyright 2022, All rights Reserved
                </div>
            </div>
        </div>
    );
}

export default Footer;