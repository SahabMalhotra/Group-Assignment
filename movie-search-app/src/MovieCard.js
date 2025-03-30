import React from "react";
import { useNavigate } from "react-router-dom";
//useNavigate is a hook that returns a function that lets you navigate programmatically
//It is used to navigate to different routes in the application
//Allows you to navigate to different page when the user clicks on a movie image
function MovieCard({ movie }) {
  const navigate = useNavigate();
  return (
    <div className="movie-card">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="movie-image"
        onClick={() => navigate(`/movie/${movie.imdbID}`)}
        style={{ cursor: "pointer" }}
        //Makes the image clickable (onClick triggers navigate()).
        //Navigates to a details page (/movie/${movie.imdbID}) when clicked.
      />

      <div className="movie-info">
        <h2>TITLE</h2>
        <p>{movie.Title}</p>
        
        <h2>Year</h2>
        <p className="movie-year">{movie.Year}</p>
        <h2>Rating</h2>
        <p className="movie-rated">{movie.imdbRating || "N/A"}</p>{" "}
      </div>
    </div>
  );
}

export default MovieCard;
