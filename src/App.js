import React, { useEffect, useState } from "react";

import "./App.css";
import searchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=70bf54b8";

const movie = {
  Title: "Spiderman",
  Year: "1990",
  imdbID: "tt0100669",
  Type: "movie",
  Poster: "N/A",
};

const App = () => {
  useEffect(() => {
    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      console.log(data.Search);
    };

    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          type="search"
          value="Spiderman"
          onChange={() => {}}
          placeholder="Search movies"
        />
        <img src={searchIcon} alt="search" onClick={() => {}} />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{movie.Year}</p>
          </div>

          <div>
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={movie.Title}
            />
          </div>

          <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
