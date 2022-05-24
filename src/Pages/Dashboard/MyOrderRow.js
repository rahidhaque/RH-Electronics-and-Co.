import React from 'react';

const MyOrderRow = ({ purchase, index, refetch }) => {
    const { img, product, address, quantity } = purchase;
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
        </tr>
    );
};

export default MyOrderRow;