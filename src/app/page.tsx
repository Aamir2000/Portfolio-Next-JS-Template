"use client";

import Hero from "@/components/Home/Hero/Hero";
import Skills from "@/components/Home/Skills/Skills";
import "../styles/home.scss";
import Work from "@/components/Home/Work/Work";
import Newsletter from "@/components/Home/Newsletter/Newsletter";
import {RecentBlogs} from "@/components/Home/Recent-Blogs/RecentBlogs";
import {ContactForm} from "@/components/Home/Contact-Form/ContactForm";

export default function Home() {
    return (
        <>
            <div className="app__home">
                <Hero></Hero>
                <Skills></Skills>
                <Work></Work>
                <RecentBlogs></RecentBlogs>
                <ContactForm></ContactForm>
                <Newsletter></Newsletter>
            </div>
        </>
    )
}
