'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";
import { PiGameControllerFill } from "react-icons/pi";
import Dropdown from "./Dropdown";


const Navbar = () => {
    const session = useSession();

    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        document.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                navbar.classList.add('scrolled')
            } else {
                navbar.classList.remove('scrolled')
            }
        })

    }, []);



    return (
        <div className="navbar flex justify-between items-center font-semibold fixed text-white left-0 top-10 mx-auto w-full px-10 transition-all duration-200 z-50">
            <div className="flex items-center gap-1">
                <PiGameControllerFill className="text-[--primary] text-2xl" />
                <h1 >Play</h1>
            </div>
            <div className="flex gap-10 items-center">
                {
                    navItems.map(nav => (<Link className="hover:text-[--primary]" href={nav.path} key={nav.path}>{nav.title}</Link>))
                }
            </div>

            <div>
                {
                    session?.status === 'loading' && <div className="relative w-10 h-10 flex items-center justify-center"><div className="w-5 h-5 animate-[ping_2s_linear_infinite] border rounded-full border-[--primary]"></div><div className="w-5 h-5 animate-[ping_2s_linear_3s_infinite] border rounded-full border-[--primary] absolute"></div></div>
                }
                {
                    session?.status === 'unauthenticated' &&
                    <Link href="/signin"><button className="border border-[--primary] hover:bg-[--primary] px-4 py-1 rounded-full">Login</button></Link>
                }
                {session?.status === 'authenticated' &&
                    <Dropdown></Dropdown>
                }
            </div>
        </div>
    );
};



const navItems = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Gallery",
        path: "/gallery"
    },
    {
        title: "Room Games",
        path: "/roomGames"
    },
    {
        title: "News",
        path: "/news"
    },
]

export default Navbar;