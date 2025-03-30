import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px",
        padding: "10px",
        width: "200px",
      }}
    >
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/200"
        }
        alt={movie.Title}
        style={{ width: "100%" }}
      />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
