import React from 'react';

const About = () => {
    return (
        <div className="my-5 bg-light py-5">
            <div className="row container mx-auto text-start">
                <div className="col-lg-6 col-md-6 col-12">
                    <img className="img-fluid w-100" src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZRZvc8xcdwFXsvBWuJzunn8x_uMafl8waylfpt6OSKA&s`} alt="" />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <h1 className="text-start fw-bold text-info">
                        PULLMAN SNEAKER <br /> ABOUT US.
                    </h1>
                    <h6 className="fs-5 text-info">Investigationes demonstraverunt lectores legere me.</h6>
                    <p className="text-color">Quisque consequat venenatis rutrum. Quisque posuere enim augue, in rhoncus diam dictum non.Nunc id ante quis tellus faucibus</p>
                    <hr className="border border-dark" />
                    <p className="text-color fw-bold"><span><i className="fas fa-home me-2"></i></span> Manchester Road 1, Silictown 7</p>
                    <p className="text-color fw-bold"><span><i className="fas fa-phone-alt me-2"></i></span> Phone: +880 0123 456 789</p>
                    <p className="text-color fw-bold"> <span><i className="fas fa-envelope me-2"></i></span> Email: admin@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default About;