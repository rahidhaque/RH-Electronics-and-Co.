import React from 'react';
import { toast } from 'react-toastify';

const ManageOrderRow = ({ purchase, index, setDeleteOrder, refetch }) => {
    const { _id, img, product, address, quantity, price, paid, email, shipped } = purchase;
    const shipNow = () => {
        fetch(`http://localhost:5000/purchase/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application-json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Product Shipped Successfully");
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{product}</td>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src={img} alt="" />
                </div>
            </div></td>
            <td>{address}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td>{email}</td>
            <td>
                {
                    paid ? <button className='btn btn-success btn-xs' disabled><span className=' font-bold'>Already Paid</span></button> : <label onClick={() => setDeleteOrder(purchase)} for="delete-confirm-modal" class="btn btn-xs btn-warning"><span className='px-2'>Cancel</span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                }
            </td>
            <td>
                {(price && !paid) && <span className='text-warning font-bold'>Unpaid</span>}
                {(price && paid && !shipped) && <btn onClick={() => shipNow()} className='btn btn-success btn-xs'>Ship Now</btn>}
                {(price && paid && shipped) && <span className='text-success font-bold'>Shipped</span>}
                {/* {shipped ? <span className='text-success font-bold'>Shipped</span>:<btn onClick={() => shipNow()} className='btn btn-success btn-xs'>Ship Now</btn>} */}
            </td>
        </tr>
    );
};

export default ManageOrderRow;