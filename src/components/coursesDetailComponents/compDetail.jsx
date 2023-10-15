import { CheckCircleOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import Button from '../common/button/button'
import SmallSlider from '../smallSlider/SmallSlider'



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
       <div className=' lg:w-7/12 '>
        <div className='flex flex-wrap'>
          <div className='  h-16 w-1/2 mt-12 pr-10'>
            <h2 className='text-lg font-extrabold'>عنوان  دوره :</h2>
            <h5 className='text-lg font-medium mt-2'>آموزش جامع ریکت</h5>
          </div>
          <div className=' h-16 w-1/2 mt-12 pr-10'>
            <h2 className='text-lg font-extrabold'>مدرس دوره :</h2>
            <h5 className='text-lg font-medium mt-2'>مهندس آرمین ساکت</h5>
          </div>
        </div>

          <h2 className='block text-lg font-extrabold w-full mt-8 mr-10'>درباره دوره :</h2>
          <p className=' text-lg mr-10 mt-8'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد 
          </p>

          <h2 className='block text-lg font-extrabold w-full mt-8 mr-10'>اطلاعات بیشتر :</h2>

          <p className='h-8 mr-10 mt-6 font-extrabold'>
          <CheckCircleOutlined  style={{fontSize:20 , color:'#CCA349'}}/>
            <span className='text-lg font-extrabold mr-4'>
              شهریه دوره :   
            </span>
            <span className=' font-bold mr-2'>
               66/500 تومان              
            </span>

            <span className='mr-4 bg-green-300 p-2'>
              20%
            </span>
          </p>

          <p className='h-8 mr-10 mt-6 font-extrabold'>
          <CheckCircleOutlined  style={{fontSize:20 , color:'#CCA349'}}/>
            <span className='text-lg font-extrabold mr-4'>
              ترم ارائه شده دوره :   
            </span>
            <span className=' font-bold mr-2'>
                40 نفر               
            </span>
          </p>


          <p className='h-8 mr-10 mt-6 font-extrabold'>
          <CheckCircleOutlined  style={{fontSize:20 , color:'#CCA349'}}/>
            <span className='text-lg font-extrabold mr-4'>
              تاریخ شروع دوره :   
            </span>
            <span className=' font-bold mr-2'>
               3 / 12 / 1400                
            </span>
          </p>


          <p className='h-8 mr-10 mt-6 font-extrabold'>
          <CheckCircleOutlined  style={{fontSize:20 , color:'#CCA349'}}/>
            <span className='text-lg font-extrabold mr-4'>
              تاریخ پایان دوره :   
            </span>
            <span className=' font-bold mr-2'>
               3 / 12 / 1400                
            </span>
          </p>

          
        <p className='h-8 mr-10 mt-6 font-extrabold'>
          <CheckCircleOutlined  style={{fontSize:20 , color:'#CCA349'}}/>
            <span className='text-lg font-extrabold mr-4'>
              ظرفیت  دوره :   
            </span>
            <span className=' font-bold mr-2'>
                40 نفر               
            </span>
        </p>  

        <p className='h-8 mr-10 mt-6 font-extrabold'>
          <CheckCircleOutlined  style={{fontSize:20 , color:'#CCA349'}}/>
            <span className='text-lg font-extrabold mr-4'>
              تعداد دانشجویان  دوره :   
            </span>
            <span className=' font-bold mr-2'>
                20 نفر               
            </span>
        </p>  

        <Button  backgroundColor='bg-green-300' borderWidth='border-0' rounded='rounded-sm' paddingX='px-20' title='ـبت دوره' extra='mr-10 mt-6'/>

       </div>



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