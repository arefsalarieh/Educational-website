import React, { useState } from 'react'
import Course from '../common/course/Course'


const Allcourse = ({parentShape , courseShape}) => {
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
        {parentLanding : 'flex justify-around flex-wrap lg:flex-nowrap mt-8 gap-8 w-full px-6 sm:px-18 text-xl text-center'},
 
      ])

      var st = 'st' ;

      if(parentShape == 'courses'){
        st = parentDesign[0].parentCourses;
      }
      else if(parentShape == 'landing'){
        st = parentDesign[1].parentLanding ;
      }

       
      return (
        <section className='mx-auto text-center'>
            
            
    
            <div className={st }>
              {coursesList.map((item , index)=>{
              return(
                <Course key={index} courseShape={courseShape} courseName={item.courseName}  teacher={item.teacher} date={item.date} src={item.src}/>          
              )
              }) }
            </div>
    
            
    
        </section>
      )
}

export default Allcourse