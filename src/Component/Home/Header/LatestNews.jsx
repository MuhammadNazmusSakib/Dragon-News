import React from 'react'
import Marquee from 'react-fast-marquee'

const LatestNews = () => {
  return (
    <div className='bg-[#F3F3F3] px-4 py-1'>
      <Marquee pauseOnHover={true}>
        <h3 className='bg-red-500 text-white px-4 py-1'>Latest: </h3>
        <p className='ml-3'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
      </Marquee>
    </div>
  )
}

export default LatestNews