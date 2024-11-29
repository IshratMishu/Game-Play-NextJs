'use client'
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";


const Dropdown = () => {
    const [open, setOpen] = useState(false);
    const dropDownRef = useRef(null);
    const session = useSession();

    useEffect(() => {
        const close = (e) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
                setOpen(false)
            }
        };
        document.addEventListener('mousedown', close);
        return () => {
            document.removeEventListener('mousedown', close)
        }
    }, []);

    return (
        <div ref={dropDownRef} className="relative">
            <button onClick={() => setOpen((prev) => !prev)}>
                <Image width={28} height={28} className="border border-white rounded-full object-cover" alt="Photo" src={session?.data?.user?.image ? session?.data?.user?.image : 'https://i.ibb.co/31dsFpW/icon-7797704-640.webp'}></Image>
            </button>
            <ul className={`${open ? 'visible duration-300' : 'invisible'} absolute -right-5 top-10 w-fit bg-black shadow-xl space-y-2 p-4 font-medium font-Basote`}>
                <li>{session?.data?.user?.name}</li>
                <li>{session?.data?.user?.email}</li>
                <li onClick={() => signOut()} className='hover:text-[--primary] cursor-pointer'>Logout</li>
            </ul>
        </div>
    );
};

export default Dropdown;