import React from "react";
import "./Movie.css";

function Movie({ item }) {
  return (
    <div>
      <div className="movie__posterImages">
        <img
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item.title}
        />
      </div>
    </div>
  );
}

export default Movie;
