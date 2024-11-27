'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { GrUpdate } from "react-icons/gr";
import { RiDeleteBin6Fill } from "react-icons/ri";

const MyBookings = () => {
    const session = useSession();
    const [booking, setBooking] = useState([]);

    const loadData = async () => {
        const resp = await fetch(`http://localhost:3000/my-bookings/api/${session?.data?.user?.email}`)
        const data = await resp.json();
        setBooking(data?.myBooking);
    }


    const handleDelete = async (id) => {
        const deleted = await fetch(`http://localhost:3000/my-bookings/api/delete-booking/${id}`, {
            method: 'DELETE'
        })
        const resp = await deleted.json();
        if (resp?.response?.deletedCount > 0) {
            toast.success(resp?.message);
            loadData();
        }
    }


    useEffect(() => {
        loadData()
    }, [session])


    return (
        <div className="mt-28 max-w-screen-xl mx-auto">
            <div className="overflow-x-auto ">
                <table className="min-w-[90%] border mx-auto border-gray-100  my-6">
                    <thead>
                        <tr className="bg-[--primary]">
                            <th className="py-3 px-6 border-b text-start">Game Name</th>
                            <th className="py-3 px-6 border-b">Price</th>
                            <th className="py-3 px-6 border-b">Date</th>
                            <th className="py-3 px-6 border-b">Buyer Email</th>
                            <th className="py-3 px-6 border-b text-end">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking?.map(({ _id, serviceTitle, price, date, email }) => <tr key={_id} className="text-sm">
                                <th className="py-4 px-6 border-b text-start">{serviceTitle}</th>
                                <th className="py-4 px-6 border-b">{price}</th>
                                <th className="py-4 px-6 border-b">{date}</th>
                                <th className="py-4 px-6 border-b">{email}</th>
                                <th className="py-4 px-6 border-b text-end">
                                    <div className="flex items-center gap-2 text-[--primary] justify-end"><RiDeleteBin6Fill onClick={() => handleDelete(_id)} /> <Link href={`/my-bookings/update/${_id}`}><GrUpdate /></Link></div>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyBookings;