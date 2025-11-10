import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center flex-col  items-center h-screen '>
        <div className='animate-spin relative mb-2 rounded-full h-16 w-16 border-4 border-t-white border-gray-700'>
        </div>
        <h2 className='font-semibold'>Loading...</h2>
    </div>
  )
}

export default Loader