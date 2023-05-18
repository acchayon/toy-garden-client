import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-base-200'>
                <div className='md:my-32'>
                    <img src="https://i.ibb.co/9NdGvqv/teddy-bear-glitter-eyes-stuffed-animal-soft-toy-removebg-preview.png" alt="" />
                </div>
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl text-center font-bold">Login now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;