import React from 'react';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BussinessSummary></BussinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;