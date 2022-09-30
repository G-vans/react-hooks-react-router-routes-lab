import React from "react";
import { movies } from "../data";

function Movies() {
  const movie = movies.map((movie) => {
    const moviesGenres = movie.genres;

    return (
      <div key={movie.title}>
        <h2>{movie.title}</h2>
        <h3>{movie.time}</h3>
        <ul>
          {moviesGenres.map((movieGenre, index) => (
            <li key={movieGenre}>{movieGenre}</li>
          ))}
        </ul>
      </div>
    );
  });

  return(
    <div>
     <h1>Movies Page</h1>
    {movie}
    </div>
  )
}

export default Movies;
