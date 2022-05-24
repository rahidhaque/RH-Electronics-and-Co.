import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L151ALITrU3NYbNTOSZgHhtqcsAeJRekB2cqZrRR8N7SScdPnn6HpdB7Wh8Tkdajl1nqWHSz8rCzMwSotCgGlkJ00RT1V7eHL');


const Payment = () => {
    const { email, id } = useParams();
    const url = `http://localhost:5000/purchase/${email}/${id}`;

    const { data: product, isLoading } = useQuery(['purchase', email, id], () => fetch(url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <div class="card w-50 max-w-lg bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <h2 class="card-title">You are Ordering {product.product}</h2>
                    <p>Please Pay: ${product.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-lg shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm product={product} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;