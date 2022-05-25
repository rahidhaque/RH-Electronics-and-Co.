import React from 'react';

const UserRow = ({ user }) => {
    const { email, role } = user;
    return (
        <tr>
            <td>{email}</td>
            <td>{role === 'admin' ? <button class="btn btn-xs btn-success" disabled="disabled">Already Admin</button> : <button className="btn btn-xs"><span className='px-2'>Make Admin</span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></button>}</td>
        </tr >
    );
};

export default UserRow;