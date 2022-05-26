import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmOrder from './DeleteConfirmOrder';
import ManageOrderRow from './ManageOrderRow';

const ManageOrders = () => {
    const [deleteOrder, setDeleteOrder] = useState(null);
    const url = `https://desolate-reaches-30083.herokuapp.com/purchase`;

    const { data: purchases, isLoading, refetch } = useQuery('purchases', () => fetch(url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <h3 className='text-center font-bold mb-5'>User Orders</h3>
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
                            <th>User Email</th>
                            <th>Cancel Order</th>
                            <th>Order Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchases.map((purchase, index) => <ManageOrderRow
                                key={purchase._id}
                                purchase={purchase}
                                index={index}
                                refetch={refetch}
                                setDeleteOrder={setDeleteOrder}
                            ></ManageOrderRow>)
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

export default ManageOrders;