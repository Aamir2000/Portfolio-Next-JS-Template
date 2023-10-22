import React from 'react'
import "./Work.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
// import required modules
import { EffectCreative, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

import Img_1 from "../../../../public/assets/company-logos/commvault.svg";
import Img_2 from "../../../../public/assets/company-logos/kolide-logo-wordmark.svg";
import Img_3 from "../../../../public/assets/company-logos/esds-logo.png";

export default function Work() {
    return (
        <div className='app__work'>
            <div className="app__container">
                <div className="app__work__top">
                    <h2>
                        My <span>Work Experience</span>
                    </h2>
                    <p>I've worked with different industries and organisations to help solve their problems and protect their applications from attackets and the unknown in this digital universe</p>
                </div>
                <div className="app__work__bottom">
                    <div className="app__work__wrapper">
                        <Swiper
                            spaceBetween={200}
                            slidesPerView={1}
                            effect='creative'
                            creativeEffect={{
                                prev: {
                                    translate: [0, 0, -400],
                                },
                                next: {
                                    translate: ['100%', 0, 0],
                                },
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: true,
                            }}
                            pagination={false}
                            modules={[EffectCreative, Pagination, Autoplay,]}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <div className="app__work__card">
                                    <div className="app__work__card__data">
                                        <Image src={Img_2} alt="Kolide"></Image>
                                        <div className="app__work__card__content">
                                            <h3>Kolide</h3>
                                            <span>Tenure: 1 Year</span>
                                        </div>
                                    </div>
                                    <p>
                                        As a fresh cybersecurity employee at Kolide, a prominent and dynamic cybersecurity firm, I embarked on an exhilarating journey into the world of digital defense. Eager to learn and contribute, I immersed myself in the company's culture of innovation and dedication to protecting digital ecosystems. With an insatiable appetite for knowledge, I dove into the intricacies of cybersecurity, harnessing my foundational skills to decipher the complex tapestry of threats and vulnerabilities that permeate our digital landscape.
                                    </p>
                                    <br />
                                    <p>
                                        From day one, I embraced the challenges and opportunities that came my way, working closely with seasoned professionals who generously shared their wisdom and experience. Kolide's collaborative and forward-thinking environment empowered me to fortify my networking knowledge, refine my understanding of operating systems, and deepen my grasp of cybersecurity fundamentals. I quickly became proficient in the utilization of cybersecurity tools and software, with the ability to deftly configure firewalls, employ intrusion detection systems.
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="app__work__card">
                                    <div className="app__work__card__data">
                                        <Image src={Img_3} alt="ESDS"></Image>
                                        <div className="app__work__card__content">
                                            <h3>ESDS</h3>
                                            <span>Tenure: 1 Year</span>
                                        </div>
                                    </div>
                                    <p>
                                        Commencing my career in the realm of cybersecurity as a fresher at ESDS, an industry-leading and forward-thinking cybersecurity company, has been a truly remarkable experience. ESDS' commitment to innovation, cutting-edge solutions, and unwavering dedication to securing digital landscapes has provided me with an exceptional platform for growth and learning. Eager to make a meaningful contribution, I embraced the wealth of opportunities.
                                    </p>
                                    <br />
                                    <p>
                                        Throughout my tenure at ESDS, I've had the privilege of working alongside seasoned professionals who generously shared their wealth of knowledge and expertise. The collaborative and dynamic environment at ESDS enabled me to build a strong foundation in cybersecurity. I honed my networking skills, deepened my understanding of diverse operating systems, and further developed my cybersecurity fundamentals, laying a solid groundwork for my journey ahead.
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="app__work__card">
                                    <div className="app__work__card__data">
                                        <Image src={Img_1} alt="ESDS"></Image>
                                        <div className="app__work__card__content">
                                            <h3>Commvault</h3>
                                            <span>Tenure: 1 Year</span>
                                        </div>
                                    </div>
                                    <p>
                                        Beginning my career in the cybersecurity field as a newcomer at Commvault, a distinguished and innovative company renowned for its commitment to data protection and cybersecurity solutions, has been an inspiring and transformative experience. Commvault's focus on innovation and cutting-edge technologies in the cybersecurity domain has provided me with a unique platform for growth and learning. As a fresher, I eagerly embraced the opportunities and challenges that came my way, and I rapidly found myself immersed in the intricacies of cybersecurity.
                                    </p>
                                    <br />
                                    <p>
                                        During my time at Commvault, I had the privilege of working alongside seasoned professionals who generously shared their extensive knowledge and expertise. The collaborative and dynamic atmosphere at Commvault enabled me to build a strong foundation in cybersecurity.
                                    </p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
