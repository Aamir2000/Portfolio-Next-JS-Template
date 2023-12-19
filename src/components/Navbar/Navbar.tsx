"use client";
import React, { useState } from 'react'
import "./Navbar.scss"
import {usePathname} from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const path = usePathname();

    return (
        <div className={`app__navbar ${isOpen ? 'active' : ''}`}>
            <div className="app__container">
                <div className="app__navbar__left">
                    <div className="app__navbar__branding">
                        <h3><span>H</span>Rabbia</h3>
                    </div>
                </div>
                <div className="app__navbar__right">
                    <div className="app__navbar__menuToggle" onClick={() => setIsOpen(!isOpen)}>
                        <i className={`fad ${isOpen ? "fa-close" : 'fa-bars'}`}></i>
                    </div>
                    <div className="app__navbar__menu">
                        <ul>
                            <Link href={"/"}>
                                <li className={path == "/" ? 'active' : ""}>Home</li>
                            </Link>
                            <Link href={"/about"}>
                                <li className={path == "/about" ? 'active' : ""}>About Me</li>
                            </Link>
                            <Link href={"/blogs"}>
                                <li className={path == "/blogs" ? 'active' : ""}>Blogs</li>
                            </Link>
                            <Link href={"/projects"}>
                                <li className={path == "/projects" ? 'active' : ""}>Projects</li>
                            </Link>
                            <li>
                                <button>Hire Me</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
