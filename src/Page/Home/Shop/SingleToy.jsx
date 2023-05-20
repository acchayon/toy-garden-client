import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaArrowLeft } from 'react-icons/fa';

const SingleToy = () => {
    const toy = useLoaderData();
    const { name, price, rating, view_details, seller_name, seller_email, quantity_available, description, picture } = toy;
    return (
        <div>
            <h2 className='text-4xl text-center font-bold'>{name}</h2>
            <div className="card my-10 lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-96' src={picture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">Seller Name: {seller_name}</h2>
                    <p className='text-xl font-semibold'>{description}</p>
                    <p className='text-2xl font-bold'>Available Products: {quantity_available}+</p>
                    <div className='flex'>
                    <p className='text-1xl'>Ratings: {rating}
                    </p>
                    <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
                </div>
                    <div className="card-actions justify-end">
                        <Link to={-1}><button className="btn btn-primary"><FaArrowLeft></FaArrowLeft>  Go Back</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;