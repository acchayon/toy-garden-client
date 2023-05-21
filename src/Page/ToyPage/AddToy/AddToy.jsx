import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../Providers/AuthProvider';


const AddToy = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://toy-garden-server-chi.vercel.app/addtoy', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    };

    

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 items-center'>
            <div>
                <img className='w-4/5' src="https://i.ibb.co/3FpF2r8/images-2.jpg" alt="" />
            </div>
                
            <form className='space-y-5 my-10' onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <label htmlFor="name">Name: </label>
                <input className='p-2' defaultValue="Name" {...register("name")} />
                <br />
                <label htmlFor="price">Price: </label>
                <input className='p-2' defaultValue="$" {...register("price")} />
                <br />
                <label htmlFor="rating">Ratings: </label>
                <input className='p-2' defaultValue="4.6" {...register("rating")} />
                <br />
                <label htmlFor="sub-category">sub-Category: </label>
                <input className='p-2' defaultValue="teddy" {...register("sub_category")} />
                <br />
                <label htmlFor="quantity">Avaliable Quantity: </label>
                <input className='p-2' defaultValue="10+" {...register("quantity_available")} />
                <br />
                <label htmlFor="details">Details</label>
                <input className='p-2' defaultValue="view_details" {...register("view-details")} />
                <br />
                <label htmlFor="seller-name">Seller Name: </label>
                <input className='p-2' defaultValue="seller-name" {...register("seller_name")} />
                <br />
                <label htmlFor="seller-email">Seller email: </label>
                <input className='p-2' defaultValue={user?.email} {...register("seller_email")} />
                <br />
                <label htmlFor="photo">PhotoURL</label>
                <input className='p-2' defaultValue="photo url" {...register("picture")} />
                <br />
                <label htmlFor="description">Description: </label>
                <input className='p-2' defaultValue="add something" {...register("description")} />
                <br />


                {/* include validation with required or other standard HTML validation rules */}
                {/* <input {...register("exampleRequired", { required: true })} /> */}
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                {/* <input type="submit" /> */}
                {/* <input className="btn btn-active" type="submit" value="" /> */}
                <input className="btn btn-active" type="submit" />
            </form>
        </div>
    );
};

export default AddToy;