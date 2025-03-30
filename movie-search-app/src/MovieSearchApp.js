import React, { useState } from "react";
// useState is a React hook that allows you to add state to functional components
// Manage different state variables

import axios from "axios";
// axios is used to make API requests to the OMDb API

import MovieCard from "./MovieCard";
// MovieCard is a component that displays individual movie details

function MovieSearchApp() {
  const [movies, setMovies] = useState(null); // Stores the list of movies fetched from the API
  const [loading, setLoading] = useState(false);// Indicates whether the app is currently loading data
  const [searchTerm, setSearchTerm] = useState("");// Stores the current search term entered by the user
  const [error, setError] = useState(null); // State to store error messages

  const handleSearch = () => {
    if (searchTerm) {
      setLoading(true);// Set loading to true when starting a new search
      setError(null); // Reset error before making the API call

      axios
        .get(
          `https://www.omdbapi.com/?s=${searchTerm}&apikey=9c2c87ac&type=movie`
        )
        // Executed when response is received from the API
        // The API key is hardcoded here, but in a real application, it should be stored securely
        .then((response) => {
          const searchResults = response.data.Search || [];
// Sends a request to the OMDb API with the search term and API key
// The response is expected to contain a list of movies matching the search term
// If no movies are found, an empty array is returned
          // Fetch detailed info for each movie
          Promise.all(
            searchResults.map((movie) =>
                // Loops through the search results and fetches detailed information for each movie using its IMDb ID
              // The detailed information is fetched using another API call to the OMDb API
              axios
                .get(
                  `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=9c2c87ac`
                )
                .then((res) => res.data)
            )
          ).then((detailedMovies) => {
            setMovies(detailedMovies); // Store the movies with full details
            setLoading(false);// Set loading to false after fetching the data
          });
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  };

  return (
    <div>
      <h1>Movie Search App</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>} {/*Display error message*/}
      <div className="movie-list">
        {movies
          ? movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))
          : !loading && !error && <p>Start searching for movies above.</p>}
      </div>
    </div>
  );
}

export default MovieSearchApp;
