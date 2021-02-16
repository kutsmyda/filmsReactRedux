import React, {useState, useEffect} from "react";
import {useParams, useRouteMatch} from 'react-router-dom'
import {movieService} from "../../services";


export const MovieDetails = () => {
    // const {params: {id}} = useRouteMatch()
    const {id,...rest} = useParams()
    const [filmDetails, setFilmDetails] = useState(null)
    const [isLoading, setIsLoading] = useState(null)


    const getMoviesDetail = async () => {
        try {
            setIsLoading(true)
            const data = await movieService.getMovieDetailId(id)
            setFilmDetails(data)
            console.log(data)
        } catch (e) {
            console.error(e)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getMoviesDetail()
    }, [])

    if (isLoading && !filmDetails || isLoading === null) {
        return <div>Loading....</div>
    }

    return (
        <div>
            <div>
                <img src={`https://image.tmdb.org/t/p/w200${filmDetails.poster_path}`} alt='original-title'/>
            </div>
            <h1>{filmDetails.original_title}</h1>
            <h3>{filmDetails.tagline}</h3>

            <h2>{filmDetails.genres.map(el => <span key={el.id}>{el.name}</span>)}</h2>
            <p>{filmDetails.overview}</p>
        </div>
    )
}