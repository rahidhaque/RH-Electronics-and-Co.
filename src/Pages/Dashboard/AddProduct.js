import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        const product = {
            name: data.name,
            description: data.description,
            minQuantity: data.minQuantity,
            availableQuantity: data.availableQuantity,
            price: data.price,
            img: data.img
        }


        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(dataProduct => {
                toast.success(`Product Added Successfully`);
                reset();
            });

    }


    return (
        <div>
            <h3 className='text-center font-bold mb-5'>Add New Product</h3>
            <div className='flex justify-center items-center'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Product Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-warning">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Description</span>
                        </label>
                        <textarea
                            type="text"
                            placeholder="Description"
                            className="input input-bordered w-full max-w-xs"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Product Description is required'
                                }
                            })}
                        />

                        <label className="label">
                            {errors.description?.type === 'required' && <span className="label-text-alt text-warning">{errors.description.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text font-bold">Minimum Quantity for Order</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Minimum Quantity"
                            className="input input-bordered w-full max-w-xs"
                            {...register("minQuantity", {
                                required: {
                                    value: true,
                                    message: 'Minimum Quantity is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.minQuantity?.type === 'required' && <span className="label-text-alt text-warning">{errors.minQuantity.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text font-bold">Available Quantity for Order</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Available Quantity"
                            className="input input-bordered w-full max-w-xs"
                            {...register("availableQuantity", {
                                required: {
                                    value: true,
                                    message: 'Minimum Quantity is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-warning">{errors.availableQuantity.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-lg">
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Price"
                            className="input input-bordered w-full max-w-xs"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-warning">{errors.price.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Image</span>
                        </label>
                        <textarea
                            type="text"
                            placeholder="Image URL"
                            className="input input-bordered w-full max-w-xs"
                            {...register("img", {
                                required: {
                                    value: true,
                                    message: 'Image URL is required'
                                }
                            })}
                        />

                        <label className="label">
                            {errors.img?.type === 'required' && <span className="label-text-alt text-warning">{errors.img.message}</span>}
                        </label>
                    </div>




                    <input className='btn w-full max-w-xs text-white' type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;