import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        const review = {
            name: user.displayName,
            review: data.review
        }


        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(dataProduct => {
                toast.success(`Review Added Successfully`);
                reset();
            });

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Your Review</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Add Review"
                        className="input input-bordered w-full max-w-xs"
                        {...register("review", {
                            required: {
                                value: true,
                                message: 'Review is required'
                            }
                        })}
                    />

                    <label className="label">
                        {errors.review?.type === 'required' && <span className="label-text-alt text-warning">{errors.review.message}</span>}
                    </label>
                </div>

                <input className='btn btn-xs w-full  max-w-xs text-white' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;