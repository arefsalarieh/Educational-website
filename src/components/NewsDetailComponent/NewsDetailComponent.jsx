import React, { useState } from 'react'
import Detail from '../common/DetailComponents/Detail'
import SmallSlider from '../smallSlider/SmallSlider'
import { motion } from 'framer-motion'

const NewsDetailComponent = () => {
    const [relationNews , setRelationNews] = useState([
        {name:'دوره ریکت ترم بهار' , src:'minislide.png' , date : 'سال 1399'},
        {name:'دوره ریکت ترم بهار' , src:'minislide.png' , date : 'سال 1399'},
        {name:'دوره ریکت ترم بهار' , src:'minislide.png' , date : 'سال 1399'},
        {name:'دوره ریکت ترم بهار' , src:'minislide.png' , date : 'سال 1399'},
        {name:'دوره ریکت ترم بهار' , src:'minislide.png' , date : 'سال 1399'},
    ])


  return (
    <div className='lg:flex lg:flex-wrap bg-mygray pb-12 font-irSans'>
        <div className='flex flex-col-reverse lg:flex-row'>
            <Detail title1='عنوان خبر :' title1Desc="آموزش جامع ریکت" title2=" دسته خبر :" title2Desc="مهندس آرمین ساکت" 
                    title3="متن خبر  :" title3Desc=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد "
                    title4=' تاریخ انتشار خبر :' title4Desc='3 / 12 / 1400'  title6='دسته بندی :' title6Desc='مقاله '

                    />



            <motion.div
            initial={{x:-100}}
            animate={{x:0}}
            transition={{duration:0.5}} 
            className=' lg:w-5/12'>
                <img className='w-10/12 mt-12 mx-auto' src='./courses.png'/>
            </motion.div> 
        </div>

        <div className='flex w-full  items-center text-center mt-8'>
          <span className='border-2 border-black w-full h-1'></span>
          <h2 className='w-4/12 lg:text-lg lg:font-extrabold'> اخبار مرتبط</h2>
          <span className='border-2 border-black w-full h-1'></span>        
        </div>


        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.3}}
        className='container border  mt-16'>
            <SmallSlider list={relationNews}/>
        </motion.div>


    </div>
  )
}

export default NewsDetailComponent