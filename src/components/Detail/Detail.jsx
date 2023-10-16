import { CheckCircleOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

const Detail = ({title1 , title1Desc , title2 , title2Desc , title3 , title3Desc , title4 , title4Desc  , title5 , title5desc , 
                title6 , title6Desc , title7 , title7Desc , title8 , title8Desc , title9 , title9Desc , title10 , title10Desc , logoSize}) => {
  return (
    <div className=' lg:w-7/12 '>
    <div className='flex flex-wrap'>
      <div className='  h-16 w-1/2 mt-12 pr-10'>
        <h2 className='text-lg font-extrabold'>  {title1}</h2>
        <h5 className='text-lg font-medium mt-2'> {title1Desc} </h5>
      </div>
      <div className=' h-16 w-1/2 mt-12 pr-10'>
        <h2 className='text-lg font-extrabold'> {title2}</h2>
        <h5 className='text-lg font-medium mt-2'>{title2Desc}  </h5>
      </div>
    </div>

      <h2 className='block text-lg font-extrabold w-full mt-8 mr-10'>  {title3}</h2>
      <p className=' text-lg mr-10 mt-8'>
        {title3Desc}
      </p>

      <h2 className='block text-lg font-extrabold w-full mt-8 mr-10'>اطلاعات بیشتر :</h2>

      <p className='h-8 mr-10 mt-6 font-extrabold'>
      <CheckCircleOutlined  style={{fontSize:20 , color:'#CCA349'}}/>
        <span className='text-lg font-extrabold mr-4'>
          {title4}
        </span>
        <span className=' font-bold mr-2'>
          {title4Desc}             
        </span>

        <span className={title5desc}>
          {title5}
        </span>
      </p>

      <p className='h-8 mr-10 mt-6 font-extrabold'>
      <CheckCircleOutlined  style={{fontSize:20 , color:'#CCA349'}}/>
        <span className='text-lg font-extrabold mr-4'>
          {title6}
        </span>
        <span className=' font-bold mr-2'>
            {title6Desc}            
        </span>
      </p>


      <p className='h-8 mr-10 mt-6 font-extrabold'>
      <CheckCircleOutlined  style={{fontSize:20 , color:'#CCA349'}}/>
        <span className='text-lg font-extrabold mr-4'>
          {title7} 
        </span>
        <span className=' font-bold mr-2'>
          {title7Desc}              
        </span>
      </p>


      <p className='h-8 mr-10 mt-6 font-extrabold'>
      <CheckCircleOutlined  style={{fontSize:20 , color:'#CCA349'}}/>
        <span className='text-lg font-extrabold mr-4'>
            {title8}
        </span>
        <span className=' font-bold mr-2'>
           {title8Desc}                
        </span>
      </p>

      
    <p className='h-8 mr-10 mt-6 font-extrabold'>
      <CheckCircleOutlined  style={{fontSize:20 , color:'#CCA349'}}/>
        <span className='text-lg font-extrabold mr-4'>
          {title9} 
        </span>
        <span className=' font-bold mr-2'>
           {title9Desc}             
        </span>
    </p>  

    <p className='h-8 mr-10 mt-6 font-extrabold'>
      <CheckCircleOutlined  style={{fontSize:20 , color:'#CCA349'}}/>
        <span className='text-lg font-extrabold mr-4'>
            {title10}   
        </span>
        <span className=' font-bold mr-2'>
           {title10Desc}              
        </span>
    </p>  

    <Button  backgroundColor='bg-green-300' borderWidth='border-0' rounded='rounded-sm' paddingX='px-20' title='ـبت دوره' extra='mr-10 mt-6'/>

   </div>
  )
}

export default Detail