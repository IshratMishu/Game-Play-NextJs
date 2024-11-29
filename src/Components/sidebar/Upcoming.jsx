import Image from 'next/image';
import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { IoTimerOutline } from 'react-icons/io5';

const Upcoming = () => {
    return (
        <div>
            <h1>Upcoming Room’s Game</h1>
            <hr />
            <div>
                <Image width={50} height={50} alt='photo' src='/assets/images.jpg'></Image>
                <h2>The Apostle Room’s</h2>
                <p className='flex items-center'><FaLocationDot /> New York</p>
                <p className='flex items-center'><IoTimerOutline /> 90 Min</p>
            </div>
        </div>
    );
};

export default Upcoming;