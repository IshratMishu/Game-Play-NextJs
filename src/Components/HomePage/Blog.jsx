import { getBlog } from "@/lib/blogGet";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const Blog = async () => {
    const blogs = await getBlog();

    return (
        <div className="mt-28 max-w-screen-xl mx-auto">
            <h1 className="text-center text-4xl font-medium">Blog</h1>
            <p className="text-center text-sm pt-4 font-Basote">Read our unique challenges and unlock thrilling adventures in every room.</p>
            <div className="grid grid-cols-3 gap-5 mt-10 px-8">
                {
                    blogs.map((oneBlog, index) => <div key={index} className="mx-auto  space-y-4 relative shadow shadow-[--primary] max-w-[340px]">
                        <Image height={100} width={100} src={oneBlog.image} alt="photo" className="w-full h-56"></Image>
                        <div className="px-4 pb-2">
                            <p className="absolute top-44 py-2 px-4 bg-[#000D06]">{oneBlog.type}</p>
                            <h6 className="text-lg font-medium font-Basote">{oneBlog.title}</h6>
                            <p className="text-sm font-Basote text-[#a19e9e] pt-2">{oneBlog.description.slice(0, 150)}. . . .</p>
                            <Link href={`/blog/${oneBlog._id}`}><button className="font-semibold text-[--primary] flex items-center hover:underline mt-4">Read More <MdKeyboardDoubleArrowRight /></button></Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blog;