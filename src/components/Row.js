import React, { useEffect, useState } from "react";
import axios from "../axios";
import Movie from "./Movie";
import "./Row.css";

function Row({ title, fetchURL, rowID }) {
  const [movies, setMovies] = useState([]);

  // Axios API Request

  // const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    };

    fetchData();
  }, [fetchURL]);

  return (
    <div>
      <h1 className="row__sectionTitle">{title}</h1>
      <div className="row__section">
        {movies.map((item, id) => (
          <Movie key={id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Row;
