import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const DELETE = async (request, {params}) =>{
    const db = await connectDB();
    const bookingCollection = db.collection('bookings');
    try {
        const {id} = await params;
       const resp= await bookingCollection.deleteOne({_id: new ObjectId(id)});
        return Response.json({ message: 'deleted' , resp});
    } catch (error) {
        console.log(error);
    }
}