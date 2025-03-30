import React, { useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const MovieSearchApp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    setError("");

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${searchTerm}&apikey=9c2c87ac`
      );

      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setError("No movies found");
        setMovies([]);
      }
    } catch (err) {
      setError("Error fetching movies. Try again later.");
    }
  };

  return (
    <div>
      <h2>Movie Search</h2>
      <input
        type="text"
        placeholder="Enter movie title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieSearchApp;
