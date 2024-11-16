import React from 'react'
import AllCategory from './AllCategory'
import News from './News'
import LoginOption from './LoginOption'

const Body = () => {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-3'>
        <AllCategory />
      </div>
      <div className='col-span-6'>
        <News />
      </div>
      <div className='col-span-3'>
        <LoginOption />
      </div>
    </div>
  )
}

export default Body