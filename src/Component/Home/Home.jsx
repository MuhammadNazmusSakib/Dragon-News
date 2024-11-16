import React from 'react'
import LatestNews from './Header/LatestNews'
import LoginButton from './Header/LoginButton'
import Body from './Body/Body'

const Home = () => {
  return (
    <div>
        <div>
            <LatestNews/>
        </div>
        <div>
            <LoginButton/>
        </div>
        <div>
            <Body/>
        </div>
    </div>
  )
}

export default Home