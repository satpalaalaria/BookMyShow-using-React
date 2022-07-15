import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/RecommendMovie/recommendMovieAction'
import noImage from '../sourceImage/no_image.png'
import {useNavigate} from 'react-router-dom';


function UserContainer({ userData, fetchUsers }) {
    const navigate=useNavigate();
    // console.log("componet...", userData)
    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])
  
    return userData.loading ? (
        <h2>Loading....</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h1>Recommended Movies</h1>
            <div className='movie-result'>
                {
                    userData && userData.users && userData.users.map((user, index) =>
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
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);