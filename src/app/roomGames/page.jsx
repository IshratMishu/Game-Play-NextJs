import Image from "next/image";
import { BsDoorClosed } from "react-icons/bs";
import { GiDuration, GiTabletopPlayers } from "react-icons/gi";
import { PiFlagBannerFill, PiPuzzlePieceLight } from "react-icons/pi";
import { LuHelpingHand } from "react-icons/lu";
import Link from "next/link";
import { getRoomGames } from "@/lib/roomGames";
export const metadata = {
    title: "Room Games",
    description: "Gaming",
  };

const page = async () => {
    const roomGames =await getRoomGames();

    return (
        <div className="grid grid-cols-3 gap-10 mt-32 max-w-screen-xl mx-auto font-Basote">
      {
        roomGames?.map(game => <div key={game._id}>
            <div className="mx-auto max-w-[340px] space-y-3 rounded-lg bg-[#302f2fbf]">
                    <Image height={200} width={350} alt="photo" src={game.img} className="object-cover h-48 rounded-t-lg"></Image>
                <div className="px-4 pb-3 space-y-2">
                <h1 className="text-lg font-medium">{game.title}</h1>
                <p className="text-sm font-medium">{game.price}</p>
                 <div className="flex justify-between text-[#a19e9e] text-sm">
                 <div className="space-y-1">
                        <p className="flex items-center gap-1"><GiTabletopPlayers className="text-white"/>{game.players}</p>
                        <p className="flex items-center gap-1"><BsDoorClosed className="text-white"/>{game.doors}</p>
                        <p className="flex items-center gap-1"><GiDuration className="text-white"/>{game.duration}</p>
                    </div>
                    <div className="space-y-1">
                        <p className="flex items-center gap-1"><PiPuzzlePieceLight className="text-[--primary]"/>{game.puzzles}</p>
                        <p className="flex items-center gap-1"><LuHelpingHand className="text-[--primary]"/>{game.help}</p>
                        <p className="flex items-center gap-1"><PiFlagBannerFill className="text-[--primary]"/>{game.equipment}</p>
                    </div>
                 </div>
                 <hr />
                 <Link href={`/roomGames/${game._id}`}><button className="rounded-lg bg-[--primary] px-4 py-1 font-medium hover:bg-[#000D06] w-full mt-3">View Details</button></Link>
                </div>
            </div>
        </div>)
      }
        </div>
    );
};

export default page;