import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';

const Buy = () => {
    useTitle('Buy');
    const [buy, setBuy] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/buy')
            .then(res => res.json())
            .then(data => setBuy(data))
    }, [])
    return (
        <div className='bg-base-200 w-4/5 mx-auto rounded-md border-2 border-neutral my-10'>
            <h1 className="text-5xl font-bold text-center py-5">Find it. Tour it. Own it.</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    buy.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Buy;