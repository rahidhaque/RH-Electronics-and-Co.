import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmOrder = ({ deleteOrder, setDeleteOrder, refetch }) => {
    const { email, product } = deleteOrder;
    const confirmDelete = () => {
        fetch(`http://localhost:5000/purchase/${email}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(` ${product} is deleted`);
                    setDeleteOrder(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you want to delete {product}?</h3>
                    <p class="py-4 text-warning">Changes cannot be undone!</p>
                    <div class="modal-action">
                        <button className="btn btn-xs btn-warning" onClick={() => confirmDelete()}><span className='px-2'>Remove User</span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmOrder;