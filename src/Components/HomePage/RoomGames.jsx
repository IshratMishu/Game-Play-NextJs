import { getRoomGames } from "@/lib/roomGames";
import RoomGamesCard from "../Crads/RoomGamesCard";
import Link from "next/link";

const RoomGames = async () => {
    const roomGames =await getRoomGames();

    return (
        <div className="mt-16 max-w-screen-xl mx-auto">
            <h1 className="text-center text-4xl font-medium">Let’s Try All Our Room Games</h1>
            <p className="text-center text-sm pt-4 font-Basote">Explore unique challenges, test your skills, and unlock thrilling adventures in every room.</p>

            <div className="grid grid-cols-3 gap-5 mt-10 font-Basote">
                {
                    roomGames?.slice(0, 3).map(roomGame => <RoomGamesCard key={roomGame._id} roomGame={roomGame}></RoomGamesCard>)
                }
            </div>
            <Link href="/roomGames"><button className="rounded-lg hover:bg-[--primary] px-6 py-2 font-medium mt-5 flex mx-auto border border-[--primary]">Explore More</button></Link>

        </div>
    );
};

export default RoomGames;