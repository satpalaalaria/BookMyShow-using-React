import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./bestEntertenmentType"
import axios from "axios"

export const fetchMovieRequest=()=>{
    return {
        type:FETCH_USERS_REQUEST
    }
}

const fetchMovieSuccess= bestMovie => {
    return {
        type:FETCH_USERS_SUCCESS,
        payload:bestMovie
    }
}

const fetchMovieFailure=error=>{
    return {
        type:FETCH_USERS_FAILURE,
        payload: error
    }
}   

export const fetchBestMovie =()=>{
    return (dispatch)=>{
        dispatch(fetchMovieRequest)
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=25e1230906b8dcf69bf25f4bdedfbf20&language=en-US&page=1')
        .then(response =>{
            // console.log(response.data.results)
            const bestMovie=response.data.results
            // console.log(response.data.results)
            // console.log("bestmovie,,,,", bestMovie)
            dispatch(fetchMovieSuccess(bestMovie))
        })
        .catch(error=>{
            const errorMsg =error.message
            dispatch(fetchMovieFailure(errorMsg))
        })
    }
}