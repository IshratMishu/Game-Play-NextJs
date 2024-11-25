export const getRoomGames = async()=>{
    const res = await fetch('http://localhost:3000/roomGames/api/getAll');
    const roomGames = res.json();
    return roomGames;
}

export const getRoomGamesDetails = async(id)=>{
    const res = await fetch(`http://localhost:3000/roomGames/api/${id}`);
    const roomGame = res.json();
    return roomGame;
}