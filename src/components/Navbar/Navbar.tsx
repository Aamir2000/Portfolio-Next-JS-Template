"use client";
import React, { useState } from 'react'
import "./Navbar.scss"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

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
                            <li className='active'>Home</li>
                            <li>About Me</li>
                            <li>Projects</li>
                            <li>Blogs</li>
                            <li>Contact Me</li>
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
