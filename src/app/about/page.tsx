import Image from "next/image";
import "../../styles/about.scss";

export default function About() {
    return (
        <div className="app__about">
            <div className="app__container">
                <div className="app__about__card">
                    <header className="app__about__card__meta">
                        <Image src="https://images.pexels.com/photos/11506216/pexels-photo-11506216.jpeg" width={100}
                               height={100} alt="HRabbia's Pic" className="app__about__card__picture"/>
                        <div className="app__about__card__profile">
                            <h3>H <span>Rabbia</span></h3>
                            <span>Cyber Security Advisor</span>
                        </div>
                    </header>

                    {/* Introduction Section */}

                    <h4>Introduction</h4>
                    <p>
                        Hey there, cyber enthusiasts! I&apos;m HRabbia, diving headfirst into the captivating world of
                        cybersecurity. Imagine a world where every line of code tells a story, and each encryption is
                        like a puzzle waiting to be solved – that&apos;s my playground.
                    </p>
                    <p>
                        Passion doesn&apos;t quite cover it – I&apos;m head over heels in love with cybersecurity.
                        It&apos;s not just a
                        job; it&apos;s a thrilling journey into the heart of digital security. I can&apos;t get enough
                        of the
                        complexities that come with cyber threats and the constant dance between vulnerabilities and
                        defenses.
                    </p>
                    <p>
                        But it&apos;s not just about the techy stuff. My love for cybersecurity goes beyond the
                        algorithms
                        and firewalls. It&apos;s about understanding the pulse of the digital world and being at the
                        forefront of innovation and protection.
                    </p>
                    <p>
                        In a landscape where every bit matters, my enthusiasm is the driving force. I&apos;m on a
                        mission to
                        explore, protect, and push the boundaries in this ever-evolving cybersecurity domain. So, buckle
                        up, fellow cyber enthusiasts – we&apos;ve got a digital frontier to conquer! 💻🚀
                        #CybersecurityPassion
                        #DigitalDefender
                    </p>

                    {/* Certification Section */}

                    <h4>Certifications</h4>
                    <p>
                        These certifications collectively represent my commitment to continuous learning, practical
                        application of cybersecurity principles, and readiness to tackle challenges in the ever-evolving
                        field of cybersecurity.
                    </p>
                    <b>PwC Virtual Cybersecurity Case Experience</b>
                    <p>
                        Successfully completed the PwC Virtual Cybersecurity Case Experience, gaining practical insights
                        into real-world cyber threats and strategic solutions. This certification attests to my ability
                        to analyze and respond to complex cybersecurity challenges.
                    </p>
                    <b>AIG Shield Up Cyber Security Job Simulation</b>
                    <p>
                        Attained certification in the AIG Shield Up Cyber Security Job Simulation, showcasing
                        proficiency in handling simulated cyber incidents and demonstrating effective incident response
                        strategies. This certification validates my readiness to tackle cybersecurity issues in a
                        corporate setting.
                    </p>
                    <b>TryHackMe Certifications</b>
                    <p>
                        Completed various certifications on the TryHackMe platform, including but not limited to:
                    </p>
                    <ol>
                        <li>
                            Network Fundamentals
                        </li>
                        <li>
                            Web Application Security
                        </li>
                        <li>
                            Advanced Penetration Testing
                        </li>
                    </ol>
                    <p>
                        These certifications testify to my practical skills in networking, web application security, and
                        penetration testing
                    </p>
                    <b>CompTIA Security+</b>
                    <p>
                        Achieved CompTIA Security+ certification, a globally recognized accreditation in foundational
                        cybersecurity skills. This certification underscores my knowledge in risk management,
                        cryptography, network security, and more.
                    </p>
                    <b>Certified Ethical Hacker (CEH)</b>
                    <p>
                        Earned the Certified Ethical Hacker certification, demonstrating expertise in ethical hacking
                        techniques and methodologies. This certification validates my ability to assess and secure
                        computer systems in an ethical manner.
                    </p>
                    <b>AWS Certified Security - Specialty</b>
                    <p>
                        Acquired the AWS Certified Security - Specialty certification, showcasing proficiency in
                        implementing security measures within the Amazon Web Services (AWS) environment. This
                        certification highlights my competence in securing cloud-based infrastructures.
                    </p>
                    <b>Certified Information Systems Security Professional (CISSP) - Associate</b>
                    <p>
                        Attained the CISSP-Associate certification, signifying a solid understanding of cybersecurity
                        principles and practices. This certification is a testament to my commitment to maintaining the
                        highest standards of information security.
                    </p>
                </div>
            </div>
        </div>
    )
}
