import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaArrowRight } from 'react-icons/fa';


const ToyCard = ({ toy }) => {
    const [ratings, setRatings] = useState(0)
    const { name, price, rating, picture, description } = toy;
    return (
        <div className="card w-full bg-base-100 hover:bg-slate-300 shadow-xl p-5">
            <figure><img className='w-auto h-52' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold mx-auto">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='text-xl'>Price: <span className='text-blue-500 font-bold'>{price}</span></p>
                <div className='flex'>
                    <p className='text-xl'>Ratings: {rating}
                    </p>
                    <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
                </div>
                <p>{description}</p>
                <div className="card-actions justify-start">
                    <button className="btn  btn-outline">View Details <FaArrowRight></FaArrowRight></button>
                </div>
            </div>
        </div >
    );
};

export default ToyCard;