import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    return (
        <div class="drawer drawer-mobile mt-16">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content w-full mx-w-xs">
                <h2 className='text-2xl font-bold mt-4 text-green-600 mx-5 text-center'>Welcome {user.displayName}</h2>
                <div className='flex flex-col justify-center items-center mt-10'>
                    <Outlet />
                </div>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li className='my-2'><NavLink to={`/dashboard/myorders/${user.email}`}>My Orders</NavLink></li>
                    <li><NavLink to={`/dashboard/myprofile/${user.email}`}>My Profile</NavLink></li>
                    <li><NavLink to={'/dashboard/users'}>Make Admin</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;