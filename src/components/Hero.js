import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero__container">
      <header className="hero__header">
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
      </header>
      <div className="hero__contentBox">
        <div className="hero__contentTitle">
          <h2>Nope</h2>
        </div>
        <div className="hero__contentOverview">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
            similique reiciendis culpa fugiat optio enim ad corporis natus,
            numquam deleniti suscipit nostrum impedit ea maxime fuga architecto
            incidunt recusandae! Dolorum.
          </p>
        </div>
        <div className="hero__buttonContainer">
          <button className="hero__buttons">play</button>
          <button className="hero__buttons">my list</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
