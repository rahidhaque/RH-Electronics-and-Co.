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
            review: data.review,
            rating: data.rating
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
                        <span className="label-text font-bold">Write Review</span>
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
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Add Rating</span>
                    </label>
                    <textarea
                        type="number"
                        placeholder="Add Rating"
                        className="input input-bordered w-full max-w-xs"
                        {...register("rating", {
                            required: {
                                value: true,
                                message: 'Review is required'
                            },
                            min: {
                                value: 1,
                                message: 'Value of Rating must be at least 1'
                            },
                            max: {
                                value: 5,
                                message: 'Maximum Value of rating can be 5'
                            }
                        })}
                    />

                    <label className="label">
                        {errors.review?.type === 'required' && <span className="label-text-alt text-warning">{errors.review.message}</span>}
                        {errors.review?.type === 'min' && <span className="label-text-alt text-warning">{errors.review.message}</span>}
                        {errors.review?.type === 'max' && <span className="label-text-alt text-warning">{errors.review.message}</span>}
                    </label>
                </div>

                <input className='btn btn-xs w-full  max-w-xs text-white' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;