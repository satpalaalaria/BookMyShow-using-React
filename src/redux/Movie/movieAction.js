import axios from "axios"
import { FETCH_USERS_FAILURE_MOVIE, FETCH_USERS_REQUEST_MOVIE, FETCH_USERS_SUCCESS_MOVIE } from "./movieType"

export const fetchNewMovieRequest=()=>{
    return {
        type:FETCH_USERS_REQUEST_MOVIE
    }
}

const fetchNewMovieSuccess= movie => {
    return {
        type:FETCH_USERS_SUCCESS_MOVIE,
        payload:movie
    }
}

const fetchNewMovieFailure=error=>{
    return {
        type:FETCH_USERS_FAILURE_MOVIE,
        payload: error
    }
}   

export const fetchMovie =()=>{
    return (dispatch)=>{
        dispatch(fetchNewMovieRequest)
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=25e1230906b8dcf69bf25f4bdedfbf20&language=en-US&page=1')
        .then(response =>{
            // console.log(response.data.results)
            const movie=response.data.results
            // console.log(response.data.results)
            // console.log("bestmovie,,,,", movie)
            dispatch(fetchNewMovieSuccess(movie))
        })
        .catch(error=>{
            const errorMsg =error.message
            dispatch(fetchNewMovieFailure(errorMsg))
        })
    }
}