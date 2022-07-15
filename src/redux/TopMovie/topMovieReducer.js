import { FETCH_USERS_FAILURE_TOP_MOVIE, FETCH_USERS_REQUEST_TOP_MOVIE, FETCH_USERS_SUCCESS_TOP_MOVIE } from "./topMovieType"


const initilState ={
    loading:false,
    topmovie:[],
    error:''
}

const topMovieReducer = (state=initilState,action)=>{
    // console.log("top-movie...", action.payload)
    switch (action.type){
        case FETCH_USERS_REQUEST_TOP_MOVIE:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS_TOP_MOVIE:
            return{
                loading:false,
                topmovie:action.payload,
                error:''
            }
        case FETCH_USERS_FAILURE_TOP_MOVIE:
            return{
                loading:false,
                topmovie:[],
                error:action.payload
            }
        default : return state
    }
}

export default topMovieReducer;