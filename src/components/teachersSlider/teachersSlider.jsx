import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../node_modules/swiper/swiper-bundle.min.css';
import Slide from './slide';

const TeachersSlider = () => {
  const[teacher , setTeacher] = useState([
    {name:'دکتر محمد حسین بحرالعلوم' , pic:'./dr.png' , desc:'رم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استست چاپگرها و متون بلکه ی مورد نیاز و کارب'},
    {name:'دکتر محمد حسین بحرالعلوم' , pic:'./dr.png' , desc:'رم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استست چاپگرها و متون بلکه ی مورد نیاز و کارب'},
    {name:'دکتر محمد حسین بحرالعلوم' , pic:'./dr.png' , desc:'رم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استست چاپگرها و متون بلکه ی مورد نیاز و کارب'},
    {name:'دکتر محمد حسین بحرالعلوم' , pic:'./dr.png' , desc:'رم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استست چاپگرها و متون بلکه ی مورد نیاز و کارب'},
    {name:'دکتر محمد حسین بحرالعلوم' , pic:'./dr.png' , desc:'رم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استست چاپگرها و متون بلکه ی مورد نیاز و کارب'},
    {name:'دکتر محمد حسین بحرالعلوم' , pic:'./dr.png' , desc:'رم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استست چاپگرها و متون بلکه ی مورد نیاز و کارب'},
    {name:'دکتر محمد حسین بحرالعلوم' , pic:'./dr.png' , desc:'رم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استست چاپگرها و متون بلکه ی مورد نیاز و کارب'},
  ])
  return (
    <Swiper
    className='shadow-xl'
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
 
      1200: {
        spaceBetween : 20 ,            
        slidesPerView: 4,        
      }
      
    }}
    slidesPerView={1}
    navigation



  >
    {teacher.map((item , index)=>{
      return(
    <SwiperSlide key={index}>
      <Slide name={item.name} pic={item.pic} desc={item.desc}/>
    </SwiperSlide>        
      )
    })}



  </Swiper>
  )
}

export default TeachersSlider