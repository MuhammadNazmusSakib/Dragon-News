import React from 'react'
import Header from '../Home/Header/Header'
import { Outlet } from 'react-router-dom'
import DataProvider from '../ContexApi/DataProvider'

const Root = () => {
  return (
    <DataProvider>
      <div className='w-11/12 mx-auto'>
        <Header />
        <Outlet />
      </div>
    </DataProvider>
  )
}

export default Root