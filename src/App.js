import React, { useEffect } from "react";

import "./App.css";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=70bf54b8";

const App = () => {
  useEffect(() => {
    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      console.log(data.Search);
    };

    searchMovies("spiderman");
  }, []);

  return <h1>App</h1>;
};

export default App;
