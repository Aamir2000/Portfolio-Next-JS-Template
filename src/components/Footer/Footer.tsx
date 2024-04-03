import "./Footer.scss";


export function Footer() {
    return (
        <>
            <div className="app__footer">
                <div className="app__container">
                    <div className="app__footer__left">
                        <h3>H <span>Rabbia</span></h3>
                        <p>Hope you liked my work and blogs. Please do share your feedback with me. It helps to know
                            what people think in order to advance my career and grow a little</p>
                        <div className="app__footer__socials">
                            <a href="#">Facebook</a>
                            <a href="#">Instagram</a>
                            <a href="#">LinkedIn</a>
                            <a href="#">Email</a>
                        </div>
                        <a href="#">Go Back To Top</a>
                    </div>
                    <div className="app__footer__right">
                        <h3>My <span>Vision</span></h3>
                        <p>
                            Passionate about Cybersecurity and Empowering Others.
                            <br/>
                            <br/>
                            Thank you for visiting my portfolio! As I embark on my journey to become a Cybersecurity
                            expert, my mission is not just about safeguarding data and systems; it&apos;s also about
                            empowering individuals and organizations to thrive in a digital world, free from the fear of
                            cyber threats. I&apos;m excited to contribute to a safer and more secure future for all.
                            Together, let&apos;s build a resilient and protected online world.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
