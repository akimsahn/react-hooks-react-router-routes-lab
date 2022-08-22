import React from "react";
import { directors } from "../data";
import ListItem from "./ListItem";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => (
        <div key={director.name}>
          <p>{director.name}</p>
          <ul>
            {director.movies.map((movie) => (
              <ListItem key={movie} item={movie} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Directors;
