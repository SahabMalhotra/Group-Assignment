import React from "react";
// Import React for building user interfaces
// Importing necessary libraries and components
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Importing React Router for routing
// BrowserRouter (renamed Router): Wraps the entire app to enable navigation.
// Routes: Contains multiple Route elements.
// Route: Defines different paths (/, /movie/:imdbID).
import "./App.css";
// CSS (App.css): For styling.
import MovieSearchApp from "./MovieSearchApp";
import MovieDetails from "./MovieDetails";
// MovieSearchApp (Search Page) & MovieDetails (Movie Info Page) are imported.

function App() {
  return (
    <Router>
      {/* Router wraps the entire app to enable routing */}
      <Routes>
        {/* Routes contains multiple Route elements */}
        <Route path="/" element={<MovieSearchApp />} />
        {/* Route for the search page */}
        {/* The path "/" corresponds to the root URL */}
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
        {/* Route for the movie info page */}
      </Routes>
    </Router>
  );
}

export default App;
