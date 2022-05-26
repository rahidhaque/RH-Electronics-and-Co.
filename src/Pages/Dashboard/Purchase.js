import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const Purchase = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const url = `https://desolate-reaches-30083.herokuapp.com/product/${id}`;
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [url])


    let error;


    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const purchase = {
            productId: product._id,
            product: product.name,
            img: product.img,
            userName: data.displayName,
            email: data.email,
            address: data.address,
            quantity: data.quantity,
            price: data.quantity * product.price
        }


        fetch('https://desolate-reaches-30083.herokuapp.com/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(dataPurchase => {
                if (dataPurchase.acknowledged === true) {
                    toast.success(`Purchase Booked Successully`);
                    reset();
                }
                else {
                    toast.warning(`Purchase Failed`)
                }
                console.log(dataPurchase);
            });

    }


    // if (errorEmailPass) {
    //     error = <span className="label-text-alt text-warning">{errorEmailPass?.message}</span>;
    // }





    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 mx-auto my-auto'>
            <div className="card bg-base-100 shadow-xl max-w-xl">
                <figure><img src={product.img} style={{ height: '200px', width: '200px' }} alt="product" /></figure>
                <div className="card-body">
                    <h2 className="card-title max-w-xl p-2">{product.name}</h2>
                    <p className='max-w-xl p-2'>{product.description}</p>
                    <p>
                        <small>Min Quantity for Order: <span className='font-bold'>{product.minQuantity}</span></small> <br />
                        <small>Available Quantity for Order: <span className='font-bold'>{product.availableQuantity}</span></small>
                    </p>
                </div>
            </div>

            <div className="hero h-full bg-base-200">
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
                                    value={user.displayName}
                                    readOnly
                                    {...register('name')}
                                />
                            </div>

                            <div className="form-control w-full">
                                <label className="input-group">
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
                            <div className="form-control w-full">
                                <label className="input-group">
                                    <span className='font-bold mb-2'>Address</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Address"
                                    className="input input-bordered w-full max-w-xs mb-2"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Address is Required'
                                        }
                                    })}
                                />
                                <label className="label my-2">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-warning">{errors.address.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full">
                                <label className="input-group">
                                    <span className='font-bold mb-2'>Phone Number</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Your Number"
                                    className="input input-bordered w-full max-w-xs mb-2"

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

                            <div className="form-control w-full">
                                <label className="input-group">
                                    <span className='font-bold mb-2'>Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Your Quantity"
                                    className="input input-bordered w-full max-w-xs mb-2"
                                    defaultValue={product.minQuantity}

                                    {...register("quantity", {
                                        required: {
                                            value: true,
                                            message: 'Quantity is Required'
                                        },
                                        min: {
                                            value: product.minQuantity,
                                            message: `You have to purchase at least ${product.minQuantity} products`,

                                        },
                                        max: {
                                            value: product.availableQuantity,
                                            message: `Quantity Exceeded Available Quantity`
                                        }

                                    })}
                                />
                                <label className="label my-2">
                                    {errors.quantity?.type === 'required' && <span className="label-text-alt text-warning">{errors.quantity.message}</span>}
                                    {errors.quantity?.type === 'min' && <span className="label-text-alt text-warning">{errors.quantity.message}</span>}
                                    {errors.quantity?.type === 'max' && <span className="label-text-alt text-warning">{errors.quantity.message}</span>}
                                </label>
                            </div>


                            <div className='my-2'>
                                {error}
                            </div>


                            {errors.quantity ?
                                <input disabled className='btn w-full max-w-xs btn-success text-white' type="submit" value="Purchase" /> : <input className='btn w-full max-w-xs btn-success text-white' type="submit" value="Purchase" />
                            }

                        </form>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default Purchase;