import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MenuItems = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            <li className='btn bg-primary rounded-lg font-semibold mx-2'><Link to='/'>Home</Link></li>
            <li className='btn bg-primary rounded-lg font-semibold mx-2'><Link to='/buy'>Buy House</Link></li>
            <li className='btn bg-primary rounded-lg font-semibold mx-2'><Link to='/sell'>Sell House</Link></li>
            {
                user?.email ?
                    <>
                        <li className='btn bg-primary rounded-lg font-semibold mx-2'><Link to='/reviews'>My Reviews</Link></li>
                        <li><button className='btn bg-primary rounded-lg font-semibold mx-2'><Link to='/'>Log Out</Link></button></li>
                    </>
                    :
                    <li className='btn bg-primary rounded-lg font-semibold mx-2'><Link to='/login'>Login</Link></li>
            }
        </>
    );
};

export default MenuItems;