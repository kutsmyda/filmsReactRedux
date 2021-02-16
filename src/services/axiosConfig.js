import axios from "axios";

export const instanceAxios  = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers : {
        Authorization : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWUwNGU4YWU3NTYwMWNmY2I4YmYwNGExMjYzZTAzNCIsInN1YiI6IjYwMWQ1MGFmN2FkMDhjMDAzZmUxNjNmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dFmdBK0Yv2xSiPB_6LYqjMIQ7iD-1Nmx12-9RSEiMU4'
    }
})