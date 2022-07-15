import axios from "axios"
import { FETCH_USERS_FAILURE_TOP_MOVIE, FETCH_USERS_REQUEST_TOP_MOVIE, FETCH_USERS_SUCCESS_TOP_MOVIE } from "./topMovieType"

export const fetchTopMovieRequest=()=>{
    return {
        type:FETCH_USERS_REQUEST_TOP_MOVIE
    }
}

const fetchTopMovieSuccess= topmovie => {
    return {
        type:FETCH_USERS_SUCCESS_TOP_MOVIE,
        payload:topmovie
    }
}

const fetchTopMovieFailure=error=>{
    return {
        type:FETCH_USERS_FAILURE_TOP_MOVIE,
        payload: error
    }
}   

export const fetchTopMovie =()=>{
    return (dispatch)=>{
        dispatch(fetchTopMovieRequest)
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=25e1230906b8dcf69bf25f4bdedfbf20&language=en-US&page=1')
        .then(response =>{
            // console.log(response.data.results)
            const topmovie=response.data.results
            // console.log(response.data.results)
            // console.log("Top movie form topmovie.action,,,,", topmovie)
            dispatch(fetchTopMovieSuccess(topmovie))
        })
        .catch(error=>{
            const errorMsg =error.message
            dispatch(fetchTopMovieFailure(errorMsg))
        })
    }
}