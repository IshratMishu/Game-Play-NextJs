import Banner from "./Banner";
import Blog from "./Blog";
import Latest from "./Latest";
import Numbers from "./numbers";
import RoomGames from "./RoomGames";
import Working from "./Working";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Latest></Latest>
            <Numbers></Numbers>
            <RoomGames></RoomGames>
            <Working></Working>
            <Blog></Blog>
        </div>
    );
};

export default HomePage;