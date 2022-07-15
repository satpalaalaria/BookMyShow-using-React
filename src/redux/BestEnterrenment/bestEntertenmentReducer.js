import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./bestEntertenmentType"

const initilState ={
    loading:false,
    bestMovie:[],
    error:''
}

const reducerbestMovie = (state=initilState,action)=>{
    // console.log("best..movie.", action.payload)
    switch (action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading:false,
                bestMovie:action.payload,
                error:''
            }
        case FETCH_USERS_FAILURE:
            return{
                loading:false,
                bestMovie:[],
                error:action.payload
            }
        default : return state
    }
}

export default reducerbestMovie;