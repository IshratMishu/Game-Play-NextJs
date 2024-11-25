import { PiGameControllerFill } from "react-icons/pi";
import { FaFacebook, FaTwitch } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="space-y-5 mt-28">
            <hr />
            <div className="flex items-center gap-1 justify-center">
                <PiGameControllerFill className="text-[--primary] text-4xl" />
                <h1 className="text-2xl">Play</h1>
            </div>
            <div className="flex items-center gap-5 justify-center">
                <FaFacebook className="bg-[--primary] rounded-full p-1 text-white text-2xl"/>
                <FaTwitch className="bg-[--primary] rounded-full p-1 text-white text-2xl"/>
                <FaXTwitter className="bg-[--primary] rounded-full p-1 text-white text-2xl"/>
                <BsDiscord className="bg-[--primary] rounded-full p-1 text-white text-2xl"/>
            </div>
            <h1 className="text-center">Copyright © Play 2024. All Right Reserved.</h1>
        </div>
    );
};

export default Footer;