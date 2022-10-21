import React from "react";
// import Footer from "../components/Footer";
import Row from "../components/Row";
import requests from "../Requests";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Row rowID="1" title="Trending" fetchURL={requests.fetchTrending} />
      <Row
        rowID="2"
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row rowID="3" title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row rowID="4" title="Action" fetchURL={requests.fetchActionMovies} />
      <Row rowID="5" title="Horror" fetchURL={requests.fetchHorrorMovies} />
      <Row rowID="6" title="Comedy" fetchURL={requests.fetchComedyMovies} />
      <Row
        rowID="7"
        title="Documentaries"
        fetchURL={requests.fetchDocumentaries}
      />
      <Row rowID="8" title="Romance" fetchURL={requests.fetchRomanceMovies} />
      <div style={{ width: "100vw", height: "2rem" }}></div>
    </>
  );
};

export default Home;
