import React from 'react' 
import PropTypes from 'prop-types' // npm install prop-types

function MoviesList(props) {
    return (
        <ul>
            {props.movies.map((movie) => {
                return (
                    <li key={movie.id}>
                        {movie.name} - { movie.watched ? 'watched' : 'yet to watch'}
                        <button onClick={() => {
                            props.handleRemove(movie.id)
                        }}> remove </button>
                    </li>
                )
            })}
        </ul>
    )
}

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired,
    handleRemove: PropTypes.func.isRequired
}

export default MoviesList