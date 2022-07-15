import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import noImage from '../sourceImage/no_image.png'
import { fetchBestMovie } from '../redux/BestEnterrenment/bestEntertenmentAction'
import {useNavigate} from 'react-router-dom';


function TheBestOfEntertenment({ userMovieData, fetchBestMovie }) {
    const navigate=useNavigate();
    // console.log("best...", userMovieData)
    useEffect(() => {
        fetchBestMovie()
    }, [fetchBestMovie])
    
    return userMovieData.loading ? (
        <h2>Loading....</h2>
    ) : userMovieData.error ? (
        <h2>{userMovieData.error}</h2>
    ) : (
        <div>
            <h1>Best of Entertenment</h1>
            <div className='movie-result'>
                {
                    userMovieData && userMovieData.bestMovie && userMovieData.bestMovie.map((user, index) =>
                        <div key={user.id} className="card" onClick={()=>{
                            navigate(`/About/${user.id}`)
                          }}>
                            <img
                                src={user.poster_path !== null ? `https://www.themoviedb.org/t/p/w220_and_h330_face${user.poster_path}` : noImage}
                                alt={user.title}
                                style={{ width: "100%", height: "auto" }}
                            />
                            <div className="container1">
                                <span className="movie-title"><b>{user.title}</b></span>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        userMovieData: state.bestEnt
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBestMovie: () => dispatch(fetchBestMovie())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TheBestOfEntertenment);
