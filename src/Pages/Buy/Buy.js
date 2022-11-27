import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Spinner from '../../utilities/Spinner';
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
        <>
            {
                buy.length === 0 ?
                    <Spinner></Spinner>
                    :
                    <div className='bg-gray-900 text-zinc-50 w-full md:w-4/5 mx-auto rounded-none md:rounded-md border-y-2 md:border-2 border-neutral my-10'>
                        <h1 className="text-4xl md:text-5xl font-bold text-center py-5">Find it. Tour it. Own it.</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            {
                                buy.map(service => <ServiceCard
                                    key={service._id}
                                    service={service}
                                ></ServiceCard>)
                            }
                        </div>
                    </div>
            }
        </>
    );
};

export default Buy;