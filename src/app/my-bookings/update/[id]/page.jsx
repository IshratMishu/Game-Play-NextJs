'use client'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Update = ({ params }) => {
    const router = useRouter();
    const session = useSession();
    const [booking, setBooking] = useState([]);

    const loadBooking = async () => {
        const { id } = await params;
        const bookingDetail = await fetch(`http://localhost:3000/my-bookings/api/delete-booking/${id}`)
        const data = await bookingDetail.json();
        setBooking(data.data);
    }

    const handleUpdate = async (event) => {
        event.preventDefault();
        const updatedBooking = {
            date: event.target.date.value,
        };
        const resp = await fetch(
            `http://localhost:3000/my-bookings/api/delete-booking/${params.id}`,
            {
                method: "PATCH",
                body: JSON.stringify(updatedBooking),
                headers: {
                    "content-type": "application/json",
                },
            }
        );
        if (resp.status === 200) {
            toast.success("Updated Successfully");
            router.push('/my-bookings')
        }
    };

    useEffect(() => {
        loadBooking()
    }, [params])


    return (
        <div className="space-y-6 max-w-screen-xl mx-auto mt-28 px-16">
            <p className="text-sm text-zinc-500 text-center">You can only update the date of {booking.serviceTitle}</p>
            <div>
                <form className="space-y-6 border px-5 py-10 rounded" onSubmit={handleUpdate}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2 text-sm">
                            <label className="text-sm font-medium text-zinc-700">
                                Name
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none bg-transparent font-Basote"
                                placeholder="your name"
                                name="name"
                                type="text"
                                defaultValue={session?.data?.user?.name}
                                disabled
                            />
                        </div>
                        <div className="space-y-2 text-sm">
                            <label className="text-sm font-medium text-zinc-700">
                                Email
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none bg-transparent font-Basote"
                                placeholder="your email"
                                name="email"
                                type="email"
                                defaultValue={session?.data?.user?.email}
                                disabled
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2 text-sm">
                            <label className="text-sm font-medium text-zinc-700">
                                Date
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none bg-transparent font-Basote"
                                name="date"
                                type="date"
                                defaultValue={booking.date}
                            />
                        </div>
                        <div className="space-y-2 text-sm">
                            <label className="text-sm font-medium text-zinc-700">
                                Price
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none bg-transparent font-Basote"
                                name="price"
                                type="text"
                                defaultValue={booking.price}
                                disabled
                            />
                        </div>
                    </div>
                    <button className="rounded-md bg-[--primary] py-1 w-full hover:bg-transparent border border-[--primary]">Update</button>
                </form>
            </div>
        </div>
    );
};

export default Update;