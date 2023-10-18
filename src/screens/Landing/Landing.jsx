import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import '../../../node_modules/swiper/swiper-bundle.min.css';
import AllCourses from '../../components/common/course/allCourse';
import TeachersSlider from '../../components/teachersSlider/teachersSlider';
import Services from '../../components/Services/Services';
import Dastes from '../../components/daste/dastes';
import News from '../../components/News/News';
import Article from '../../components/Article/Article';
import PishForm from '../../components/PishForm/PishForm';
import Button from '../../components/common/button/button'



const Landing = () => {
  return (
    <div className='font-irSans px-4'>

    <section className='md:flex justify-center gap-x-6'>

      <div className='  md:w-2/5 w-full'>
        <img src='./big.png' alt='jdth' className='md:pt-20 lg:pt-0'/>
      </div>

      <div className='md:mr-24  md:pt-32 md:w-1/3 w-full px-6 text-center md:text-right lg:pt-32'>
        <h2 className='text-lg font-extrabold'><span className=' text-zgh'>پژوهشگاه</span > سپهر</h2>
        <p className='mt-8 '>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرده</p>
        <Button title='مشاهده دوره ها' paddingX='px-6' paddingY='py-3' rounded='rounded-md' extra='mt-6 text-sm'/>
      </div>

    </section>


    <section className=' flex flex-wrap flex-col-2 justify-evenly text-center mt-20 pb-14  bg-line bg-no-repeat bg-top-4 bg-80'>
      <h2 className='mb-12 w-full text-xl  font-extrabold'>خدمات ما</h2>

      <Services/>


    </section>


    <section className=' mx-auto flex flex-wrap justify-evenly px-8 text-center mt-32 w-full lg:w-10/12 xl:w-2/3'>
      <h2 className=' w-full text-2xl mb-4'> دسته بندی</h2>

      <Dastes/>

    </section>


    <section className='flex flex-wrap  mt-24 text-xl text-center'>
      <h2 className=' w-full text-2xl font-bold mb-16 '> دوره های آموزشی </h2>
      
      <AllCourses parentShape='landing' courseShape='landing'/>


      <Button title='مشاهده دوره ها' paddingX='p-4' paddingY='p-4' extra='mx-auto mt-12'/>

    </section>


    <section className='text-justify px-2 sm:px-16  '>
      <h2 className='text-center text-2xl  my-24 '> اساتید برتر</h2>

      <TeachersSlider/>

    </section>


    <section className='mt-32 text-justify'>
      <h2 className='text-center text-2xl w-full'>اخبار و مقالات</h2>

      <div className='flex flex-wrap xl:flex-nowrap gap-12 lg:px-48'>

        <div className='flex flex-wrap  items-center w-10/12 xl:w-1/2 mx-auto my-8 gap-4'>
          <h3 className='  w-1/12'>اخبار </h3>
          <span className='border-8 h-4 w-10/12 '></span>

          <News/>
        </div>


        <div className='flex flex-wrap  items-center w-10/12 xl:w-1/2 mx-auto my-8 gap-4'>
          <h3 className='  w-1/12'>مقالات </h3>
          <span className='border-8 h-4 w-10/12 '></span>

          <Article/>

        </div>
      </div>


  
    </section>


    <section className='mt-12 '>
      <h2 className='text-center w-full text-2xl mt-8'>پیشمهادات و شکایات</h2>
      <div className=' flex flex-wrap flex-col-reverse lg:flex-row lg:flex-nowrap gap-4   mx-auto'>
        <div className=' w-full lg:w-1/2'>
          <PishForm/>
        </div>

        <div className=' w-full lg:w-1/2'>
          <img className='w-8/12 mx-auto lg:mr-16' src="./pish.png" alt="" />
        </div>
        
      </div>
    </section>

  

    </div>
  )
}

export default Landing