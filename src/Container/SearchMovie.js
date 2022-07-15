import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSearchMovie } from '../redux/SearchMovie/searchMovieAction'
import noImage from '../sourceImage/no_image.png'
import {useNavigate} from 'react-router-dom';


function TheSearch({ userData, fetchSearchMovie }) {
    const navigate=useNavigate();
    // console.log("componet...", userData)
    useEffect(() => {
        fetchSearchMovie()
    }, [fetchSearchMovie])
    // console.log('search data',userData.searchMovie)
  
    return userData.searchMovie.loading ? (
        <h2>Loading....</h2>
    ) : userData.searchMovie.error ? (
        <h2>{userData.error}</h2>
    ) : userData.searchMovie.length===0 ? (<div style={{display:'none'}}>search movie</div>) : (
        <div>
            <h1>Your Search Movies </h1>
            <div className='movie-result'>
                {
                    userData && userData.searchMovie && userData.searchMovie.map((user, index) =>
                        <div key={user.id} className="card" 
                        onClick={()=>{
                            navigate(`/About/${user.id}`)
                          }}
                          >
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
        userData: state.reducerSearch
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSearchMovie: () => dispatch(fetchSearchMovie())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TheSearch);