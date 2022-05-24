import React from 'react';
import { useParams } from 'react-router-dom';


const MyProfile = () => {
    const { email } = useParams();
    return (
        <div>
            <h1>This is My Profile</h1>
        </div>
    );
};

export default MyProfile;