import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Shop from '../Shop/Shop';
import About from '../ExtraSection/About';
import State from '../ExtraSection/State';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <State></State>
            <Gallery></Gallery>
            <Shop></Shop>
            <About></About>
        </div>
    );
};

export default Home;