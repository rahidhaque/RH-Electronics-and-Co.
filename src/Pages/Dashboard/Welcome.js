import React from 'react';
import dashboard from '../../Assets/Dashboard.gif'

const Welcome = () => {
    return (
        <div className="card card-side shadow-xl">
            <figure><img src={dashboard} alt="Movie" /></figure>
            <div className="card-body justify-center items-center">
                <h2 className="card-title">Welcome to your dashboard</h2>
                <p>Please start exploring</p>
            </div>
        </div>
    );
};

export default Welcome;