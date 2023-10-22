import React from 'react'
import "./Skills.scss";

export default function Skills() {
    return (
        <div className='app__skills'>
            <div className="app__container">
                <div className="app__skills__top">
                    <h2>
                        My <span>Skills</span>
                    </h2>
                    <p>I've gathered a lot of skills over the past few years of my career and I'd love to use my skills to solve problems that helps business and organisations grow</p>
                </div>
                <div className="app__skills__bottom">
                    <div className="app__skills__wrapper">
                        <div className="app__skills__card">
                            <h3>Linux / OpenSUE</h3>
                            <span>Experience: 1 Year</span>
                            <p>I've worked extensively on Linux / OpenSue based systems. It helped me apply my knowledge on many different applications. I love working with Linux.</p>
                        </div>
                        <div className="app__skills__card">
                            <h3>Networking</h3>
                            <span>Experience: 1.5 Years</span>
                            <p> Understanding the fundamentals of computer networking is crucial for cybersecurity. This includes knowledge of TCP/IP, routing, switching, firewalls. </p>
                        </div>
                        <div className="app__skills__card">
                            <h3>Cyber Security Fundamentals</h3>
                            <span>Experience: 6 Months</span>
                            <p>A solid foundation in cybersecurity concepts, principles, and terminology. Proficiency in encryption techniques, multi-factor authentication, access control models.</p>
                        </div>
                        <div className="app__skills__card">
                            <h3>Cybersecurity Tools</h3>
                            <span>Experience: 1.2 Years</span>
                            <p>Demonstrated proficiency in employing and configuring cybersecurity tools such as firewalls, intrusion detection systems, antivirus software. </p>
                        </div>
                        <div className="app__skills__card">
                            <h3>Incident Response</h3>
                            <span>Experience: 2 Years</span>
                            <p>Proficient in incident response protocols, capable of swiftly and effectively addressing security incidents. Skilled in digital forensics investigations.</p>
                        </div>
                        <div className="app__skills__card">
                            <h3>Web Application Security</h3>
                            <span>Experience: 8 Months</span>
                            <p>Comprehensive knowledge of common web application vulnerabilities, including SQL injection, cross-site scripting, and more.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
