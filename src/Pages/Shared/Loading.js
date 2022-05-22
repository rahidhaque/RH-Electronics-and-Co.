import React from 'react';
import loading from '../../Assets/loading.gif'

const Loading = () => {
    return (
        <div>
            <div className="h-screen flex justify-center items-center">
                <div className="spinner-border animate-spin inline-block w-8 h-4 border-4 rounded-full" role="status">
                    <span><img src={loading} alt="" /></span>
                </div>
            </div>
        </div>
    );
};

export default Loading;