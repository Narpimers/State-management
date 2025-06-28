import React, { useState, createContext } from "react";

export const MovieContext = createContext()

export const MovieProvider = (props) => {
        const [movies, setMovies] = useState([
        {
            name: 'HP',
            price: '10$',
            id: 2322123
        },

        {
            name: 'LOL',
            price: '5$',
            id: 2322124
        },

        {
            name: 'GOT',
            price: '12$',
            id: 2322125
        }
    ])

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )

};
