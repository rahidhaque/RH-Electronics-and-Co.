import React from 'react';

const MyProtfolio = () => {
    return (
        <div>
            <div className='w-50'>
                <h2 className='text-center mt-20 mb-5'>About Me</h2>
                <p className='text-xl fw-bold text-center'>My name is S M RAHID HAQUE</p>
                <p className='text-xl fw-bold text-center'>Email: ontirahid@yahoo.com</p>
                <p className='text-center my-3'>
                    <small>Educational Background: <span className='font-bold'>AIUB</span></small>
                </p>
                <p className='text-center my-3'>
                    <small>Skills:
                        <ul className='font-bold'>
                            <li>HTML</li>
                            <li>CSS with library bootstrap and tailwind</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Mongodb</li>
                            <li>Node Js</li>
                        </ul>
                    </small>
                </p>
                <p className='text-center'>
                    <small>Projects:
                        <ul className='font-bold'>
                            <li>1. <a href="https://pondit-tutor-97e1e.web.app/">Pondit Tutor</a> </li>
                            <li>2. <a href="https://super-grocery-store.web.app/">Super Grocery Store</a> </li>
                            <li>3. <a href="https://gamers-heaven-rahid.netlify.app/">Gamers Heaven Store</a> </li>
                        </ul>
                    </small>
                </p>
            </div>
        </div>
    );
};

export default MyProtfolio;