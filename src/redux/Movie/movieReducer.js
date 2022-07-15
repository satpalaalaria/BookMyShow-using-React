import { FETCH_USERS_FAILURE_MOVIE, FETCH_USERS_REQUEST_MOVIE, FETCH_USERS_SUCCESS_MOVIE } from "./movieType"


const initilState ={
    loading:false,
    movie:[],
    error:''
}

const movieReducer = (state=initilState,action)=>{
    // console.log("movie...", action.payload)
    switch (action.type){
        case FETCH_USERS_REQUEST_MOVIE:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS_MOVIE:
            return{
                loading:false,
                movie:action.payload,
                error:''
            }
        case FETCH_USERS_FAILURE_MOVIE:
            return{
                loading:false,
                movie:[],
                error:action.payload
            }
        default : return state
    }
}

export default movieReducer;