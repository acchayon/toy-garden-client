import React from 'react';

const Gallery = () => {
    return (
        <div className='my-5 w-10/12 mx-auto space-y-8'>
            <h2 className='text-5xl font-bold text-center'>One moment in our gallery...</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
                <div className="card w-full bg-base-100 hover:bg-gray-400">
                    <figure><img className='h-80' src="https://i.ibb.co/nj2P9Ng/teddy1-removebg-preview.png" alt="..." /></figure>
                </div>
                <div className="card w-full bg-base-100 hover:bg-gray-400 ">
                    <figure><img className='h-80' src="https://i.ibb.co/hWPxGPT/teddy2-removebg-preview.png" alt="..." /></figure>
                </div>
                <div className="card w-full bg-base-100 hover:bg-gray-400">
                    <figure><img className='h-80' src="https://i.ibb.co/Vg2NQ2g/teddy3-removebg-preview.png" alt="..." /></figure>
                </div>
                <div className="card w-full bg-base-100 hover:bg-gray-400">
                    <figure><img className='h-80' src="https://i.ibb.co/gyrg5kY/teddy4-removebg-preview.png" alt="..." /></figure>
                </div>
                <div className="card w-full bg-base-100 hover:bg-gray-400">
                    <figure><img className='h-80' src="https://i.ibb.co/Wpw8KK1/images-2-removebg-preview.png" alt="..." /></figure>
                </div>
                <div className="card w-full bg-base-100 hover:bg-gray-400">
                    <figure><img className='h-80' src="https://i.ibb.co/YPsHWtY/vtb-24765-20inchhugsybear-M-220718-0329-removebg-preview.png" alt="..." /></figure>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
