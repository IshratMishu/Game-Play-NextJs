import Image from "next/image";
import { BsDoorClosed } from "react-icons/bs";
import { GiDuration, GiTabletopPlayers } from "react-icons/gi";
import { PiFlagBannerFill, PiPuzzlePieceLight } from "react-icons/pi";
import { LuHelpingHand } from "react-icons/lu";
import Link from "next/link";

const RoomGamesCard = ({ roomGame }) => {
    const { _id, price, title, puzzles, equipment, help, players, doors, duration, img } = roomGame;
    return (
        <div>
            <div className="mx-auto max-w-[340px] space-y-3 rounded-lg bg-[#302f2fbf]">
                <Image height={200} width={350} alt="photo" src={img} className="object-cover rounded-t-lg h-48"></Image>
                <div className="px-4 pb-3 space-y-2">
                    <h1 className="text-lg font-medium">{title}</h1>
                    <p className="text-sm font-medium">{price}</p>
                    <div className="flex justify-between text-[#a19e9e] text-sm">
                        <div className="space-y-1">
                            <p className="flex items-center gap-1"><GiTabletopPlayers className="text-white" />{players}</p>
                            <p className="flex items-center gap-1"><BsDoorClosed className="text-white" />{doors}</p>
                            <p className="flex items-center gap-1"><GiDuration className="text-white" />{duration}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="flex items-center gap-1"><PiPuzzlePieceLight className="text-[--primary]" />{puzzles}</p>
                            <p className="flex items-center gap-1"><LuHelpingHand className="text-[--primary]" />{help}</p>
                            <p className="flex items-center gap-1"><PiFlagBannerFill className="text-[--primary]" />{equipment}</p>
                        </div>
                    </div>
                    <hr />
                    <Link href={`/roomGames/${_id}`}><button className="rounded-lg bg-[--primary] px-4 py-1 font-medium hover:bg-[#000D06] w-full mt-3">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default RoomGamesCard;