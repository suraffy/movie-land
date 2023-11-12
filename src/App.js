import React, { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import "./App.css";
import searchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=70bf54b8";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    searchMovies("batman");
  }, []);

  const searchMovies = async (title) => {
    if (!title) title = "spiderman";

    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    data.Search ? setMovies(data.Search) : setMovies([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(searchText);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <form className="search" onSubmit={handleSubmit}>
        <input
          type="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="Search movies"
          autoFocus={true}
        />

        <img src={searchIcon} alt="search" />
      </form>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movie found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
