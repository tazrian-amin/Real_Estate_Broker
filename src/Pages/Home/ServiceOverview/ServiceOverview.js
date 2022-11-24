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
        <div className='my-20'>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='mt-10 flex justify-center'>
                <Link to='/buy' className="btn btn-primary">View All</Link>
            </div>
        </div>
    );
};

export default ServiceOverview;