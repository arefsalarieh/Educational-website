import { CheckCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

const Detail = () => {
  return (
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
  )
}

export default Detail