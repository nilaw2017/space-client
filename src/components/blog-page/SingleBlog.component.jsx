import { useState, useEffect } from "react";
import { useParams } from "react-router";

const SingleBlog = ()=> {
    const [blog, setBlog] = useState({})

    const params = useParams()    
    useEffect(()=> {
        const fetchBlogData = async ()=> {
            // console.log('params',params)
            const res = await fetch(`http://localhost:1337/api/blogs?filters[BlogID][$eq]=${params.blogId}&populate=*`)
            const data = await res.json()
    
            console.log('data >>',data.data[0].attributes)
            setBlog(data.data[0].attributes)
        }
        fetchBlogData()
    },[])

    return (
        <section className="container text-center">

            <img src={`http://localhost:1337${blog.FeaturedImage.data.attributes.url}`} />
            <h1>MainDivision = {blog.BlogTitle}</h1>
            <h3>Subdivision = {blog.BlogBody}</h3>
        </section>
    )
}

export default SingleBlog
