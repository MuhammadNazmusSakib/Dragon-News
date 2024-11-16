import React from 'react'
import Header from '../Home/Header/Header'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='w-11/12 mx-auto'>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Root