import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import login from '../../Assets/login.gif'
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        userEmailPass,
        loadingEmailPass,
        emailPassError,
    ] = useSignInWithEmailAndPassword(auth);

    const [
        signInWithGoogle,
        userGoogle,
        loadingGoogle,
        errorGoogle
    ] = useSignInWithGoogle(auth);

    let error;


    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        console.log(data);
        await signInWithEmailAndPassword(data.email, data.password);
    }

    if (loadingEmailPass || loadingGoogle) {
        return <Loading></Loading>;
    }

    if (emailPassError) {
        error = <span className="label-text-alt text-warning">{emailPassError?.message}</span>;
    }

    if (errorGoogle) {
        error = <span className="label-text-alt text-warning">{errorGoogle?.message}</span>;
    }

    if (userEmailPass || userGoogle) {
        navigate('/');
    }


    return (
        <div className=''>
            <div class="hero h-full lg:h-[70vh] bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <div class="lg:text-left max-w-lg mr-10">
                        <img src={login} alt="Registration" />
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>

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
                                <div className='my-2'>
                                    {error}
                                </div>
                                <input className='btn w-full max-w-xs btn-success text-white' type="submit" value="Login" />
                            </form>
                        </div>
                        <div className='mb-2 text-center'>
                            <small><span className='text-success font-bold'>New to RH Electronics and Co.? Please</span> <Link to='/register'>Register</Link></small>
                        </div>
                        <div className="divider mb-5">OR</div>
                        <div className='w-full max-w-xl mx-24'>
                            <button
                                onClick={() => signInWithGoogle()}
                                className="btn btn-accent mb-2"
                            >Continue with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;