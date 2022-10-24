import React from 'react';
import './BannerBotoom.css';

const BannerBottom = () => {
    return (
        <div className="mb-5 bannerBottom-container">
            <div className="row container mx-auto g-4">

                <div className="col-lg-3 col-md-6 col-12">
                    <div className="py-5 px-3 border  box-items">
                        <div className="d-flex justify-content-center align-items-center pt-3">
                            <span><i className="fas fa-envelope p-4 fs-1 banner-icon text-light rounded-circle"></i></span>
                        </div>
                        <h4>Great Value</h4>
                        <p>We have a great value of customer and we respect it...</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="py-5 px-3 border  box-items">
                        <div className="d-flex justify-content-center align-items-center pt-3">
                            <span><i className="fas fa-car-alt p-4 fs-1 banner-icon text-light rounded-circle"></i></span>
                        </div>
                        <h4>Worlwide Delivery</h4>
                        <p>We have a best shipment system to our delivery team.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="py-5 px-3 border  box-items">
                        <div className="d-flex justify-content-center align-items-center pt-3">
                            <span><i className="fas fa-search-dollar p-4 fs-1 banner-icon text-light rounded-circle"></i></span>
                        </div>
                        <h4>Safe Payment</h4>
                        <p>You can be releax about our payment methode.It's safe</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <div className="py-5 px-3 border  box-items">
                        <div className="d-flex justify-content-center align-items-center pt-3">
                            <span><i className="fas fa-headphones p-4 fs-1 banner-icon text-light rounded-circle"></i></span>
                        </div>
                        <h4>24/7 Help Center</h4>
                        <p>We are available all the time for our valuable consumer</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default BannerBottom;