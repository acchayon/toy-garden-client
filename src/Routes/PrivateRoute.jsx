import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    // loading
    if (loading) {
        return <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":82}}> 82%</div>
    }

    if (user) {
        return children
    }
    return (
        <Navigate state={{from: location}}  to='/login' replace></Navigate>
    );
};

export default PrivateRoute;