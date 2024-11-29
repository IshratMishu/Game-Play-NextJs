import { getBlog } from "@/lib/blogGet";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const Blog = async() => {
    const blogs = await getBlog();

    return (
        <div className="mt-28 max-w-screen-xl mx-auto">
            <h1 className="text-center text-4xl font-medium">Blog</h1>
            <p className="text-center text-sm pt-4 font-Basote">Read our unique challenges and unlock thrilling adventures in every room.</p>
            <div className="grid grid-cols-3 gap-5 mt-10">
                {
                    blogs.map((oneBlog, index) => <div key={index} className="mx-auto p-6 space-y-2 relative">
                        <Image height={100} width={200} src={oneBlog.image} alt="photo" className="w-full"></Image>
                        <p className="absolute top-52 py-2 px-4 bg-black">{oneBlog.type}</p>
                        <h6 className="text-xl font-medium font-Basote">{oneBlog.title}</h6>
                        <p className="text-sm font-Basote">{oneBlog.description.slice(0, 150)}. . . .</p>
                        <Link href={`/blog/${oneBlog._id}`}><button className="font-semibold text-[--primary] flex items-center hover:underline mt-4">Read More <MdKeyboardDoubleArrowRight /></button></Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blog;