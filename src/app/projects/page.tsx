import "../../styles/projects.scss";
import ImageCard from "@/components/Common/ImageCard";
import React from "react";

export default function Projects() {
    return (
        <div className="app__projects">
            <div className="app__container">
                <div className="app__projects__top">
                    <h2>
                        My <span>Projects</span>
                    </h2>
                    <p>I have built many projects during my learning process in this vast field of cyber security. I&apos;m always looking for new projects so feel free to reach out if you wanna collaborate.</p>
                </div>
                <div className="app__projects__content">
                    <ImageCard/>
                    <ImageCard/>
                    <ImageCard/>
                    <ImageCard/>
                    <ImageCard/>
                    <ImageCard/>
                </div>
            </div>
        </div>
    )
}
