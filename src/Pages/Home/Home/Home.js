import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Shared/Header/Header';
import Products from '../Products/Products';
import BannerTop from '../BannerTop/BannerTop';
import Reviews from '../Reviews/Reviews';
import About from '../About/About';
import BannerBottom from '../BannerBottom/BannerBottom';
import BonusSection from '../BonusSection/BonusSection';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <BannerTop />
            <BannerBottom />
            <About />
            <Products />
            <BonusSection />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;