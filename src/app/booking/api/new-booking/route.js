import { connectDB } from "@/lib/connectDB";

export const POST = async (request) =>{
    const newBooking = await request.json();
    const db = await connectDB();
    const bookingCollection = db.collection('bookings');
    try {
        const res = await bookingCollection.insertOne(newBooking);
        return Response.json({ message: 'successful' });
    } catch (error) {
        console.log(error);
    }
}