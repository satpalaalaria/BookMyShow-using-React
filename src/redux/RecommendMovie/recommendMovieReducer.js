import { FETCH_USERS_FAILURE_REC, FETCH_USERS_REQUEST_REC, FETCH_USERS_SUCCESS_REC } from "./recommendMovieType"

const initilState ={
    loading:false,
    users:[],
    error:''
}

const reducer = (state=initilState,action)=>{
    // console.log("recomend..movie.", action.payload)
    switch (action.type){
        case FETCH_USERS_REQUEST_REC:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS_REC:
            return{
                loading:false,
                users:action.payload,
                error:''
            }
        case FETCH_USERS_FAILURE_REC:
            return{
                loading:false,
                users:[],
                error:action.payload
            }
        default : return state
    }
}

export default reducer;