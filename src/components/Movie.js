import React from "react";
import "./Movie.css";

function Movie({ item }) {
  return (
    <div className="movie__posterBox">
      <div className="movie__posterImages">
        <img
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item.title || item.name}
        />
      </div>
      <div className="movie__posterTitles">{item.title || item.name}</div>
    </div>
  );
}

export default Movie;
