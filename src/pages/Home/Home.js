import React, {useEffect, useState} from "react";
import {movieService} from "../../services";
import {FilmList} from "../../components/FilmList";
import {genresService} from "../../services";
import {useHistory} from 'react-router-dom'

import styles from './Home.module.css'


export const Home = () => {
    const history = useHistory()
    const [moviesList, setMoviesList] = useState([])
    const [isLoading, setIsLoading] = useState(null)

    const fetchMovies = async () => {
        try {

            const {results, page, total_pages, total_results} = await movieService.getMovies()
            return results
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false)
        }

    }

    const fetchGenres = async () => {
        try {
            setIsLoading(true)
            const {genres} = await genresService.getGenres()
            return genres
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false)
        }

    }

    const fetchMoviesData = async ()=>{
        const requests = [fetchMovies(),fetchGenres()]

        try {
            setIsLoading(true)
            const [movies,genres] = await Promise.all(requests)

            const mergedWithGenresMovies = movies.map((movie)=>{
                const {genre_ids}=movie;
                const movieGenresList = genre_ids.map(genreId=>genres.find(el => el.id === genreId))
                    return {
                        ...movie,
                        movieGenresList,
                    }
                })

            setMoviesList(mergedWithGenresMovies)

        }catch (e){
            console.error(e)
        }finally {
            setIsLoading(false)

        }
    }


    useEffect(() => {
        fetchMoviesData()

    }, [])

    const renderLoadingIndicator = (
        <div className={styles.loading}>Loading...</div>
    )

    const onFilmClick = (film)=>{
        history.push(`/movie/${film.id}`)
    }


    return (
        <div>
            {
                isLoading || isLoading === null ? renderLoadingIndicator : (<FilmList
                    onFilmClick={onFilmClick}
                    items={moviesList}/>)
                //  true ? renderLoadingIndicator : <FilmList />
            }

        </div>
    )
}

