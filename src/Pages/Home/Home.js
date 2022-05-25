import React from 'react';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';
import ChooseUs from './ChooseUs';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BussinessSummary></BussinessSummary>
            <ChooseUs></ChooseUs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;