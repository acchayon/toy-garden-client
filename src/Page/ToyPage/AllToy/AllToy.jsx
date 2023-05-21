import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';


const AllToy = () => {
    const { user } = useContext(AuthContext);
    const [alltoys, setallToys] = useState([]);
    useEffect(() => {
        fetch('https://toy-garden-server-chi.vercel.app/toys')
            .then(res => res.json())
            .then(data => {
                setallToys(data)
            })
    }, [user])
    return (
        <div>
            <h2 className='text-center text-3xl font-bold'>Here is all toy</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Picture</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            alltoys.map(allToy => <tr
                            key={allToy._id}>
                                <th>{allToy?.name}</th>
                                <td>{allToy?.price}</td>
                                <td>{allToy?.quantity_available}</td>
                                <td>
                                <div className="avatar">
                                    <div className="w-16 rounded">
                                        <img src={allToy?.picture} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                            </td>
                            <td>{allToy?.rating}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToy;