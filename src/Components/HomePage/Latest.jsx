'use client'
import Image from "next/image";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoPlaySharp } from "react-icons/io5";


const Latest = () => {
    const [selectedGame, setSelectedGame] = useState(null);

    const gameItems = [
        {
            title: "scary-horror-escape-room-games",
            name: "Horror Room"
        },
        {
            title: "ragdoll-archers",
            name: "Ragdoll"
        },
        {
            title: "buildnow-gg",
            name: "Build Now gg"
        },
        {
            title: "hazmob-fps-online-shooter",
            name: "Online Shooter"
        },
        {
            title: "stickman-prison-counter-assault",
            name: "Stickman Prison"
        },
        {
            title: "racing-limits",
            name: "Racing Limits"
        },
    ]


    const handlePlayGame = (game) => {
        setSelectedGame(game);
    };

    return (
        <div className="bg-cover max-w-screen-xl mx-auto mt-10 relative">
            <h1 className="text-center text-4xl font-bold tracking-wider">PLAY NOW</h1>
            <p className="text-center text-sm pt-4 font-Basote">Try our online games!</p>
            <div className="grid grid-cols-3 gap-5 mt-5">
                {
                    gameItems.map((game, index) => <div key={game.name} className="cursor-pointer text-center space-y-4 p-4 rounded-md relative group">
                        <Image className="mx-auto h-48 shadow shadow-[--primary]" width={350} height={100} src={`/assets/${index + 1}.png`} alt="photos"></Image>

                        <IoPlaySharp onClick={() => handlePlayGame(game)} className="absolute opacity-0 group-hover:opacity-100 transition-all duration-200 delay-100 top-16 left-40 text-6xl shadow-md shadow-black border-4 border-[--primary] rounded-full p-2" />

                        <p className="group-hover:text-[--primary]">{game.name}</p>
                    </div>)
                }

            </div>

            {selectedGame && (
                <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
                    <div className="relative">
                        <iframe width="800" height="450" src={`https://www.crazygames.com/embed/${selectedGame.title}`} title={selectedGame.name} allow="gamepad"></iframe>
                        <button
                            onClick={() => setSelectedGame(null)}
                            className="absolute top-0 right-0 bg-[--primary] text-white p-2 rounded-full">
                            <IoMdClose />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Latest;

