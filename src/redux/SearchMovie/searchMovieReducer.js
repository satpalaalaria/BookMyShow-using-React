import { FETCH_USERS_FAILURE_SEARCH, FETCH_USERS_REQUEST_SEARCH, FETCH_USERS_SUCCESS_SEARCH } from "./searchMovieType"

const initilState ={
    loading:false,
    searchMovie:[],
    error:''
}

const reducerSearchMovie = (state=initilState,action)=>{
    // console.log("search movie.", action.payload)
    switch (action.type){
        case FETCH_USERS_REQUEST_SEARCH:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS_SEARCH:
            return{
                loading:false,
                searchMovie:action.payload,
                error:''
            }
        case FETCH_USERS_FAILURE_SEARCH:
            return{
                loading:false,
                searchMovie:[],
                error:action.payload
            }
        default : return state
    }
}

export default reducerSearchMovie;