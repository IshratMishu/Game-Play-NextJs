export const getBlog = async()=>{
    const res = await fetch('http://localhost:3000/blog/api/getBlog');
    const blog = res.json();
    return blog;
}

export const getBlogDetails = async(id)=>{
    const res = await fetch(`http://localhost:3000/blog/api/${id}`);
    const blog = res.json();
    return blog;
}