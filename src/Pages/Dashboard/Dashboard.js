import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile mt-16">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content w-full mx-w-xs">
                <h2 className='text-2xl font-bold mt-4 text-green-600 mx-5 text-center'>Welcome {user.displayName}</h2>
                <div className='flex flex-col justify-center items-center mt-10'>
                    <Outlet />
                </div>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to={`/dashboard/myprofile/${user.email}`}>My Profile</NavLink></li>
                    {!admin && <li className='my-2'><NavLink to={`/dashboard/myorders/${user.email}`}>My Orders</NavLink></li>}
                    {!admin && <li className='my-2'><NavLink to={`/dashboard/addReview`}>Add Review</NavLink></li>}
                    {admin && <li><NavLink to={`/dashboard/addProduct`}>Add Product</NavLink></li>}
                    {admin && <li><NavLink to={`/dashboard/manageProducts`}>Manage Products</NavLink></li>}
                    {admin && <li><NavLink to={`/dashboard/manageOrders`}>Manage Orders</NavLink></li>}
                    {admin && <li><NavLink to={'/dashboard/users'}>Make Admin</NavLink></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;