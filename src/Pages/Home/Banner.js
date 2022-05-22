import React from 'react';
import banner from '../../Assets/banner.png'

const Banner = () => {
    return (
        <div>
            <div class="hero h-full lg:h-[60vh]" style={{
                background: `url(${banner})`
            }} >
                <div class="hero-overlay bg-opacity-20"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-lg">
                        <h1 class="mb-5 text-5xl font-bold">RH Electronics and Co.</h1>
                        <p class="mb-5 max-w-lg">This is one of the largest computer parts manufuacturer in Bangladesh. Company consists highly trained engineers to produce high quality chips to make motherboard, processor, ram etc. These are the necessary components which require to run any computer. </p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;