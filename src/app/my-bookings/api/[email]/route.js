import { connectDB } from "@/lib/connectDB";

export const GET = async (request, {params}) =>{
    const db = await connectDB();
    const bookingCollection = db.collection('bookings');
    try {
        const {email} = await params;
        const myBooking = await bookingCollection.find({email}).toArray();
        return Response.json({ myBooking });
    } catch (error) {
        console.log(error);
    }
}