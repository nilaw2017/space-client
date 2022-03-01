import { useState, useEffect } from "react";
import { useParams } from "react-router";

const SingleBlog = ()=> {
    const [blog, setBlog] = useState({})

    const params = useParams()    
    useEffect(()=> {
        const fetchBlogData = async ()=> {
            // console.log('params',params)
            fetch(`http://localhost:1337/api/blogs?populate=*&filters[BlogID][$eq]=${params.blogId}`)
            .then((res) => {
                if(res.status >= 400) {
                    console.log("Bad Response")
                }
                return res.json();
            })
            .then((data)=> {
                setBlog(data.data[0].attributes)
            })    
        }
        fetchBlogData()
    },[])
    const image = blog.FeaturedImage == undefined?blog:blog.FeaturedImage.data.attributes.url;
    console.log("TEST >>", image)
    return (
        <section className="container text-center">
            <img src={`http://localhost:1337${image}`} />
            <h1>MainDivision = {blog.BlogTitle}</h1>
            <h3>Subdivision = {blog.BlogBody}</h3>
        </section>
    )
}

export default SingleBlog
