import React from 'react';
import useTitle from '../../hooks/useTitle';
import Banner from './Banner/Banner';
import ClientsReview from './ClientsReview/ClientsReview';
import SellingSection from './SellingSection/SellingSection';
import ServiceOverview from './ServiceOverview/ServiceOverview';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <ServiceOverview></ServiceOverview>
            <SellingSection></SellingSection>
            <ClientsReview></ClientsReview>
        </div>
    );
};

export default Home;