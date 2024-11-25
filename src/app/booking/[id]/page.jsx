'use client'
import { getRoomGamesDetails } from "@/lib/roomGames";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


const Booking = ({ params }) => {
    const session = useSession();
    const [ result, setResult] = useState([]);

    const loadGames = async () => {
        const gameDetails = await getRoomGamesDetails(params.id);
        setResult(gameDetails.result)
    };
    const { _id, price, img, title, description, players, doors, duration, puzzles, help, equipment } = result|| {};

    const handleBooking = async (event) => {
        event.preventDefault();
    }

    useEffect(() => {
        loadGames()
    }, [params])

    return (
        <div className="space-y-6 max-w-screen-xl mx-auto mt-28 px-16">
            <div className="space-y-1 text-center">
                <h3 className="text-xl font-medium">Book {title}</h3>
                <p className="text-sm text-zinc-500">Please fill in the form to book {title}.</p>
            </div>
            <div>
                <form className="space-y-6 border px-5 py-10 rounded" onSubmit={handleBooking}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2 text-sm">
                            <label className="text-sm font-medium text-zinc-700">
                                Name
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none bg-transparent"
                                placeholder="your name"
                                name="name"
                                type="text"
                                defaultValue={session?.data?.user?.name}
                            />
                        </div>
                        <div className="space-y-2 text-sm">
                            <label className="text-sm font-medium text-zinc-700">
                                Email
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none bg-transparent"
                                placeholder="your email"
                                name="email"
                                type="email"
                                defaultValue={session?.data?.user?.email}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2 text-sm">
                            <label className="text-sm font-medium text-zinc-700">
                                Date
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none bg-transparent"
                                name="date"
                                type="date"
                            />
                        </div>
                        <div className="space-y-2 text-sm">
                            <label className="text-sm font-medium text-zinc-700">
                                Price
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none bg-transparent"
                                name="price"
                                type="text"
                                defaultValue={price}
                                disabled
                            />
                        </div>
                    </div>
                    <button className="rounded-md bg-[--primary] py-1 w-full hover:bg-transparent border border-[--primary]">Book</button>
                </form>
            </div>
        </div>
    );
};

export default Booking;