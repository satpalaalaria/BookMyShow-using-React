import { combineReducers } from "redux";
import recommendMovieReducer from './RecommendMovie/recommendMovieReducer'
import bestEntertenmentReducer from './BestEnterrenment/bestEntertenmentReducer'
import movieReducer from "./Movie/movieReducer";
import topMovieReducer from './TopMovie/topMovieReducer'
import reducerAboutMovie from './About/aboutReducer'
import reducerSearchMovie from './SearchMovie/searchMovieReducer'

const rootReducer=combineReducers({
    user:recommendMovieReducer,
    bestEnt:bestEntertenmentReducer,
    movieReduc:movieReducer,
    topMovieReduc:topMovieReducer,
    reducerAbou:reducerAboutMovie,
    reducerSearch:reducerSearchMovie

})

export default rootReducer;