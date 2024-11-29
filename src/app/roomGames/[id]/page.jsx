import { getRoomGamesDetails } from "@/lib/roomGames";
import Image from "next/image";
import Link from "next/link";
import { BsDoorClosed } from "react-icons/bs";
import { GiDuration, GiTabletopPlayers } from "react-icons/gi";
import { LuHelpingHand } from "react-icons/lu";
import { PiFlagBannerFill, PiPuzzlePieceLight } from "react-icons/pi";

export const metadata = {
    title: "Details",
    description: "Gaming",
};


const RoomGamesDetails = async ({ params }) => {
    const { id } = await params;
    const gameDetails = await getRoomGamesDetails(id);
    const {_id, price, img, title, description, players, doors, duration, puzzles, help, equipment } = gameDetails.result;


    return (
        <div className="mt-28 max-w-screen-xl mx-auto px-8 relative">
            <Image height={100} width={1280} src={img} alt='photo' className="object-cover h-96 mx-auto"></Image>
            <div className="absolute top-56 px-10">
                <p className="text-2xl font-semibold">{title}</p>
                <p className="font-semibold bg-[--primary] px-2 py-1">{price}</p>
            </div>
            <div className="bg-[#302f2fbf] px-4 py-6">
                <h6 className="text-xl font-semibold">Details of {title}</h6>
                <p className="text-sm pt-2 text-gray-400 font-Basote">{description}</p>
            </div>

            <div className="flex gap-10 text-xl font-medium justify-center py-6">
                <div className="space-y-2">
                    <p className="flex items-center gap-1"><GiTabletopPlayers className="text-gray-400" />{players}</p>
                    <p className="flex items-center gap-1"><BsDoorClosed className="text-gray-400" />{doors}</p>
                    <p className="flex items-center gap-1"><GiDuration className="text-gray-400" />{duration}</p>
                </div>
                <div className="space-y-2">
                    <p className="flex items-center gap-1"><PiPuzzlePieceLight className="text-[--primary]" />{puzzles}</p>
                    <p className="flex items-center gap-1"><LuHelpingHand className="text-[--primary]" />{help}</p>
                    <p className="flex items-center gap-1"><PiFlagBannerFill className="text-[--primary]" />{equipment}</p>
                </div>
            </div>

            <div className="flex justify-center">
               <Link href={`/booking/${_id}`}> <button className="bg-[--primary] px-10 py-2 hover:bg-black border border-[--primary] rounded-xl">Book Now</button></Link>
            </div>

        </div>
    );
};

export default RoomGamesDetails;