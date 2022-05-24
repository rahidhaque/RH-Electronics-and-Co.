import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import MyOrderRow from './MyOrderRow';

const MyOrders = () => {
    const { email } = useParams();
    const url = `http://localhost:5000/purchase/${email}`;

    const { data: purchases, isLoading, refetch } = useQuery('purchases', () => fetch(url).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Image</th>
                            <th>Delivery Address</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchases.map((purchase, index) => <MyOrderRow
                                key={purchase._id}
                                purchase={purchase}
                                index={index}
                                refetch={refetch}
                            ></MyOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;