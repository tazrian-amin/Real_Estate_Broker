import React from 'react';
import { Link } from 'react-router-dom';

const SellingSection = () => {
    return (
        <div className="hero min-h-screen bg-base-200 w-4/5 mx-auto rounded-md mb-10">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=421&q=80" alt='selling img' className="lg:w-1/2 rounded-lg shadow-2xl" />
                <div className='sm:text-center lg:text-left'>
                    <h1 className="text-5xl font-bold">Sell Your Home!</h1>
                    <p className="py-6">Provide your information and register. Give your selling posts and we will make it happen right away!</p>
                    <Link to='/sell' className="btn btn-primary">Start Selling</Link>
                </div>
            </div>
        </div>
    );
};

export default SellingSection;