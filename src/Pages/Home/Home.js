import React from 'react';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';
import ChooseUs from './ChooseUs';
import ComputerParts from './ComputerParts';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <BussinessSummary></BussinessSummary>
            <ChooseUs></ChooseUs>
            <ComputerParts></ComputerParts>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;