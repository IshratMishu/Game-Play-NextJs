import Image from "next/image";
import { BsDoorClosed } from "react-icons/bs";
import { GiDuration, GiTabletopPlayers } from "react-icons/gi";
import { PiFlagBannerFill, PiPuzzlePieceLight } from "react-icons/pi";
import { LuHelpingHand } from "react-icons/lu";
import Link from "next/link";

const RoomGamesCard = ({ roomGame }) => {
    const {_id, price, title, puzzles, equipment, help, players, doors, duration, img } = roomGame;
    return (
        <div>
            <div className="mx-auto max-w-[340px] space-y-3 rounded-lg bg-[#302f2fbf]">
                <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
                    <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                        {/* love  */}
                        <div className="flex items-center">
                            <svg width={30} className="cursor-pointer fill-transparent stroke-white stroke-2 hover:fill-red-500 hover:stroke-red-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></svg>
                        </div>
                        <button className="rounded-lg bg-[--primary] px-2 py-1 text-sm font-medium duration-200 hover:bg-black/90">{price}</button>
                    </div>
                    <Image height={400} width={400} alt="photo" src={img} className="rounded-lg object-cover"></Image>
                </div>   
                <div className="px-4 pb-3 space-y-3">
                <h1 className="text-lg font-medium">{title}</h1>
                 <div className="flex justify-between text-gray-400 text-sm">
                 <div className="space-y-1">
                        <p className="flex items-center gap-1"><GiTabletopPlayers className="text-white"/>{players}</p>
                        <p className="flex items-center gap-1"><BsDoorClosed className="text-white"/>{doors}</p>
                        <p className="flex items-center gap-1"><GiDuration className="text-white"/>{duration}</p>
                    </div>
                    <div className="space-y-1">
                        <p className="flex items-center gap-1"><PiPuzzlePieceLight className="text-[--primary]"/>{puzzles}</p>
                        <p className="flex items-center gap-1"><LuHelpingHand className="text-[--primary]"/>{help}</p>
                        <p className="flex items-center gap-1"><PiFlagBannerFill className="text-[--primary]"/>{equipment}</p>
                    </div>
                 </div>
                 <hr />
                 <Link href={`/roomGames/${_id}`}><button className="rounded-lg bg-[--primary] px-4 py-1 font-medium text-white hover:bg-black w-full mt-3">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default RoomGamesCard;