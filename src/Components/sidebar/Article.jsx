import Image from 'next/image';
import React from 'react';

const Article = () => {
    return (
        <div className='bg-black px-6 py-4'>
            <h1>Latest Blog</h1>
            <div className='flex items-center gap-2 font-Basote text-sm pt-4 hover:text-[#a19e9e] cursor-pointer'>
                <Image width={50} height={50} alt='photo' src='/assets/11.jpg'></Image>
                <p>How Long Is The Schedule Time On Game Scape</p>
            </div>
            <div className='flex items-center gap-2 font-Basote text-sm pt-2 hover:text-[#a19e9e] cursor-pointer'>
                <Image width={50} height={50} alt='photo' src='/assets/13.jpg'></Image>
                <p>Tips For Designing The Latest Room Escape Games</p>
            </div>
            <div className='flex items-center gap-2 font-Basote text-sm pt-2 hover:text-[#a19e9e] cursor-pointer'>
                <Image width={50} height={50} alt='photo' src='/assets/12.jpg'></Image>
                <p>Our New Room “The Abandoned Hangar” Released</p>
            </div>
        </div>
    );
};

export default Article;