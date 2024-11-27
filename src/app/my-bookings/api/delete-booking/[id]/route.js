import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const DELETE = async (request, { params }) => {
    const db = await connectDB();
    const bookingCollection = db.collection('bookings');
    try {
        const { id } = await params;
        const resp = await bookingCollection.deleteOne({ _id: new ObjectId(id) });
        return Response.json({ message: 'successfully deleted', response: resp });
    } catch (error) {
        console.log(error);
    }
}


//update the booking form
export const PATCH = async (request, { params }) => {
    const db = await connectDB();
    const bookingCollection = db.collection('bookings');
    const { date } = await request.json();
    try {
        const { id } = await params;
        const resp = await bookingCollection.updateOne(
            { _id: new ObjectId(id) },
            {
                $set: {
                    date
                }
            },
            {
                upsert: true
            }
        );
        return Response.json({ message: 'Booking Updated', resp });
    } catch (error) {
        console.log(error);
    }
}


//get the updated data
export const GET = async (request, { params }) => {
    const db = await connectDB();
    const bookingCollection = db.collection('bookings');
    try {
        const { id } = await params;
        const resp = await bookingCollection.findOne({ _id: new ObjectId(id) });
        return Response.json({ message: 'booking get', data: resp });
    } catch (error) {
        console.log(error);
    }
}