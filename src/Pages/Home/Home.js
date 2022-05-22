import React from 'react';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BussinessSummary></BussinessSummary>
        </div>
    );
};

export default Home;