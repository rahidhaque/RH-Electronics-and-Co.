import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmProduct = ({ deleteProduct, setDeleteProduct, refetch }) => {

    const { _id, name } = deleteProduct;
    console.log(deleteProduct);
    const confirmDelete = () => {
        fetch(`https://desolate-reaches-30083.herokuapp.com/product/${_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(` ${name} is deleted`);
                    setDeleteProduct(null);
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to delete {name}?</h3>
                    <p className="py-4 text-warning">Changes cannot be undone!</p>
                    <div className="modal-action">
                        <button className="btn btn-xs btn-warning" onClick={() => confirmDelete()}><span className='px-2'>Remove Order</span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmProduct;