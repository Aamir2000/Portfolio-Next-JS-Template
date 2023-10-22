import React from 'react'
import "./Newsletter.scss";

export default function Newsletter() {
  return (
    <div className="app__newsletter">
      <div className="app__container">
        <div className="app__newsletter__card">
          <div className="app__newsletter__card__left">
            <header className="app__newsletter__card__header">
              <h3>Subscribe To My Newsletter</h3>
              <p>Get the latest news and other things about me and my career without any hastle.</p>
            </header>
          </div>
          <div className="app__newsletter__card__right">
            <div className="app__newsletter__cta">
              <input type="email" name="email" id="email" placeholder={"Enter Email Address"}/>
              <button>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
