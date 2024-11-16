import React from 'react'
import AllCategory from './AllCategory'
import News from './News'
import LoginOption from './LoginOption'

const Body = () => {
  return (
    <div className='grid grid-cols-3'>
      <AllCategory/>
      <News/>
      <LoginOption/>
    </div>
  )
}

export default Body