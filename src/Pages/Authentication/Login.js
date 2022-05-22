import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../Assets/login.gif'

const Login = () => {
    return (
        <div className=''>
            <div class="hero h-full lg:h-[70vh] bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <div class="text-center lg:text-left max-w-lg mr-10">
                        <img src={login} alt="" />
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                        </div>
                        <div className='mb-5 text-center'>
                            <small>New to RH Electronics and Co.? Please <Link to='/register'>Register</Link></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;