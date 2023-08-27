
import React from 'react'
import { Card } from './card'
import {   useSelector } from "react-redux";

function Main() {
    const movies = useSelector((state) => state.movie);
      

  return (
<div style={{height:"100vh", width: "100vw", marginTop: "15px",marginBottom: "50px"}}>
    {
       movies.length > 0 ? (
        <div style={{display: "flex",  flexWrap:"wrap",marginBottom:"10%"}}>
          {movies.map((movie)=> (
        <Card 
        movies={movie}
        
          />
        ))}
        </div>)
        :
        (
          <div style={{display: "flex", justifyContent:"center",color: "GrayText"}}>
            <h3>No movies To Display
            <p>Try using the search box right above you</p>

            </h3>
          </div>
        )
      }

    
  </div>
  )
}

export default Main

