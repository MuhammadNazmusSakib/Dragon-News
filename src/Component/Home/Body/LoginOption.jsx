import React from 'react'
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa'

const LoginOption = () => {
  return (
    <div>
      <h2 className='text-2xl'>Login With</h2>
      <div className='flex flex-col my-5'>
        <button className='flex items-center gap-4 px-3 py-2 bg-slate-300 mb-2'><span className='text-lg'><FaGoogle /></span>Login With Google</button>
        <button className='flex items-center gap-4 px-3 py-2 bg-slate-300'><span className='text-lg'><FaGithub /></span>Login With Github</button>
      </div>
      <div className='border border-slate-300 p-3'>
        <h2 className='text-2xl'>Find Us On</h2>
        <div className='flex flex-col my-5'>
          <button className='flex items-center gap-4 px-3 py-2 bg-slate-300 mb-2'><span className='text-lg'><FaFacebook /></span>Facebook</button>
          <button className='flex items-center gap-4 px-3 py-2 bg-slate-300 mb-2'><span className='text-lg'><FaTwitter /></span>Twitter</button>
          <button className='flex items-center gap-4 px-3 py-2 bg-slate-300'><span className='text-lg'><FaInstagram /></span>Instagram</button>
        </div>
      </div>
      <div className='border border-slate-300 p-3 h-screen my-5'></div>
    </div>
  )
}

export default LoginOption