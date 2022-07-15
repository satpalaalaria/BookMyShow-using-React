import { FETCH_USERS_ABOUT_FAILURE, FETCH_USERS_ABOUT_REQUEST, FETCH_USERS_ABOUT_SUCCESS } from "./aboutType"

const initilState ={
    loading:false,
    aboutMovie:[],
    error:''
}

const  reducerAboutMovie = (state=initilState,action)=>{
    // console.log("best..movie.", action.payload)
    switch (action.type){
        case FETCH_USERS_ABOUT_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_ABOUT_SUCCESS:
            return{
                loading:false,
                aboutMovie:action.payload,
                error:''
            }
        case FETCH_USERS_ABOUT_FAILURE:
            return{
                loading:false,
                aboutMovie:[],
                error:action.payload
            }
        default : return state
    }
}

export default reducerAboutMovie;