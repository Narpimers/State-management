import React, { useContext, useState } from "react";
import Movie from "./Movie.jsx";
import { MovieContext } from "./MovieContext.jsx";

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext)

    return(
        <>
            <ul className="movies-list">
                {movies.map(movie => (
                    <Movie  
                        key={movie.id} 
                        name={movie.name}
                        price={movie.price}
    
                    />    
                ))}
            </ul>
        </>
       
    )
};

export default MovieList;