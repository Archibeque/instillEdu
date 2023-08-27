import React from "react";

import "./card.css";

export const Card = ({movies}) => {
  return (
    <div className="card-container">
      
        <img src={movies.Poster} alt={movies.Title} className="card-img" />
      
      <h1 className="card-title">{movies.Title}</h1>
      <span>{movies.Year}</span>
    </div>
  );
};