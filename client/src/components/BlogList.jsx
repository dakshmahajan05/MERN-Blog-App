import React, { useState } from 'react'
import { blogCategories } from '../Assets/assets.js'
import {motion} from 'framer-motion'

const BlogList = () => {
    const [menu,setmenu] = useState('All')
  return (
    <div>
        <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
            {blogCategories.map((item)=>(
                <div className='relative ' key={item}>
                    <button onClick={()=>setmenu(item)} className={`cursor-pointer text-gray-500 ${menu===item && `text-white px-4 py-0.5`}`}>
                        {item}
                        {menu ===item && (
                            <motion.div layoutId='underline' transition={{type:"spring",stiffness:500,damping:30}} className='absolute left-0 top-0 right-0 h-7 -z-1 bg-primary rounded-full '>
                            </motion.div>
                        )}
                    </button>
                </div>
            ))}
        </div>
        <div>

        </div>
    </div>
  )
}

export default BlogList