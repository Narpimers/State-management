import { useState } from 'react'
import MovieList from './MoviesList.jsx'
import Nav from './Navbar.jsx'
import { MovieProvider } from './MovieContext.jsx'
import AddMovie from './AddMovie.jsx'
import './App.css'

function App() {

  return (
    <MovieProvider>
      <div>
        <Nav/>
        <AddMovie/>
        <MovieList/>
      </div>
    </MovieProvider>

  )
}

export default App
