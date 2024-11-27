import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";


export const GET = async (request, {params}) =>{
    const db = await connectDB();
    const blogCollection = db.collection('blog');
    const commentCollection = db.collection('comment');
    try {
        const {id} = await params;
        const result = await blogCollection.findOne({_id: new ObjectId(id)});
        const myComment = await commentCollection.find({ blogId: id }).toArray();
        return Response.json({ result, myComment });
    } catch (error) {
        console.log(error);
    }
}



export const POST = async (request) =>{
    const newComment = await request.json();
    const db = await connectDB();
    const commentCollection = db.collection('comment');
    try {
        const res = await commentCollection.insertOne(newComment);
        return Response.json({ message: 'comment posted', newComment });
    } catch (error) {
        console.log(error);
    }
}


