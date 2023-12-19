import "./RecentBlogs.scss";
import React from "react";
import Image from "next/image";

export function RecentBlogs() {
    return (
        <>
            <div className="app__recent__blogs">
                <div className="app__container">
                    <div className="app__recent__blogs__top">
                        <h2>
                            My <span>Latest Blogs</span>
                        </h2>
                        <p>I always loved sharing my knowledge with the world and in that mission of knowledge sharing. I&apos;ve curated a bunch of blogs which you might useful do give these a try.</p>
                    </div>
                    <div className="app__recent__blogs__cards">
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                    </div>
                    <div className="app__recent__blogs__cta">
                        <button>Read More Blogs</button>
                    </div>
                </div>
            </div>
        </>
    );
}


function BlogCard() {
    return (
        <>
            <div className="app__blog__card">
                <div className="app__blog__card__image">
                    <Image src={"https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg"} alt={"Recent Blog Image"} width={300} height={300}></Image>
                </div>
                <div className="app__blog__card__content">
                    <h3>Cyber Security For Nerds</h3>
                    <p>Learn the core basics of cyber security and make your everyday life easy and simple and secure.</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </>
    )
}
