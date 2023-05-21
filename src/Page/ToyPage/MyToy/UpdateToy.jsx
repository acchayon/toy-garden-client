import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../Providers/AuthProvider';

const UpdateToy = () => {
    // const {name} = mytoy;
    const {user} = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)

        fetch(`http://localhost:5000/updatetoy/${data?._id}`,{
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

        // fetch('http://localhost:5000/addtoy', {
        //     method: 'POST',
        //     headers: {'content-type': 'application/json'},
        //     body: JSON.stringify(data)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        // })
    };

    return (
        <div>
                <h2>update</h2>
                <form className='space-y-5 my-10' onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <label htmlFor="name">Name: </label>
                <input className='p-2' defaultValue="name" {...register("name")} />
                <br />
                <label htmlFor="price">Price: </label>
                <input className='p-2' defaultValue="$" {...register("price")} />
                <br />
                
                
                <label htmlFor="quantity">Avaliable Quantity: </label>
                <input className='p-2' defaultValue="10+" {...register("quantity_available")} />
                <br />
                <label htmlFor="details">Details</label>
                <input className='p-2' defaultValue="view_details" {...register("view-details")} />
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

export default UpdateToy;