import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";
import "./Hero.css";
import requests from "../Requests";

function Hero() {
  const [fade, setFade] = useState(false);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[Math.floor(Math.random() * 19)]);

      return request;
    };

    fetchData();
  }, []);

  // Truncate String
  const truncatingString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const transitionHeader = () => {
    if (window.scrollY > 100) {
      setFade(true);
    } else {
      setFade(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionHeader);
    return () => window.removeEventListener("scroll", transitionHeader);
  }, []);

  return (
    <div
      className="hero__container"
      style={{
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <header className={`hero__header ${fade && "header__black"}`}>
        <div className="hero__logoBox">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt=""
            className="hero__logo"
          />
        </div>
        <div className="hero__avatarBox">
          <Link to="/signUp">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
              alt=""
              className="hero__avatar"
            />
          </Link>
        </div>
      </header>
      <div className="hero__contentBox">
        <div className="hero__contentTitle">
          <h2>{movie?.name}</h2>
        </div>
        <div className="hero__contentOverview">
          <p>{truncatingString(movie?.overview, 100)}</p>
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
