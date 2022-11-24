import React from 'react';
import useTitle from '../../hooks/useTitle';
import Banner from './Banner/Banner';
import ServiceOverview from './ServiceOverview/ServiceOverview';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <ServiceOverview></ServiceOverview>
        </div>
    );
};

export default Home;