import { FETCH_USERS_ABOUT_FAILURE, FETCH_USERS_ABOUT_REQUEST, FETCH_USERS_ABOUT_SUCCESS } from "./aboutType"
import axios from "axios"



export const fetchAboutRequest=()=>{
    return {
        type:FETCH_USERS_ABOUT_REQUEST
    }
}

const fetchAboutSuccess= aboutMovie => {
    return {
        type:FETCH_USERS_ABOUT_SUCCESS,
        payload:aboutMovie
    }
}

const fetchAboutFailure=error=>{
    return {
        type:FETCH_USERS_ABOUT_FAILURE,
        payload: error
    }
}   

export const fetchAboutMovie =(id)=>{
    // const { id } = useParams();
    // console.log(id);
    return (dispatch)=>{
        dispatch(fetchAboutRequest)
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ef2fc7966b7886b23c82a2279f82783c`)
        .then(response =>{
            const aboutMovie=response.data
            // console.log(response.data.results)
            // console.log("bestmovie,,,,", aboutMovie)
            dispatch(fetchAboutSuccess(aboutMovie))
        })
        .catch(error=>{
            const errorMsg =error.message
            dispatch(fetchAboutFailure(errorMsg))
        })
    }
}