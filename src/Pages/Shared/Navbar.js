import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { signOut } from 'firebase/auth';

const Navbar = ({ children }) => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        navigate('/login');
    }
    return (
        <div>
            <div class="drawer">
                <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">

                    <div class="w-full navbar lg:px-14">
                        <div class="flex-none lg:hidden">
                            <label for="my-drawer-3" class="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div class="flex-1 px-2 mx-10 text-2xl">RH Electronics and Co.</div>
                        <div class="flex-none hidden lg:block gap-x-5">
                            <ul class="menu menu-horizontal">
                                <li><NavLink to='/' className='rounded-lg'>Home</NavLink></li>
                                <li><NavLink to='/blogs' className='rounded-lg'>Blogs</NavLink></li>
                                <li><NavLink to='/dashboard' className='rounded-lg'>Dashboard</NavLink></li>
                                {user ? <li><button onClick={logout} className="btn btn-ghost rounded-lg">Logout</button></li> : <li> <NavLink to='/login' className='rounded-lg'>Login</NavLink></li>}
                            </ul>
                        </div>
                    </div>
                    {children}
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-3" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">

                        <li><NavLink to='/' className='rounded-lg'>Home</NavLink></li>
                        <li><NavLink to='/blogs' className='rounded-lg'>Blogs</NavLink></li>
                        <li><NavLink to='/dashboard' className='rounded-lg'>Dashboard</NavLink></li>
                        {user ? <li><button onClick={logout} className="btn btn-ghost rounded-lg">Logout</button></li> : <li><NavLink to='/login' className='rounded-lg'>Login</NavLink></li>}

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;