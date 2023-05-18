import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='my-20 text-center'>
            <h2 className='text-6xl font-bold'>OOPS,,,,,,,,,,</h2>
            <img className='w-4/5 mx-auto mt-3' src="https://i.ibb.co/WDCyRW0/Pu-Xip-AW3-AXUz-UJ4u-Yyx-PKC-1200-80.jpg" alt="" />
            <Link to={-1}><button className="btn mt-2">Go Back</button></Link>
        </div>
    );
};

export default Error;