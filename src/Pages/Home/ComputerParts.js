import React from 'react';
import chip from '../../Assets/chip.png'

const ComputerParts = () => {
    return (
        <div>
            <h1 className='text-2xl text-neutral text-center my-10'>Information Regarding Production</h1>
            <div className='flex flex-col justify-center items-center'>
                <div className="card max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body mb-5">
                        <h2 className="card-title">Our Engineers are the heart of our company!</h2>
                        <p>Designing complex parts for computer is our dream. Supplying those products and reach those to our customers is our ultimate goal. Using the chip to create diverse products is restock our diverse products.</p>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl image-full">
                    <figure><img src={chip} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Our Products Composition</h2>
                        <div className='grid grid-cols-1 gap-5'>
                            <p className='text-primary'>Motherboard<progress className="progress-primary  w-48 bg-white" value="70" max="100"></progress>
                            </p>
                            <p className='text-primary'>Mouse Rh and Co.<progress className="progress-primary  w-48 bg-white" value="95" max="100"></progress>
                            </p>
                            <p className='text-primary'>Hard Drive<progress className="progress-primary  w-48 bg-white" value="61" max="100"></progress>
                            </p>
                            <p className='text-primary'>Other Products<progress className="progress-primary  w-48 bg-white" value="35" max="100"></progress>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComputerParts;