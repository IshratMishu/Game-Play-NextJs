'use client'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import { IoPlaySharp } from "react-icons/io5";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Banner = () => {
    const [showVideo, setShowVideo] = useState(false);

    const vidPlay = () => {
        setShowVideo(true);
    };

    return (
        <div className="bg-cover min-h-[600px] text-white" style={{
            backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.9) 20%, rgba(5, 121, 33, 0.2) 60%), url('/assets/bg1.jpg')"
        }}>
            <div className="flex max-w-screen-xl mx-auto pt-52 pl-20 items-center justify-between">
                <div className="space-y-4">
                    <h1 className="text-6xl font-semibold">Discover A New <br /> Era Of Cool</h1>
                    <p className="text-5xl font-medium text-[--primary]">
                        <Typewriter
                            words={['Games', 'Challenges!', 'Levels', 'Legends!']}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </p>
                    <p className="text-xl">Bored Of searching online games? Try us.</p>
                    <button className="text-xl font-semibold px-4 py-1 rounded-full flex items-center gap-1 border border-[--primary] hover:bg-[--primary]">Let’s Play <MdKeyboardDoubleArrowRight /></button>
                </div>

                <div className="pr-48 pt-20">
                    <IoPlaySharp onClick={vidPlay} className="border-4 border-[--primary] rounded-full text-7xl p-2 mb-4 shadow-md shadow-black hover:border-black transition-all duration-200" />
                    <p>HIGHLIGHTS OF 2024</p>
                    <p>29:19</p>
                </div>
            </div>


            {showVideo && (
                <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
                    <div className="relative">
                        <iframe width="800" height="450" src="https://www.youtube.com/embed/ur3w0zQ7MEY?autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        <button
                            onClick={() => setShowVideo(false)}
                            className="absolute top-0 right-0 bg-[--primary] text-white p-2 rounded-full">
                            <IoMdClose />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Banner;

