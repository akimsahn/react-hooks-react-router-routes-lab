import React from "react";
import { actors } from "../data";
import ListItem from "./ListItem";

function Actors() {
  const content = actors.map(actor => (
    <div key={actor.name}>
      <p>{actor.name}</p>
      <ul>
        {actor.movies.map((movie) => 
          <ListItem key={movie} item={movie} />
        )}
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Actors Page</h1>
      {content}
    </div>
  )
}

export default Actors;
