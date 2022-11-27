import React from 'react';
import useTitle from '../../hooks/useTitle';
import Banner from './Banner/Banner';
import ClientsReview from './ClientsReview/ClientsReview';
import SellingSection from './SellingSection/SellingSection';
import BuyingSection from './BuyingSection/BuyingSection';

const Home = () => {

    useTitle('Home');

    return (
        <div>
            <Banner></Banner>
            <BuyingSection></BuyingSection>
            <SellingSection></SellingSection>
            <ClientsReview></ClientsReview>
        </div>
    );
};

export default Home;