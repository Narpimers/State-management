import React from "react";

const Movie = ({name, price}) => {

    return(
        <li>
            <h3>{name}</h3>
            <p>{price}</p>
        </li>

       
    )
};

export default Movie;