import {instanceAxios} from "./axiosConfig";

class MoviesService {

    async getMovies (){
        const {data} = await instanceAxios.get('/discover/movie')
        return data
    }

    async getMovieDetailId(movieId){
        const {data} = await instanceAxios.get(`/movie/${movieId}`)
        return data
    }


}
export const movieService = new MoviesService()

