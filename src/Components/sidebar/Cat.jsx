import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Cat = () => {
    return (
        <div className='bg-black px-6 py-4 mt-10'>
            <h1>Categories</h1>
            <div className='font-Basote space-y-1 pt-4'>
            <p className='flex items-center gap-1'><FaArrowRightLong /> Tips</p>
            <p className='flex items-center gap-1'><FaArrowRightLong /> Rooms </p>
            <p className='flex items-center gap-1'><FaArrowRightLong /> Haunted</p>
            <p className='flex items-center gap-1'><FaArrowRightLong /> Game</p>
            <p className='flex items-center gap-1'><FaArrowRightLong /> Escape</p>
            </div>
        </div>
    );
};

export default Cat;