import React from "react";
import { directors } from "../data";

function Directors() {
  const director = directors.map((director) => {
    const movies = director.movies;

    return (
      <div key={director.name}>
        <h2>{director.name}</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Directors Page</h1>
      {director}
    </div>
  );
}

export default Directors;
