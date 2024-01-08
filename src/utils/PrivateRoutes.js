import { Outlet, Navigate } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import loader from '../img/loader.gif';

const PrivateRoutes = () => {
    const { currentUser, loading, error } = useContext(AuthContext);

    if(loading){
        return (
            <div className='loader'>
                <img src={loader} alt='loader' />
            </div>
        );
    }

    if(error){
        return (
            <div className='loader'>
                <p>Something Went Wrong!</p>
            </div>
        );
    }
    
    return(
        currentUser ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes