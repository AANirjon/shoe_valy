import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Footer.css';

const Footer = () => {
    const { user } = useAuth()
    return (
        <div className="footer-container">
            <div className="text-center">
                <h3 className="text-info text-underline"><ins>You can get in touch by subscribing</ins></h3>
                <div className="py-3 px-2">
                    <label htmlFor="#"><input type="email" name="email" placeholder="Enter your email" id="subscribe-email" /></label>
                    <button className="subscribe-btn">Subscribe</button>
                </div>
                <p className="text-info fw-bold">To get the latest news from us please subscribe by your email.</p>
            </div>
            <hr className="border my-4" />
            <div className="container mx-auto row text-white py-4 text-start">
                <div className="col-lg-3 col-md-6 col-12">
                    <h5 className="mb-4 text-info">About Us</h5>
                    <p className="text-color">We have a great value of customer and we respect it.We have a best shipment system to our delivery team.We are available all the time for our valuable consumer.</p>
                </div>
                <div className="col-lg-3 col-md-6 col-12 text-start">
                    <h5 className="mb-4 text-info">Quick Links</h5>
                    <p><Link className="text-decoration-none text-color link-text" to="/home">Home</Link></p>
                    <p><Link className="text-decoration-none text-color link-text" to="/contact">Contact</Link></p>
                    {
                        user.email
                        &&
                        <p><Link className="text-decoration-none text-color link-text text-info" to="/dashboard">Dashboard</Link></p>
                    }
                    <p><Link className="text-decoration-none text-color link-text" to="/allProducts">Explore Product</Link></p>
                </div>
                <div className="col-lg-3 col-md-6 col-12 text-start">
                    <h5 className="mb-4 text-info">Contact Info</h5>
                    <p className="text-color link-text"><span><i className="fas fa-map-marker-alt me-2"></i></span> Dhaka, Bangladesh</p>
                    <p className="text-color link-text"><span><i className="fas fa-phone-alt me-2"></i></span> +880 1023456789</p>
                    <p className="text-color link-text"><span><i className="fas fa-envelope me-2"></i></span> info@shoe_valy.com</p>
                </div>
                <div className="col-lg-3 col-md-6 col-12 text-start">
                    <h5 className="mb-4 text-info">Business Hour</h5>
                    <div className="d-flex justify-content-lg-between ftr-border text-color">
                        <p>Monday-Friday:</p>
                        <p>9am - 5pm.</p>
                    </div>
                    <div className="d-flex justify-content-lg-between ftr-border text-color">
                        <p>Saturday:</p>
                        <p>10am - 2pm.</p>
                    </div>
                    <div className="d-flex justify-content-lg-between ftr-border text-color">
                        <p>Sunday:</p>
                        <p>Closed.</p>
                    </div>
                </div>
            </div>

            {/* footer bottom  */}

            <div className="footer-bottom py-4">
                <div className="d-flex justify-content-between container align-items-center mx-auto">
                    <p className="text-color">Copyright &copy; 2022. All rights reserved || Shoe_Valy</p>
                    <div>
                        <span><i className="footer-icon fab fa-facebook-square"></i></span>
                        <span><i className="footer-icon fab fa-whatsapp-square"></i></span>
                        <span><i className="footer-icon fab fa-instagram-square"></i></span>
                        <span><i className="footer-icon fab fa-youtube-square"></i></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;