import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
} from "swiper/modules";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "../../../node_modules/swiper/swiper-bundle.min.js";



const ModalSlider = ({modalStyle , setModalStyle}) => {
  const [image , setImage] = useState([
    {pic : '1.jpg'},
    {pic : '2.jpg'},
    {pic : '3.jpg'},
    {pic : '4.jpg'},
  ])

  const hideModal = () =>{
    setModalStyle('hidden top-0 z-50 bg-gray-600/50 h-screen w-screen ')
  }


  return (
    <div className={modalStyle}>
      <div className='text-center text-white p-3 m-8 bg-red-700 w-16' onClick={hideModal}>
          close
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className=' shadow-2xl bg-slate-500/75 mt-30 w-2/3 h-2/3 mx-auto'
          >

        {image.map((item , index)=>{
          return(
          <SwiperSlide key={index}>
            <div className='w-full h-full'>
              <img className='w-full h-full' src={item.pic} alt="" />
            </div>
          </SwiperSlide>            
          )
        })}


        ...
      </Swiper>      
    </div>

  )
}

export default ModalSlider