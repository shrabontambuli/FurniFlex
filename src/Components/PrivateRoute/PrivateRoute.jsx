import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { CirclesWithBar } from 'react-loader-spinner';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <CirclesWithBar
                height="100"
                width="100"
                color="#1E90FF"
                outerCircleColor="#1E90FF"
                innerCircleColor="#1E90FF"
                barColor="#1E90FF"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/signin" replace></Navigate>


};

export default PrivateRoute;