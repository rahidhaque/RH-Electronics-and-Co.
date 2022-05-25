import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, description, minQuantity, availableQuantity, price, img } = product;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl max-w-xl">
            <figure><img src={img} alt="product" /></figure>
            <div className="card-body">
                <h2 className="card-title max-w-xl p-2">{name}</h2>
                <p className='max-w-xl p-2'>{description}</p>

                <p className=''><span className='font-bold'>Minimum Quantity</span>: <small>{minQuantity}</small></p>
                <p><span className='font-bold'>Available Quantity</span>: <small>{availableQuantity}</small></p>
                <p><span className='font-bold'>Price</span>: <small>{price}</small></p>

                <div className="card-actions justify-center">
                    <Link to={`/purchase/${_id}`}><button className="btn btn-primary">Buy</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;