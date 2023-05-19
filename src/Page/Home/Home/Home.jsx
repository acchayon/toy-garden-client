import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Shop from '../Shop/Shop';
import About from '../ExtraSection/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Shop></Shop>
            <About></About>
        </div>
    );
};

export default Home;