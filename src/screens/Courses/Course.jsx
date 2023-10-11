import React from 'react'

const Course = ({courseName , teacher , date}) => {
  return (
    <div className='border md:w-5/12 rounded-xl p-8 lg:flex shadow-2xl '>
        <div className='lg:w-1/2  rounded-xl shadow-inner bg-course-bg'>
            <img className='mx-auto'  src="c2.png" alt="" />
        </div>
        <div className='lg:w-1/2 text-center lg:text-right lg:pr-6'>
            <h2 className='font-bold mt-4 xl:mt-4'>{courseName}</h2>
            <p className='mt-8'>مدرس : {teacher} </p>
            <p className='mt-8 borde-8 '>{date}</p>
            <button className=' block  border-zgh border rounded-xl mx-auto xl:mr-18 mt-6 py-1 px-4'>ثبت دوره</button>
        </div>
    </div>
  )
}

export default Course