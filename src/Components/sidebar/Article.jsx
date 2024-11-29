import Image from 'next/image';
import React from 'react';

const Article = () => {
    return (
        <div className='bg-black p-4'>
            <h1>Latest Blog</h1>
            <div className='flex items-center'>
                <Image width={50} height={50} alt='photo' src='/assets/11.jpg'></Image>
                <p>How Long Is The Schedule Time On Game Scape</p>
            </div>
            <div className='flex items-center'>
                <Image width={50} height={50} alt='photo' src='/assets/13.jpg'></Image>
                <p>Tips For Designing The Latest Room Escape Games</p>
            </div>
            <div className='flex items-center'>
                <Image width={50} height={50} alt='photo' src='/assets/12.jpg'></Image>
                <p>Our New Room “The Abandoned Hangar” Released</p>
            </div>
        </div>
    );
};

export default Article;