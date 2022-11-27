import React from 'react';
import logo from '../../../logo.svg';
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems';

const Header = () => {

    return (
        <div className="navbar bg-gray-900 text-zinc-50 py-5 border-b-2 border-neutral">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn hover:text-zinc-50 bg-zinc-50 text-gray-900 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <MenuItems></MenuItems>
                    </ul>
                </div>
                <Link to='/' className="flex items-center justify-between">
                    <img className='w-12 mx-2 border-2 border-black rounded-full' src={logo} alt="logo" />
                    <span className='text-xl font-bold'>Your Realtor</span>
                </Link>
            </div>

            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <MenuItems></MenuItems>
                </ul>
            </div>

            <div className="navbar-end">
                <Link to='/blog' className="btn hover:text-zinc-50 bg-zinc-50 text-gray-900 mx-2">Blog</Link>
            </div>
        </div>
    );
};

export default Header;