import React, {useState} from "react";
import axios from 'axios';

import PickFav from "./PickFav";


export default function FavoriteForm(props) {
  const [title, setTitle] = useState("");
  const [searchedMovie, setSearchedMovie] = useState("");


  const saveToFavoriteList = (userName, movie) => {
    axios.post(`http://lhl-social-api.herokuapp.com/api/${userName}/favmovies`, { movie })
    .then(response => {
      props.setFavoriteMovies(response.data.favorited_movies)
    })
  }

  const movieSearch = (event) => {
    event.preventDefault();
    const queryStringTitle = title.trim().split(" ").join("%20"); 
  
    axios.get(`http://lhl-social-api.herokuapp.com/movies/title/?title=${queryStringTitle}`)
    .then(response => {
      setSearchedMovie(response.data.movies)
    })
  }

  return(
    <main className="favorite-form">
      <h3>Add a New Favorite</h3>
      <form onSubmit={movieSearch}>
        <label>
          Movie Title:
          <input 
            type="text" 
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </label>
        <input type="submit" value="Search"/>
      </form>
      <br/>
  
      {searchedMovie && <PickFav user={props.user} searchedMovie={searchedMovie} saveToFavoriteList={saveToFavoriteList} />}
    </main>
  )
}
