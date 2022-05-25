import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderRow = ({ purchase, index, refetch, setDeleteOrder }) => {
    const { _id, img, product, address, quantity, price, paid, email } = purchase;
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
            <td>
                {
                    paid ? <button className='btn btn-success btn-xs' disabled><span className=' font-bold'>Already Paid</span></button> : <label onClick={() => setDeleteOrder(purchase)} for="delete-confirm-modal" class="btn btn-xs btn-warning"><span className='px-2'>Cancel</span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
                }
            </td>
            <td>
                {(price && !paid) && <Link to={`/dashboard/payment/${email}/${_id}`}><button className='btn btn-xs btn-success px-5'>Pay Now</button></Link>}
                {(price && paid) && <span className='text-success'>Paid</span>}
            </td>
        </tr>
    );
};

export default MyOrderRow;