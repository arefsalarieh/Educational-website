import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import "../../../node_modules/swiper/swiper-bundle.min.css";
import SmallSlide from './smallSlide';



const SmallSlider = () => {
    const [relationCourses , setRelationCourses] = useState([
        {name:'دوره ریکت ترم بهار' , src:'minislide.png' , date : 'سال 1399'},
        {name:'دوره ریکت ترم بهار' , src:'minislide.png' , date : 'سال 1399'},
        {name:'دوره ریکت ترم بهار' , src:'minislide.png' , date : 'سال 1399'},
        {name:'دوره ریکت ترم بهار' , src:'minislide.png' , date : 'سال 1399'},
        {name:'دوره ریکت ترم بهار' , src:'minislide.png' , date : 'سال 1399'},
    ])
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      breakpoints={{
        768: {

            slidesPerView: 2,
          },
          1024: {

            slidesPerView: 3,
          },  
    
      }}  
      slidesPerView={1}      
 
      navigation
      pagination={{ clickable: true }}


    >

        {relationCourses.map((item , index)=>{
            return(
                <SwiperSlide key={index}>
                    <SmallSlide name={item.name} src={item.src} date={item.date}/>
                </SwiperSlide>                
            )
        })}



    </Swiper>
  )
}

export default SmallSlider