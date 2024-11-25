import { connectDB } from "@/lib/connectDB"

export const GET = async () =>{
    const db = await connectDB();
    const roomGamesCollection = db.collection('roomGames');
    try {
        const result = await roomGamesCollection.find().toArray();
        return Response.json(result)
    } catch (error) {
        console.log(error);
    }
}