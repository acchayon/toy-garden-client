import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>
                            <Link to='/alltoy' className="justify-between">All Toys  </Link>
                        </li>
                        {user && <>
                            <li><Link to='/mytoy'>My Toys</Link></li>
                            <li><Link to='/addtoy'>Add A Toy</Link></li>
                        </>}
                        <li><Link to='/blog'>Blog</Link></li>
                        {user &&
                            <li>
                                {user?.email}
                            </li>}
                        {user ? <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div> : ''}
                    </ul>
                </div>
                <img className='md:w-20 w-2/12  rounded-full' src="https://i.ibb.co/S5GV9GT/0e84360419c875fb2fda5739613309d2-removebg-preview.png" alt="" />
                <a className="btn btn-ghost normal-case md:text-4xl font-bold">Toy Garden</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li tabIndex={0}>
                        <Link to='/alltoy'>All Toys</Link>
                    </li>
                    {user && <>
                        <li><Link to='/mytoy'>My Toys</Link></li>
                        <li><Link to='/addtoy'>Add A Toy</Link></li>
                    </>}
                    <li><Link to='/blog'>Blog</Link></li>
                    {user &&
                        <li>
                            {user?.email}
                        </li>}

                    {user ? <div className="avatar">
                        <div className="w-20 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </div> : ''}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <button onClick={handleLogOut} className="btn">Logout</button> :
                    <Link to='/login' className="btn">Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;