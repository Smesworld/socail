import React from "react";
import RecentMovieListItem from './RecentMovieListItem'

export default function RecentSuggestion(props) {
  let recents = props.recent.map((movie) => {
    return <RecentMovieListItem title={movie.newSuggestion.title} imdb_link={movie.newSuggestion.imdb_link}/>
  })

  return (
    <article>
      <div className="recent"> 
       {recents}
      </div>
    </article>
    )
}
