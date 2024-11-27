import Banner from "./Banner";
import Blog from "./Blog";
import Latest from "./Latest";
import RoomGames from "./RoomGames";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Latest></Latest>
            <RoomGames></RoomGames>
            <Blog></Blog>
        </div>
    );
};

export default HomePage;