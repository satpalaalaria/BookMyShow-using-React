import React from 'react'
import UserContainer from '../Container/RecommendMovie'
import BestEnterrenment from '../Container/TheBestOfEntertenment'
import TheSearch from '../Container/SearchMovie'

function Home() {
  return (

    <> 
        <TheSearch/>
        <UserContainer/>
        <BestEnterrenment/>
    </>
  )
}

export default Home;