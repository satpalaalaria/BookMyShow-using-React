import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMovie } from '../redux/Movie/movieAction'
import noImage from '../sourceImage/no_image.png'
import {useNavigate} from 'react-router-dom';


function UserMovie({ userData, fetchMovie }) {
    // console.log("movie...", userData)
    const navigate=useNavigate();
    useEffect(() => {
        fetchMovie()
    }, [fetchMovie])
  
    return userData.loading ? (
        <h2>Loading....</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h2>Movie</h2>
            <div className='movie-result'>
                {
                    userData && userData.movie && userData.movie.map((user, index) =>
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
        userData: state.movieReduc
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMovie: () => dispatch(fetchMovie())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMovie);