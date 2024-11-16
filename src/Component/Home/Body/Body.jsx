import React from 'react'
import AllCategory from './AllCategory'
import LoginOption from './LoginOption'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='grid grid-cols-12 gap-3'>
      <div className='col-span-3'>
        <AllCategory />
      </div>
      <div className='col-span-6'>
        <Outlet />
      </div>
      <div className='col-span-3'>
        <LoginOption />
      </div>
    </div>
  )
}

export default Body