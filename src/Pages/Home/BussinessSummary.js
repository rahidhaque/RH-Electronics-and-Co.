import React from 'react';
import workers from '../../Assets/workers.png'
import products from '../../Assets/product.png'

const BussinessSummary = () => {
    return (
        <div className='px-24 lg:px-24'>
            <h1 className='text-2xl text-neutral text-center mt-10'>Business Summary</h1>
            <div className="stats stats-vertical lg:stats-horizontal shadow lg:flex lg:justify-items-center">

                <div className="stat place-items-center mt-5">
                    <div className="stat-title">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div className="stat-value">80+</div>
                    <div className="stat-title"><span className='font-bold'>Delivery Locations</span></div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                    <div className="stat-value">4,200+</div>
                    <div className="stat-title"><span className='font-bold'>Users</span></div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                        </svg>
                    </div>
                    <div className="stat-value">1000+</div>
                    <div className="stat-title"><span className='font-bold'>Successfull Shipments</span></div>
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">
                        <img src={workers} alt="" />
                    </div>
                    <div className="stat-value">70+</div>
                    <div className="stat-title"><span className='font-bold'>Workers</span></div>
                </div>
                <div className="stat place-items-center">
                    <div className="stat-title">
                        <img src={products} alt="" />
                    </div>
                    <div className="stat-value">150+</div>
                    <div className="stat-title"><span className='font-bold'>Products</span></div>
                </div>

            </div>
        </div>
    );
};

export default BussinessSummary;