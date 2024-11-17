import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'

const LatestNews = () => {

  const [currentNews, setCurrentNews] = useState([])
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/category/01")
    .then(res => res.json())
    .then(data => setCurrentNews(data.data))
  }, [])
  // console.log(currentNews.title)

  return (
    <div className='bg-[#F3F3F3] px-4 py-1'>
      <Marquee pauseOnHover={true}>
      <h3 className='bg-red-500 text-white px-4 py-1'>Latest: </h3>
        {
          currentNews.map(news =>
              <p className='ml-3'>{news.title} || </p>
          )
        }
      </Marquee>
    </div>
  )
}

export default LatestNews