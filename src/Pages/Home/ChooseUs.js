import React from 'react';

const ChooseUs = ({ info }) => {
    return (
        <div className='ml-20'>
            <h1 className='text-2xl text-neutral text-center mt-10'>Why Choose Us</h1>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                        <div className="card bg-base-100 shadow-xl mt-5 mx-5">
                            <div className='flex justify-center items-center'>
                                <div className='description'>
                                    <h1 className='text-xl'>Reliablity </h1>
                                </div>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                            </div>
                            <div className="card-body items-center text-center">
                                <p className=' w-100'>Submit a manufacturer to be featured with a free video and we will send you a free sample to find our what you need.</p>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl mt-5">
                            <div className='flex justify-center items-center'>
                                <div className='description'>
                                    <h1 className='text-xl'>Experience </h1>
                                </div>
                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="card-body items-center text-center">
                                <p className='lg:w-80 w-100'>We carry an enormous inventory of all the things you need to complete your project: notions, patterns and trims.</p>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl mt-5">
                            <div className='flex justify-center items-center'>
                                <div className='description'>
                                    <h1 className='text-xl'>Communication </h1>
                                </div>

                            </div>
                            <div className='flex justify-center items-center mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                </svg>
                            </div>
                            <div className="card-body items-center text-center">
                                <p className='w-100'>Our Communications about the product will be done ear to ear between the customers.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 class="text-5xl font-bold">What makes us different?</h1>
                        <p class="py-6 max-w-lg">Manufacturer’s high end manufacturing services are a perfect complement to today’s high tech industries. The manufacture of industrial equipment requires a vast knowledge base of processes. In producing computer parts we are reaching the scope of the industries.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;