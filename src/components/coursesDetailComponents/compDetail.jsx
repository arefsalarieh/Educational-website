import { CheckCircleOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import Button from '../common/button/button'
import SmallSlider from '../smallSlider/SmallSlider'
import Detail from '../Detail/Detail'



const CompDetail = () => {
  const [relationCourses , setRelationCourses] = useState([
    {name:'دوره ریکت ترم بهار' , src:'minislide.png' , date : 'سال 1399'},
    {name:'دوره ریکت ترم بهار' , src:'minislide.png' , date : 'سال 1399'},
    {name:'دوره ریکت ترم بهار' , src:'minislide.png' , date : 'سال 1399'},
    {name:'دوره ریکت ترم بهار' , src:'minislide.png' , date : 'سال 1399'},
    {name:'دوره ریکت ترم بهار' , src:'minislide.png' , date : 'سال 1399'},
])
  
  return (
    <div className='lg:flex lg:flex-wrap bg-mygray pb-12 font-irSans'>
        <Detail/>



       <div className=' lg:w-5/12'>
          <img className='w-10/12 mt-12' src='./courses.png'/>
       </div>



        <div className='flex w-full items-center text-center mt-8'>
          <span className=' border-black w-full h-1'></span>
          <h2 className='w-3/12 text-lg font-extrabold'>دوره های مرتبط</h2>
          <span className=' border-black w-full h-1'></span>        
        </div>

        <div className='container border  mt-16'>
            <SmallSlider relationCourses={relationCourses}/>
        </div>

        <div className="mx-auto">
          <svg
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="bg-gray-700 shadow-2xl text-white rounded-full w-14 h-14 relative top-20 "
          >
            <path
              d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
    </div>
  )
}

export default CompDetail