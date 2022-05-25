import React from 'react';

const ManageProductsRow = ({ product, index, refetch, setDeleteProduct }) => {
    const { name, img, description, minQuantity, availableQuantity, price } = product;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src={img} alt="" />
                </div>
            </div></td>
            <td>{minQuantity}</td>
            <td>{availableQuantity}</td>
            <td>{price}</td>
            <td>
                <label onClick={() => setDeleteProduct(product)} for="delete-confirm-modal" class="btn btn-xs btn-warning"><span className='px-2'>Remove</span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
            </td>

        </tr>
    );
};

export default ManageProductsRow;