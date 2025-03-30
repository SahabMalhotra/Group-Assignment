import React, { useEffect, useState } from "react";
// Import React and hooks for managing state and API calls and side effects
// Import useEffect for side effects and useState for managing state

import { useParams, useNavigate } from "react-router-dom";
// Import useParams for accessing URL parameters and useNavigate for navigation
// useParams is a hook that returns an object of key/value pairs of URL parameters
import axios from "axios";
// Import axios for making HTTP requests to the OMDB API

function MovieDetails() {
  const { imdbID } = useParams(); // Extract the imdbID from the URL parameters using useParams
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState(null);
    // Initialize movieDetails state to null
    // Stores movie details fetched from the API
  const [loading, setLoading] = useState(true);
  // Initialize loading state to true
  // Indicates whether the movie details are being fetched

    // Fetch movie details from the OMDB API using the imdbID
    // useEffect is used to perform side effects in functional components
    // Saves response in movieDetails state and sets loading to false
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${imdbID}&apikey=9c2c87ac`)
      .then((response) => {
        setMovieDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      });
  }, [imdbID]);

  // Handle the back button click
  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  // Render the loading message or movie details
  return (
    <div>
      <h1>Movie Details</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        movieDetails && (
          <div className="movie-details">
            <h2>
              {movieDetails.Title} ({movieDetails.Year})
            </h2>
            <div className="detail-image">
              <img
                src={movieDetails.Poster}
                alt={movieDetails.Title}
                className="movie-poster"
              />
            </div>

            <p>
              <strong>Genre:</strong> {movieDetails.Genre}
            </p>
            <p>
              <strong>Released:</strong> {movieDetails.Released}
            </p>
            <p>
              <strong>Director:</strong> {movieDetails.Director}
            </p>
            <p>
              <strong>Actors:</strong> {movieDetails.Actors}
            </p>
            <p>
              <strong>Plot:</strong> {movieDetails.Plot}
            </p>
            <p>
              <strong>IMDB Rating:</strong> {movieDetails.imdbRating}
            </p>
            <p>
              <strong>Runtime:</strong> {movieDetails.Runtime}
            </p>
          </div>
        )
      )}
      <button className="back" onClick={handleBack}>
        Back
      </button>
    </div>
  );
}

export default MovieDetails;
