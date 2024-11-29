import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Cat = () => {
    return (
        <div className='bg-black p-4'>
            <h1>Categories</h1>
            <p className='flex items-center'><FaArrowRightLong /> Tips</p>
            <p className='flex items-center'><FaArrowRightLong /> Rooms </p>
            <p className='flex items-center'><FaArrowRightLong /> Haunted</p>
            <p className='flex items-center'><FaArrowRightLong /> Game</p>
            <p className='flex items-center'><FaArrowRightLong /> Escape</p>
        </div>
    );
};

export default Cat;