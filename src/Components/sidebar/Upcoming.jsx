import Image from 'next/image';
import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { IoTimerOutline } from 'react-icons/io5';

const Upcoming = () => {
    return (
        <div className='px-6 py-4 bg-black mt-10'>
            <h1>Upcoming Room’s Game</h1>
            <hr className='my-5'/>
            <div className='flex items-center gap-5'>
                <Image width={80} height={50} alt='photo' src='/assets/images.jpg'></Image>
                <div className='font-Basote'>
                <h2>The Apostle Room’s</h2>
                <p className='flex items-center gap-2'><FaLocationDot className='text-[--primary]'/> New York</p>
                <p className='flex items-center gap-2'><IoTimerOutline className='text-[--primary]'/> 90 Min</p>
                </div>
            </div>
        </div>
    );
};

export default Upcoming;