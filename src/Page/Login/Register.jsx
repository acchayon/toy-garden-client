import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const { createUser, GoogleSign } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleSignIn = () => {
        GoogleSign()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-base-200'>
                <div className='md:my-32'>
                    <img src="https://i.ibb.co/CH5Z31d/IMG-2045-removebg-preview.png" alt="" />
                </div>
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col bg-base-100">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl text-center font-bold">Register now!</h1>
                        </div>

                        <form onSubmit={handleRegister} className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="photo url" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="SignUp" />
                                </div>
                                <p><small>Already Have An Account? Go To </small><Link to='/login'>Login</Link></p>
                            </div>
                        </form>
                        <p className='text-center'>Or</p>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline">Sign with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;