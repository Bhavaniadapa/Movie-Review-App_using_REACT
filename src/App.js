import {useEffect, useState} from 'react';
import "./App.css"

import MovieCard from './MovieCard.jsx';

import SearchIcon from './search.svg'; 

const APILink='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.dec&api_key=f04ac23abbcc79a5aa6e481ce17d1bc3&page=1';

const  SEARCHAPI="https://api.themoviedb.org/3/search/movie?&api_key=f04ac23abbcc79a5aa6e481ce17d1bc3&query="


// const API_URL="http://www.omdbapi.com?apikey=551576d4"; using omdbapi

const App = () => {
    const [movies, setMovies] =useState([]);
    const [searchItem,setSearchItem]=useState("");
    const searchMovies = async (url) =>{
        const response = await fetch(`${url}`);
        const data= await response.json();
        setMovies(data.results);
        console.log(data.results);
    }
    useEffect(() => {
        searchMovies(APILink);   
        
    },[movies===[]]);
    
    return (
        <div className="app">
            <h1>Movie Search App</h1>
            <div className='search'>
                <input  placeholder='Search for Movies' 
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                />
                <img src={SearchIcon}
                alt='search'
                onClick={
                    () => searchMovies(SEARCHAPI+searchItem)
                } />
            </div>

            {
                movies?.length > 0
                ?(
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie = {movie}/>
                        ) )}
                        
                    </div>
                ):
                (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )
            }
                
        </div>
    );
}

export default App;