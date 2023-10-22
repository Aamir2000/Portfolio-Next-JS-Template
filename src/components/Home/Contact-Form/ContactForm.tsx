import "./ContactForm.scss";
import React from "react";

export function ContactForm() {

    return (
        <>
            <div className="app__contact__form">
                <div className="app__container">
                    <div className="app__contact__form__top">
                        <h2>
                            My <span>Contact</span>
                        </h2>
                        <p>Want to connect with me for work or just a talk? Fill your details here and I'll surely get
                            in touch as soon as possible for me. Thanks for contacting me!</p>
                    </div>
                    <form action="#" className="app__contact__form__wrapper">
                        <section className="app__contact__form__section">
                            <label htmlFor="name" className="app__contact__form__label">Full Name<sup>*</sup></label>
                            <input type="text" id={'name'} className="app__contact__form__input" placeholder={'Enter Full Name'}/>
                        </section>
                        <section className="app__contact__form__section">
                            <label htmlFor="email" className="app__contact__form__label">Email Address<sup>*</sup></label>
                            <input type="text" id={'email'} className="app__contact__form__input" placeholder={'Enter Email Address'}/>
                        </section>
                        <section className="app__contact__form__section">
                            <label htmlFor="name" className="app__contact__form__label">Phone</label>
                            <input type="text" id={'name'} className="app__contact__form__input" placeholder={'Enter Full Name'}/>
                        </section>
                        <section className="app__contact__form__section">
                            <label htmlFor="name" className="app__contact__form__label">Message<sup>*</sup></label>
                            <textarea id={'name'} rows={5} className="app__contact__form__input" placeholder={'Enter Full Name'}/>
                        </section>
                    </form>
                    <div className="app__contact__form__cta">
                        <button>
                            Submit
                        </button>
                        <button>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}