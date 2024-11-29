'use client'
import Sidebar from "@/Components/sidebar/Sidebar";
import { getBlogDetails } from "@/lib/blogGet";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsDiscord } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiBalaclava } from "react-icons/gi";
import { MdDateRange, MdTipsAndUpdates } from "react-icons/md";


const BlogDetails = ({ params }) => {
    const session = useSession();
    const [result, setResult] = useState([]);
    const [showComment, setShowComment] = useState([]);

    const loadBlogs = async () => {
        const { id } = await params;
        const blogDetails = await getBlogDetails(id);
        setResult(blogDetails.result)
    };
    const { _id, image, title, description, type } = result;

    const loadComment = async () => {
        const resp = await fetch(`http://localhost:3000/blog/api/${_id}`)
        const data = await resp.json();
        setShowComment(data?.myComment);
    }

    const handleComment = async (event) => {
        event.preventDefault();
        const newComment = {
            comment: event.target.comment.value,
            blogId: _id
        }

        const res = await fetch(`http://localhost:3000/blog/api/${_id}`, {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                'content-type': 'application/json'
            }

        })
        const resp = await res.json();
        if (resp.ok) {
            loadComment();
        }

    }


    useEffect(() => {
        loadBlogs();

        if (_id) {
            loadComment();
        }
    }, [params, _id])

    return (
        <div className="mt-28 max-w-screen-xl mx-auto px-8">
            <div className="bg-cover min-h-[300px] relative text-center" style={{ backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.9) 10%, rgba(5, 121, 33, 0.2) 60%), url('/assets/bg3.jpg')" }}>
                <div className="absolute top-20 left-1/3">
                    <p className="font-semibold text-2xl tracking-wider max-w-96">{title}</p>
                    <div className="flex items-center gap-2 p-4">
                        <p className="flex items-center"><GiBalaclava className="text-[--primary]" /> Ishrat Mishu</p>
                        <p className="flex items-center"><MdDateRange className="text-[--primary]" /> November 27, 2024</p>
                        <p className="flex items-center"><MdTipsAndUpdates className="text-[--primary]" /> {type}</p>
                    </div>
                </div>
            </div>

         <div className="mt-16 flex gap-10">
         <div>
          <div className="space-y-4">
                <Image height={300} width={600} src={image} alt="photo" className=" "></Image>
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="text-sm text-zinc-400">{description}</p>
            </div>

            <div className="flex justify-between mt-5">
                <div>
                    <p className="text-xl font-medium pb-2">Tags: </p>
                    <p>{type}</p>
                </div>
                <div>
                    <p className="text-xl font-medium pb-2">Share:</p>
                    <div className="flex items-center gap-2">
                        <FaFacebook className="bg-[--primary] rounded-full p-1 text-white text-2xl" />
                        <FaXTwitter className="bg-[--primary] rounded-full p-1 text-white text-2xl" />
                        <BsDiscord className="bg-[--primary] rounded-full p-1 text-white text-2xl" />
                    </div>
                </div>
            </div>

            <hr className="my-10" />
            <div>
                <h3 className="text-xl font-semibold pb-4">Comments</h3>
                {showComment?.length > 0 ? (
                    showComment?.map((comment) => (
                        <div key={comment._id} className="">
                            <div className="flex items-center gap-2">
                                <Image width={18} height={18} className="border border-white rounded-full object-cover" alt="Photo" src={session?.data?.user?.image ? session?.data?.user?.image : 'https://i.ibb.co/31dsFpW/icon-7797704-640.webp'}></Image>
                                <p className="font-medium">{session?.data?.user?.name}</p>
                            </div>
                            <p className="px-8 text-sm pb-2">{comment.comment}</p>
                        </div>
                    ))
                ) : (
                    <p>No comments yet. Be the first to comment!</p>
                )}
            </div>


            <div>
                <p className="text-2xl pb-2 pt-5">Leave a Comment</p>
                <p>Required fields are marked *</p>

                <form className="w-full space-y-6 mt-5" onSubmit={handleComment}>
                    <div className="space-y-2 text-sm text-zinc-700">
                        <label className="block font-medium">
                            Name*
                        </label>
                        <input
                            className="h-10 w-full rounded border px-3 py-2 text-sm focus:outline-none bg-transparent"
                            defaultValue={session?.data?.user?.name}
                            type="text"
                            disabled
                        />
                    </div>

                    <div className="space-y-2 text-sm text-zinc-700">
                        <label className="block font-medium">
                            Comment*
                        </label>
                        <textarea
                            className="min-h-[80px] w-full rounded border px-3 py-2 focus:outline-none bg-transparent"
                            name="comment"
                        />
                    </div>

                    <button className="rounded-md bg-[--primary] px-4 py-2 hover:bg-transparent border border-[--primary]">Post Comment </button>
                </form>
            </div>
            </div>

            <div>
<Sidebar></Sidebar>
          </div>

         </div>

        </div>
    );
};

export default BlogDetails;