import React, { useState } from 'react'
import { blog_data, blogCategories } from '../Assets/assets.js'
import {motion} from 'framer-motion'
import BlogCard from './BlogCard.jsx'

const BlogList = () => {
    const [menu,setmenu] = useState('All')
  return (
    <div>
        <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
            {blogCategories.map((item)=>(
                <button 
                    key={item}
                    onClick={()=>setmenu(item)} 
                    className={`relative cursor-pointer px-4 py-1 rounded-full transition 
                    ${menu===item ? 'text-white' : 'text-gray-500'}`}
                >
                    {item}

                    {menu === item && (
                        <motion.div
                            layoutId='underline'
                            transition={{ type:"spring", stiffness:500, damping:30 }}
                            className='absolute inset-0 bg-primary rounded-full -z-10'
                        />
                    )}
                </button>
            ))}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mx-8 sm:mx-16 xl:mx-40'>
            {blog_data
              .filter((blog)=> menu==='All' ? true : blog.category===menu)
              .map((blog)=> (
                <BlogCard key={blog._id} blog={blog}/>
            ))}
        </div>
    </div>
  )
}

export default BlogList
