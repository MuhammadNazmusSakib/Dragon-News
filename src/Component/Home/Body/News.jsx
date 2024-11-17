import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const News = () => {

  const dataset = useLoaderData()

  return (
    <div>
      <h2 className='text-2xl'>
        Dragon News Home
      </h2>
      <div className='my-5'>
        {
          dataset.data.map((news, index) =>
            <div key={index} className='my-5 border border-slate-400 p-3 pb-8'>
              <div className='flex gap-3 px-3 py-2 my-3 bg-slate-300'>
                <img src={news.author.img} className='rounded-full w-8' />
                <div>
                  <h3>{news.author.name}</h3>
                  <p>{news.author.published_date}</p>
                </div>
              </div>
              <div>
                <h2 className='text-lg font-bold'>{news.title}</h2>
                <figure className='my-3'>
                  <img src={news.image_url} alt="" />
                </figure>
                <div className="p-4">
                  <p className="text-gray-600 mb-2">
                    {news.details.slice(0, 300)}...{' '}
                    <span className="text-blue-500 cursor-pointer">Read More</span>
                  </p>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default News