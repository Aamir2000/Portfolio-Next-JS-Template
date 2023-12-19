"use client";
import React from 'react'
import "./Hero.scss";
import Image from 'next/image';
import HeroImg from "../../../../public/assets/image/Hero Section.png";

export default function Hero() {
    return (
        <div className="app__hero">
            <div className="app__container">
                <div className="app__hero__left">
                    <h1>
                        Hi, I&apos;m <span>Hummab</span> <br />
                        Professional Cyber Security Expert
                    </h1>
                    <p>Hummab a relentless guardian of the digital realm. With a passion for puzzles and an unwavering commitment to safeguarding the online world from cyber attacks and online threats</p>
                    <section className={"app__hero__cta__section"}>
                        <button>
                            Hire Me
                        </button>
                        <span>
                            - <a href="#">My Resume</a>
                        </span>
                    </section>
                </div>
                <div className="app__hero__right">
                    <Image src={HeroImg} alt={"Hero Section Image"}></Image>
                </div>
            </div>
        </div>
    )
}
