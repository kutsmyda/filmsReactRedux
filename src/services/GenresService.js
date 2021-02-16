import {instanceAxios} from "./axiosConfig";

class GenresService {

    async getGenres() {
        const {data} = await instanceAxios.get('/genre/movie/list')
        return data
    }
}

export const genresService = new GenresService()
