import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";


export const GET = async (request, {params}) =>{
    const db = await connectDB();
    const blogCollection = db.collection('blog');
    try {
        const {id} = await params;
        const result = await blogCollection.findOne({_id: new ObjectId(id)});
        return Response.json({ result });
    } catch (error) {
        console.log(error);
    }
}