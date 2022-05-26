import React from 'react';
import Footer from '../Shared/Footer';
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
            <ChooseUs></ChooseUs>
            <BussinessSummary></BussinessSummary>
            <ComputerParts></ComputerParts>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;