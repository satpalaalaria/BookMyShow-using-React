import { FETCH_USERS_FAILURE_REC, FETCH_USERS_REQUEST_REC, FETCH_USERS_SUCCESS_REC } from "./recommendMovieType"
import axios from "axios"

export const fetchUserRequest=()=>{
    return {
        type:FETCH_USERS_REQUEST_REC
    }
}

const fetchUserSuccess= users => {
    return {
        type:FETCH_USERS_SUCCESS_REC,
        payload:users
    }
}

const fetchUserFailure=error=>{
    return {
        type:FETCH_USERS_FAILURE_REC,
        payload: error
    }
}   

export const fetchUsers =()=>{
    return (dispatch)=>{
        dispatch(fetchUserRequest)
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=25e1230906b8dcf69bf25f4bdedfbf20&language=en-US&page=1')
        .then(response =>{
            const users=response.data.results
            // console.log("recommd...",users)
            dispatch(fetchUserSuccess(users))
        })
        .catch(error=>{
            // console.log("errror..", error)
            const errorMsg =error.message
            dispatch(fetchUserFailure(errorMsg))
        })
    }
}