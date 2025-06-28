import React, { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";
import uuid4 from "uuid4";

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext)
 
    const updateName = (e) => {
        setName(e.target.value)
    };

    const updatePrice = (e) => {
        setPrice(e.target.value)
    };

    const AddMovie = (e) => {
        e.preventDefault()
        setMovies(pervMovies => [...pervMovies, {name, price, id: uuid4()}])
        
    }

    return (
        <form onSubmit={AddMovie}>
            <input type="text"  name="name" value={name} onChange={updateName}/>
            <input type="text" name="price" value={price} onChange={updatePrice} />
            <button>Submit</button>
        </form>
    )
}

export default AddMovie;