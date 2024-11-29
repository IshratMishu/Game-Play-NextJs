import Image from 'next/image';
import React from 'react';
import { FaClock, FaDoorOpen, FaUnlockAlt } from 'react-icons/fa';

const Working = () => {
    return (
        <div className='flex gap-10 items-center max-w-screen-xl mx-auto px-8 mt-28'>
            <div className='w-3/5 space-y-4'>
                <h1 className='text-3xl font-semibold'>How our room game works!</h1>
                <div className='flex items-center gap-4 font-Basote'>
                    <FaUnlockAlt className='bg-[--primary] text-6xl px-3 rounded-full' />
                    <div>
                        <h3 className='text-lg font-semibold'>You Are Locked In</h3>
                        <p className='text-xs text-[#a19e9e]'>The goal? Solve intricate puzzles, uncover hidden secrets, and piece together clues to unlock the door and escape! With every corner hiding a challenge, it’s a thrilling test of wit, logic, and determination.</p>
                    </div>
                </div>

                <div className='flex items-center gap-4 font-Basote'>
                    <FaClock className='bg-[--primary] text-6xl px-3 rounded-full' />
                    <div>
                        <h3 className='text-lg font-semibold'>The Clock Is Ticking</h3>
                        <p className='text-xs text-[#a19e9e]'>Trapped in a mysterious room, you must solve puzzles, decode clues, and use your wits to escape before time runs out. Every second counts in this race against the clock—can you escape quickly enough?</p>
                    </div>
                </div>

                <div className='flex items-center gap-4 font-Basote'>
                    <FaDoorOpen className='bg-[--primary] text-6xl px-3 rounded-full' />
                    <div>
                        <h3 className='text-lg font-semibold'>Escape Quickly</h3>
                        <p className='text-xs text-[#a19e9e]'>Our Room Game is an adrenaline-pumping offline escape challenge. You’re locked in, and the clock is ticking! Solve puzzles, uncover hidden clues, and think fast to escape quickly before time runs out</p>
                    </div>
                </div>
            </div>

            <div className='w-2/5'>
                <Image height={100} width={400} src='/assets/how.jpg' alt='photo'></Image>
            </div>
        </div>
    );
};

export default Working;