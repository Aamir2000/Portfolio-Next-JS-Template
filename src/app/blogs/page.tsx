import React from "react";
import "../../styles/blogs.scss";
import BlogCard from "@/components/Blogs/BlogCard";


export default function Blogs() {
    return (
        <div className="app__blogs">
            <div className="app__container">
                <div className="app__blogs__top">
                    <h2>
                        My <span>Blogs</span>
                    </h2>
                    <p>I like writing blogs and document every step in my cyber security journey. Feel free to read and give me feedback on the documentation. I appreciate every feedback</p>
                </div>
                <div className="app__blogs__content">
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                </div>
            </div>
        </div>
    )
}
