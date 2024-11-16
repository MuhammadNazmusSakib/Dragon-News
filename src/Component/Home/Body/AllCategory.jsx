import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const AllCategory = () => {
  const [Categories, setCategories] = useState([])
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
    .then(res => res.json())
    .then(data => setCategories(data.data.news_category))
  }, [])
  return (
    <div>
      <h2 className='text-2xl'>All Category</h2>
      <div className='flex flex-col my-5'>
        {
          Categories.map(category => 
            <NavLink to={`/category/${category.category_id}`}>
            <button 
            key={category.category_id}
            className='px-3 py-2 hover:bg-[#E7E7E7] text-left'
            >{category.category_name}</button>
            </NavLink>
          )
        }
      </div>
    </div>
  )
}

export default AllCategory