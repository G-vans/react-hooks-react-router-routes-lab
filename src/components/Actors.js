import React from "react";
import { actors } from "../data";

function Actors() {
  const actor = actors.map((actor) => {
    const moviesActed = actor.movies;

    return (
      <div key={actor.name}>
        <h2>{actor.name}</h2>
        <ul>
          {moviesActed.map((movieActed, index) => (
            <li key={movieActed}>{movieActed}</li>
          ))}
        </ul>
      </div>
    );
  });

  return(
    
    <div>
    <h1>Actors Page</h1>
    {actor}
    </div>
  )
}

export default Actors;
