import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Page/Shared/Navbar/Navbar';
import Footer from '../Page/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='container md:mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;