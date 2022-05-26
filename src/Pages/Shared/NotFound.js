import React from 'react';
import notFound from '../../Assets/404.jpg'

const NotFound = () => {
    return (
        <div className='mt-10 flex justify-center items-center'>
            <div className='text-center mt-5'>
                <img style={{ height: '600px', width: '900px' }} src={notFound} alt="" />
            </div>
        </div>
    );
};

export default NotFound;