import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTopMovie } from '../redux/TopMovie/topMovieAction'
import noImage from '../sourceImage/no_image.png'
import {useNavigate} from 'react-router-dom';


function UserTopMovie({ userData, fetchTopMovie }) {
    // console.log("TOPmovie...", userData)
    const navigate=useNavigate();
    useEffect(() => {
        fetchTopMovie()
    }, [fetchTopMovie])
  
    return userData.loading ? (
        <h2>Loading....</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h2>TOP Movie</h2>
            <div className='movie-result'>
                {
                    userData && userData.topmovie && userData.topmovie.map((user, index) =>
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
        userData: state.topMovieReduc
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTopMovie: () => dispatch(fetchTopMovie())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTopMovie);