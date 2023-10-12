import React, { useState } from 'react'
import SerachCourses from '../search/serachCourses'
import Course from './Course'

const AllCourses = ({parentShape , courseShape}) => {

    const [coursesList , setCoursesList] = useState([
        {courseName:'دوره آموزش جامع ریکت' , teacher:'آرمین ساکت' , date:'1402/9/10' , src:'c2.png'},
        {courseName:'دوره آموزش جامع ریکت' , teacher:'آرمین ساکت' , date:'1402/9/10' , src:'c2.png'},
        {courseName:'دوره آموزش جامع ریکت' , teacher:'آرمین ساکت' , date:'1402/9/10' , src:'c2.png'},
        {courseName:'دوره آموزش جامع ریکت' , teacher:'آرمین ساکت' , date:'1402/9/10' , src:'c2.png'},
      ])

      const [parentDesign , setParentDesign] = useState([
         // course wraper style for courses
        {parentCourses : 'border w-full xl:w-10/12 mt-12 mx-auto md:flex md:flex-wrap justify-center gap-16 ' },
        //course wraper style for landing 
        {parentLanding : 'flex justify-around flex-wrap lg:flex-nowrap mt-8 gap-8 w-full px-18 text-xl text-center'},
 
      ])
  return (
    <section className='mx-auto text-center'>
        <h2 className='mb-12'>دوره های آموزشی</h2>
        <SerachCourses />

        <div className={parentShape == 'courses' ? parentDesign[0].parentCourses : parentDesign[1].parentLanding }>
          {coursesList.map((item , index)=>{
          return(
            <Course key={index} courseShape={courseShape} courseName={item.courseName}  teacher={item.teacher} date={item.date} src={item.src}/>          
          )
          }) }
        </div>

        <button className='block mx-auto rounded-xl mt-12 py-3 px-10 border-zgh border'>بیشتر</button>

    </section>
  )
}

export default AllCourses