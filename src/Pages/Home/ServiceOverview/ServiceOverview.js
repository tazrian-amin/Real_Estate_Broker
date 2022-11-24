import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const ServiceOverview = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/overview')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='bg-base-200 w-4/5 mx-auto rounded-md border-2 border-neutral my-10'>
            <h1 className="text-5xl font-bold text-center py-5">Purchase a Home!</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='flex justify-center'>
                <Link to='/buy' className="btn btn-primary my-10">View All</Link>
            </div>
        </div>
    );
};

export default ServiceOverview;