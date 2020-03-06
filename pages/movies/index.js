import React from "react"
import axios from "axios"
import Link from 'next/link'

function Movies(props) {
    return(
        <ul>
            {
                props.movies.map(movie =>(
                   <li key={movie.id}>
                       {<Link href="movies/[id]" as={'/movies/' +movie.id}>{movie.title}</Link> }
                   </li> 
                ))
            }
        </ul>
    )
}
Movies.getInitialProps = async () => {
    const resultado = await axios('http://localhost:3000/api/movies')
    return {movies: resultado.data.results } 
}

export default Movies;