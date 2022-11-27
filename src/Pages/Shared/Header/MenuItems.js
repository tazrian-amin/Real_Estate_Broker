import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MenuItems = () => {

    const { user, logOut } = useContext(AuthContext);

    return (
        <>
            <li><Link className='btn hover:text-zinc-50 bg-zinc-50 text-gray-900 rounded-lg font-semibold mx-2' to='/'>Home</Link></li>
            <li><Link className='btn hover:text-zinc-50 bg-zinc-50 text-gray-900 rounded-lg font-semibold mx-2' to='/buy'>Buy House</Link></li>
            <li><Link className='btn hover:text-zinc-50 bg-zinc-50 text-gray-900 rounded-lg font-semibold mx-2' to='/sell'>Sell House</Link></li>
            {
                user?.email ?
                    <>
                        <li><Link className='btn hover:text-zinc-50 bg-zinc-50 text-gray-900 rounded-lg font-semibold mx-2' to='/my-reviews'>My Reviews</Link></li>
                        <li><button onClick={logOut} className='btn hover:text-zinc-50 bg-zinc-50 text-gray-900 rounded-lg font-semibold mx-2'><Link to='/'>Log Out</Link></button></li>
                    </>
                    :
                    <li><Link className='btn hover:text-zinc-50 bg-zinc-50 text-gray-900 rounded-lg font-semibold mx-2' to='/login'>Login</Link></li>
            }
        </>
    );
};

export default MenuItems;