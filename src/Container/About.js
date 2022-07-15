import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import noImage from '../sourceImage/no_image.png'
import {fetchAboutMovie  } from '../redux/About/aboutAction'
import { useParams } from 'react-router-dom';
import gift from '../sourceImage/ben-redblock-loading.gif';
import "../Style/about.css"
import {useNavigate} from 'react-router-dom';


function About({ userMovieData, fetchAboutMovie }) {
    const navigate=useNavigate();
    const { id } = useParams()
    // console.log("about...", userMovieData)
    useEffect(() => {
        fetchAboutMovie(id)
    }, [fetchAboutMovie])
    
    return userMovieData.aboutMovie.loading ? (
        <h2>Loading....</h2>
    ) : userMovieData.error ? (
        <h2>{userMovieData.aboutMovie.error}</h2>
    ) : (
        <div>
           <button style={{marginTop:'1rem'}} onClick={() => navigate(-1)}>Go back</button>
            {userMovieData.aboutMovie ? (
                <>
                    <div className="movie_card" id="bright">
                        <div className="info_section">
                            <div className="movie_header">
                                <img className="locandina" src={userMovieData.aboutMovie.poster_path !== null ? `https://www.themoviedb.org/t/p/w220_and_h330_face${userMovieData.aboutMovie.poster_path}` : noImage}
                                    alt={userMovieData.aboutMovie?.title}
                                />
                                <h1>{userMovieData.aboutMovie?.title}</h1>
                                <h4>{userMovieData.aboutMovie?.release_date}, {userMovieData.aboutMovie.original_language}</h4>
                                <span className="minutes">{userMovieData.aboutMovie.runtime} min</span>
                                <p className="type">Action, Crime, Fantasy</p>
                                <h4>Vote Average:- {userMovieData.aboutMovie?.vote_average}</h4>
                                <h4>Vote Count:- {userMovieData.aboutMovie?.vote_count}</h4>
                            </div>
                            <div className="movie_desc">
                                <p className="text">
                                    {userMovieData.aboutMovie.overview}
                                </p>
                            </div>
                        </div>  
                        <div className="blur_back bright_back"style={{backgroundImage:`url(https://image.tmdb.org/t/p/w220_and_h330_face${userMovieData.aboutMovie?.backdrop_path})`}} ></div>
                    </div>
                </>
            ) : (
                <div className="lodebal">
                    <img className="loding-data" src={gift} alt="loading data" />
                </div>
            )}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        userMovieData: state.reducerAbou
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAboutMovie: (id) => dispatch(fetchAboutMovie(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
