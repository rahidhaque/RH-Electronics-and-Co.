import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import registrationImg from '../../Assets/Register.gif'

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className=''>
            <div class="hero h-full lg:h-[70vh] bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <div class="lg:text-left max-w-lg mr-10">
                        <img src={registrationImg} alt="Registration" />
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-control w-full">
                                    <label class="input-group mb-2">
                                        <span className='font-bold'>Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'Name is Required'
                                            },
                                            pattern: {
                                                value: /^([^0-9]*)$/,
                                                message: 'Your name contains number'
                                            },
                                        })}
                                    />
                                    <label className="label my-2">
                                        {errors.name?.type === 'pattern' && <span className="label-text-alt text-warning">{errors.name.message}</span>}
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-warning">{errors.name.message}</span>}
                                    </label>
                                </div>

                                <div class="form-control w-full">
                                    <label class="input-group">
                                        <span className='font-bold mb-2'>Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="input input-bordered w-full max-w-xs mb-2"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            },
                                            pattern: {
                                                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                                message: 'Please Provide a Valid Email'
                                            }
                                        })}
                                    />
                                    <label className="label my-2">
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-warning">{errors.email.message}</span>}
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-warning">{errors.email.message}</span>}
                                    </label>
                                </div>

                                <div class="form-control w-full">
                                    <label class="input-group">
                                        <span className='font-bold mb-2'>Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Your Password"
                                        className="input input-bordered w-full max-w-xs mb-2"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is Required'
                                            },
                                            minLength: {
                                                value: 7,
                                                message: 'Password Length should be greater than 6'
                                            },
                                            maxLength: {
                                                value: 10,
                                                message: 'Password Length can not be greater than 10'
                                            }
                                        })}
                                    />
                                    <label className="label my-2">
                                        {errors.password?.type === 'pattern' && <span className="label-text-alt text-warning">{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-warning">{errors.password.message}</span>}
                                        {errors.password?.type === 'maxLength' && <span className="label-text-alt text-warning">{errors.password.message}</span>}
                                    </label>
                                </div>
                                <input className='btn w-full max-w-xs btn-success text-white' type="submit" value="Register" />
                            </form>
                        </div>
                        <div className='mb-5 text-center'>
                            <small><span className='text-success font-bold'>Already have an account to RH Electronics and Co.? Please</span> <Link to='/login'>Login</Link></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;