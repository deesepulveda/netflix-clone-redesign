import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero__container">
      <div className="hero__header">
        <div className="hero__logoBox">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt=""
            className="hero__logo"
          />
        </div>
        <div className="hero__avatarBox">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
            alt=""
            className="hero__avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
