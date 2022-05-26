import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import DeleteConfirmOrder from './DeleteConfirmOrder';
import MyOrderRow from './MyOrderRow';

const MyOrders = () => {
    const { email } = useParams();
    const [deleteOrder, setDeleteOrder] = useState(null);
    const url = `https://desolate-reaches-30083.herokuapp.com/purchase/${email}`;

    const { data: purchases, isLoading, refetch } = useQuery('purchases', () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <h3 className='text-center font-bold mb-5'>My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Image</th>
                            <th>Delivery Address</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Cancel Order</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchases.map((purchase, index) => <MyOrderRow
                                key={purchase._id}
                                purchase={purchase}
                                index={index}
                                refetch={refetch}
                                setDeleteOrder={setDeleteOrder}
                            ></MyOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteOrder && <DeleteConfirmOrder
                    key={deleteOrder._id}
                    deleteOrder={deleteOrder}
                    refetch={refetch}
                    setDeleteOrder={setDeleteOrder}
                ></DeleteConfirmOrder>
            }
        </div>
    );
};

export default MyOrders;