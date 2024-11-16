import React from 'react'
import logo from '../../../assets/logo.png'
import moment from 'moment'

const Header = () => {
  return (
    <div className='flex flex-col items-center my-5'>
      <img src={logo}  />
      <p className='text-slate-500 mt-3'>Journalism Without Fear or Favour</p>
      <p className='text-slate-700'>{moment().format('dddd, LL')}</p>
    </div>
  )
}

export default Header