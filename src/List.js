import React from 'react';
import MovieCard from './MovieCard';
import './App.css';





function List ({movies, search, rating}) {
return(
 <div
 style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: "100px"
    
    /*position: "relative",
    display: "flex",
    flexDirection: "column",
  
    
    */

   
  }}
 >
     
 {movies.filter((el) => (
          el.title.toUpperCase().includes(search.toUpperCase()) &&
          el.rate >= rating
      )
 )
 .map((el) => (
          <MovieCard el={el} />
      ))

 
      }
 </div> 
)
}

export default List;
