import React from 'react';
import useTitle from '../../hooks/useTitle';
import Banner from './Banner/Banner';
import SellingSection from './SellingSection/SellingSection';
import ServiceOverview from './ServiceOverview/ServiceOverview';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <ServiceOverview></ServiceOverview>
            <SellingSection></SellingSection>
        </div>
    );
};

export default Home;