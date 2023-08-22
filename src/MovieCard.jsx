import React  from "react";
import Reviews from './reviews.jsx';
const IMG_PATH='https://image.tmdb.org/t/p/w1280';
const MovieCard = ({ movie }) =>{
    return (
        <div className='movie'>
            <div>
                <p>{movie.release_date}</p>
            </div>
            <div>
                <img src={movie.poster_path !== null ? IMG_PATH + movie.poster_path : 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>
            <div>
                <span>Rating: {movie.popularity}</span>
                <h3>{movie.title}</h3>
                <button onClick={() => <Reviews />}>Reviews</button>
            </div>
        </div>
    )
}

export default MovieCard;