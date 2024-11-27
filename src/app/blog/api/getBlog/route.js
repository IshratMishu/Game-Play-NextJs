import { connectDB } from "@/lib/connectDB"

export const GET = async () =>{
    const db = await connectDB();
    const blogCollection = db.collection('blog');
    try {
        const result = await blogCollection.find().toArray();
        return Response.json(result)
    } catch (error) {
        console.log(error);
    }
}