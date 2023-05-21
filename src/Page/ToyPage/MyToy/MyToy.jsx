import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link } from 'react-router-dom';


const MyToy = () => {

    const { user } = useContext(AuthContext);
    const [myToys, setmyToys] = useState([]);
    
    useEffect(() => {
        fetch(`https://toy-garden-server-chi.vercel.app/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setmyToys(data)
            })
    }, [user])


    const handleDelete = id => {
        const proceed = confirm('Are you want to delete this surely?');
        if(proceed){
            fetch(`https://toy-garden-server-chi.vercel.app/toys/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('DELETED SUCCESSFULLY')
                    const remaining = myToys.filter(toy => toy._id !== id)
                    setmyToys(remaining) 
                }
            })
        }
    }
    return (
        <div className="overflow-x-auto">
            <h2 className='text-center text-3xl font-bold my-7'>My Uploaded Toys Are Here</h2>
            <table className="table w-full">
                {/* head*/}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Available</th>
                        <th>Picture</th>
                        <th>update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        myToys.map(mytoy => <tr
                            key={mytoy._id}
                        >
                            <th>{mytoy?.name}</th>
                            <td>{mytoy?.price}</td>
                            <td>{mytoy?.quantity_available}</td>
                            <td>
                                <div className="avatar">
                                    <div className="w-16 rounded">
                                        <img src={mytoy?.picture} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                            </td>
                            <td>
                                <Link to='/updatetoy'>
                                    <button className="btn btn-primary">Edit</button>
                                </Link>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(mytoy?._id)} className="btn btn-error">Delete</button>
                            </td>


                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToy;