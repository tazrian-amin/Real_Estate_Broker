import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const NotFound = () => {

    useTitle('Page Not Found');

    return (
        <div className="hero min-h-screen w-full mx-auto" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1608503120873-61c4643f96b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-right text-neutral-content">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold leading-relaxed">404, Page Not Found!</h1>
                    <p className='py-4 text-lg font-semibold'>Back to <Link to='/' className='underline'>Home</Link></p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;