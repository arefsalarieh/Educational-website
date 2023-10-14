import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import '../../../node_modules/swiper/swiper-bundle.min.css';
import Slide from './slide';

const TeachersSlider = () => {
  const[teacher , setTeacher] = useState([
    {name:'دکتر محمد حسین بحرالعلوم' , pic:'./dr.png' , desc:'رم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استست چاپگرها و متون بلکه ی مورد نیاز و کارب'},
    {name:'دکتر محمد حسین بحرالعلوم' , pic:'./dr.png' , desc:'رم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استست چاپگرها و متون بلکه ی مورد نیاز و کارب'},
    {name:'دکتر محمد حسین بحرالعلوم' , pic:'./dr.png' , desc:'رم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استست چاپگرها و متون بلکه ی مورد نیاز و کارب'},
    {name:'دکتر محمد حسین بحرالعلوم' , pic:'./dr.png' , desc:'رم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استست چاپگرها و متون بلکه ی مورد نیاز و کارب'},
  ])

  return (
    <div className='gap-6 md:flex px-10 xl:px-18 pt-8'>
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        breakpoints={{
          // when window width is >= 640px

          // when window width is >= 768px
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
        scrollbar={{ draggable: true }}
        

  >

    {teacher.map((item , index)=>{
      return(


        <SwiperSlide key={index}><Slide name={item.name} pic={item.pic} desc={item.desc} /></SwiperSlide>
      )
    })}











  </Swiper>



    
    </div>
  )
}

export default TeachersSlider