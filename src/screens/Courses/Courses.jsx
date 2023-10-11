import { AudioOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Input, Space } from 'antd';
import Course from './Course';
import SerachCourses from '../../components/common/search/serachCourses';






const Courses = () => {
  const [coursesList , setCoursesList] = useState([
    {courseName:'دوره آموزش جامع ریکت' , teacher:'آرمین ساکت' , date:'1402/9/10'},
    {courseName:'دوره آموزش جامع ریکت' , teacher:'آرمین ساکت' , date:'1402/9/10'},
    {courseName:'دوره آموزش جامع ریکت' , teacher:'آرمین ساکت' , date:'1402/9/10'},
    {courseName:'دوره آموزش جامع ریکت' , teacher:'آرمین ساکت' , date:'1402/9/10'},
  ])
  return (
    <div>




    <section>
        <div className='mx-auto w-2/5 mt-12'><img src="laptop.png" alt="" /></div>
    </section>

    <section className='mx-auto text-center'>
        <h2 className='mb-12'>دوره های آموزشی</h2>
        <SerachCourses />

        <div className='border w-full xl:w-10/12 mt-12 mx-auto md:flex md:flex-wrap justify-center gap-16 '>
          {coursesList.map((item , index)=>{
          return(
            <Course key={index} courseName={item.courseName} teacher={item.teacher} date={item.date}/>          
          )
          }) }
        </div>

        <button className='block mx-auto rounded-xl mt-12 py-3 px-10 border-zgh border'>بیشتر</button>

    </section>


    </div>
  )
}

export default Courses