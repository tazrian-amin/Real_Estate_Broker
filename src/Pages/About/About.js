import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const About = () => {
    useTitle('About');
    return (
        <div className="hero min-h-screen bg-base-200 w-full mx-auto" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1626178793926-22b28830aa30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-right text-neutral-content">
                <div className="w-full">
                    <h1 className="text-5xl font-bold leading-relaxed">About Us?</h1>
                    <p className='py-4 text-lg font-semibold'>We guide you to your <Link to='/buy' className='font-bold text-xl'>HOME...</Link></p>
                </div>
            </div>
        </div>
    );
};

export default About;