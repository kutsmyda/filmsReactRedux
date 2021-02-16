import React from "react";
import styles from './FilmItem.module.css'

export const FilmItem = (props)=>{
    const {original_title, overview, release_date, vote_avarage, vote_count, poster_path} = props
    // console.log(original_title)

    console.log( 'from FilmList')

    return(
        <div className={styles.filmItem}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`${original_title} poster`}/>
            </div>
            <div>
                <h2>{original_title}</h2>
                <span>Rating: {vote_avarage} (total votes: {vote_count})</span>
                <p>{overview}</p>
                <span>release_date : {release_date}</span>
            </div>
        </div>
    )


}