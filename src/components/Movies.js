import React from "react";
import ListItem from "./ListItem";
import { movies } from "../data";

function Movies() {
  const content = movies.map(movie => (
    <div key={movie.title}>
      <p>{movie.title}</p>
      <p>{`${movie.time} minutes`}</p>
      <ul>
        {movie.genres.map((genre) => (
          <ListItem key={genre} item={genre} />
        ))}
      </ul>
    </div>
  ))
  return (
    <div>
      <h1>Movies Page</h1>
      {content}
    </div>
  )
}

export default Movies;
