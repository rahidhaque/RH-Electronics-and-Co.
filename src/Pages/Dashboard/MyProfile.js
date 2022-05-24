import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [profileInfo, setProfileInfo] = useState({});
    const { email } = useParams();
    const url = `http://localhost:5000/user/${email}`;
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`)
            .then(res => res.json())
            .then(data => setProfileInfo(data))
    }, [email])

    const onSubmit = data => {
        const user = {
            education: data.education,
            quantity: data.quantity,
            phone: data.phoneNumber,
            district: data.district,
            profile: data.profile
        }


        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(dataUser => {
                toast.success(`User Updated Successully`);
                reset();
            });

    }


    return (
        <div>
            <h1>This is My Profile</h1>
            <div class="card w-full max-w-lg shadow-2xl bg-base-100">
                <div class="card-body w-full">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full">
                            <label class="input-group mb-2">
                                <span className='font-bold'>Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                value={user.displayName}
                                readOnly
                                {...register('name')}
                            />
                        </div>

                        <div class="form-control w-full">
                            <label class="input-group">
                                <span className='font-bold mb-2'>Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs mb-2"
                                value={user.email}
                                readOnly
                                {...register('email')}
                            />
                        </div>
                        <div class="form-control w-full">
                            <label class="input-group">
                                <span className='font-bold mb-2'>Education</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Education"
                                className="input input-bordered w-full max-w-xs mb-2"
                                defaultValue={profileInfo.education}
                                {...register("education", {
                                    required: {
                                        value: true,
                                        message: 'Education is Required'
                                    }
                                })}
                            />
                            <label className="label my-2">
                                {errors.education?.type === 'required' && <span className="label-text-alt text-warning">{errors.education.message}</span>}
                            </label>
                        </div>

                        <div class="form-control w-full">
                            <label class="input-group">
                                <span className='font-bold mb-2'>Phone Number</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Your Number"
                                className="input input-bordered w-full max-w-xs mb-2"
                                defaultValue={profileInfo.phone}
                                {...register("phoneNumber", {
                                    required: {
                                        value: true,
                                        message: 'Phone Number is Required'
                                    }
                                })}
                            />
                            <label className="label my-2">
                                {errors.phoneNumber?.type === 'required' && <span className="label-text-alt text-warning">{errors.phoneNumber.message}</span>}
                            </label>
                        </div>



                        <div class="form-control w-full">
                            <label class="input-group">
                                <span className='font-bold mb-2'>District</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your District"
                                className="input input-bordered w-full max-w-xs mb-2"
                                defaultValue={profileInfo.district}
                                {...register("district", {
                                    required: {
                                        value: true,
                                        message: 'District is Required'
                                    }

                                })}
                            />
                            <label className="label my-2">
                                {errors.district?.type === 'required' && <span className="label-text-alt text-warning">{errors.district.message}</span>}
                            </label>
                        </div>

                        <div class="form-control w-full">
                            <label class="input-group">
                                <span className='font-bold mb-2'>Linkedin Profile Link</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Profile Link"
                                className="input input-bordered w-full max-w-xs mb-2"
                                defaultValue={profileInfo.profile}

                                {...register("profile", {
                                    required: {
                                        value: true,
                                        message: 'Profile Link is Required'
                                    }

                                })}
                            />
                            <label className="label my-2">
                                {errors.profile?.type === 'required' && <span className="label-text-alt text-warning">{errors.profile.message}</span>}
                            </label>
                        </div>




                        {
                            <input className='btn w-full max-w-xs btn-success text-white' type="submit" value="Update" />
                        }

                    </form>
                </div>


            </div>
        </div>
    );
};

export default MyProfile;