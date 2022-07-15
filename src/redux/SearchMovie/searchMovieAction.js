import { FETCH_USERS_FAILURE_SEARCH, FETCH_USERS_REQUEST_SEARCH, FETCH_USERS_SUCCESS_SEARCH } from "./searchMovieType"
import axios from "axios"

export const fetchSearchMovieRequest=()=>{
    return {
        type:FETCH_USERS_REQUEST_SEARCH
    }
}

const fetchSearchMovieSuccess= searchMovie => {
    return {
        type:FETCH_USERS_SUCCESS_SEARCH,
        payload:searchMovie
    }
}

const fetchSearchMovieFailure=error=>{
    return {
        type:FETCH_USERS_FAILURE_SEARCH,
        payload: error
    }
}   

export const fetchSearchMovie =(value)=>{
    // console.log(value,"searchmovie action")
    return (dispatch)=>{
        dispatch(fetchSearchMovieRequest)
        if(!value) return 
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ef2fc7966b7886b23c82a2279f82783c&language=en-US&query=${value}&page=1&include_adult=false`)
        .then(response =>{
            // console.log(response.data.results)
            const searchMovie=response.data.results
            // console.log(response.data.results)
            // console.log("bestmovie,,,,", searchMovie)
            dispatch(fetchSearchMovieSuccess(searchMovie))
        })
        .catch(error=>{
            const errorMsg =error.message
            dispatch(fetchSearchMovieFailure(errorMsg))
        })
    }
}