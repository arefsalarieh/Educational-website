import React from 'react'

const SerachCourses = () => {
  return (
  <div className='border w-5/12 flex rounded-lg h-14 overflow-hidden'>
    <input className='block w-full pr-4' placeholder='جستجوی دوره ...'/>    
    <button className='bg-zgh bg-magnifier bg-50 bg-no-repeat bg-center w-1/12  magnifier block text-white p-2.5 px-4'></button>
  </div>
  )
}

export default SerachCourses