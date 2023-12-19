import "../../styles/blog-card.scss";
import Image from "next/image";


export default function BlogCard() {
    return (
        <div className="app__blogcard">
            <div className="app__blogcard__img">
                <Image src={"https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg"} width={500} height={200} alt={"Cyber Security Journey"}/>
            </div>
            <div className="app__blogcard__content">
                <h4><span>Cyber</span> Security & Me</h4>
                <p>Follow me as I walk through my journey of cyber security and how I got into this realm and fell for it.</p>
                <button className="primary">Read More</button>
            </div>
        </div>
    );
}
