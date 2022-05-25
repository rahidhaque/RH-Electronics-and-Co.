import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import registrationImg from '../../Assets/Register.gif'
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import useToken from '../../Hooks/useToken';

const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        userEmailPass,
        loadingEmailPass,
        errorEmailPass,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [
        signInWithGoogle,
        userGoogle,
        loadingGoogle,
        errorGoogle
    ] = useSignInWithGoogle(auth);

    const [
        updateProfile,
        updating,
        updateError
    ] = useUpdateProfile(auth);

    let error;
    const [token] = useToken(userEmailPass || userGoogle);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    }

    if (loadingEmailPass || updating || loadingGoogle) {
        return <Loading></Loading>;
    }

    if (errorEmailPass) {
        error = <span className="label-text-alt text-warning">{errorEmailPass?.message}</span>;
    }

    if (updateError) {
        error = <span className="label-text-alt text-warning">{updateError?.message}</span>;
    }

    if (errorGoogle) {
        error = <span className="label-text-alt text-warning">{errorGoogle?.message}</span>;
    }

    if (token) {
        navigate('/');
    }
    return (
        <div>
            <div className="hero h-full lg:h-[70vh] bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:text-left max-w-lg mr-10">
                        <img src={registrationImg} alt="Registration" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control w-full">
                                    <label className="input-group mb-2">
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

                                <div className="form-control w-full">
                                    <label className="input-group">
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

                                <div className="form-control w-full">
                                    <label className="input-group">
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
                                <input className='btn w-full max-w-xs btn-success text-white' type="submit" value="Register" />
                            </form>
                        </div>
                        <div className='mb-2 text-center'>
                            <small><span className='text-success font-bold'>Already have an account to RH Electronics and Co.? Please</span> <Link to='/login'>Login</Link></small>
                        </div>
                        <div className="divider mb-5">OR</div>
                        <div className='w-full max-w-xl mx-24'>
                            <button
                                onClick={() => signInWithGoogle()}
                                className="btn btn-accent  mb-2"
                            >Continue with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;