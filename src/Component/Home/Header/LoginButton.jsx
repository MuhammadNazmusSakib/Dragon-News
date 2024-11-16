import React from 'react'
import { RiAccountCircleFill } from 'react-icons/ri'

const LoginButton = () => {
  return (
    <div className='flex place-content-between my-5'>
      <div></div>
      <div className='font-[500]'>
        <button className='px-3 py-2'>Home</button>
        <button className='px-3 py-2'>About</button>
        <button className='px-3 py-2'>Career</button>
      </div>
      <div className='flex items-center gap-3'>
        <div className='text-5xl'>
        <RiAccountCircleFill />
        </div>
        <button className='px-3 py-2 bg-[#403F3F] text-white'>Login</button>
      </div>
    </div>
  )
}

export default LoginButton