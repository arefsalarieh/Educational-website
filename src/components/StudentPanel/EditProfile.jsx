import React, { useState } from 'react'
import { Formik } from 'formik'
import { Input , Select  } from 'antd'
import TextArea from 'antd/es/input/TextArea';


const EditProfile = () => {
  const [newDetail , serNewDetail] = useState()
  return (
    <div className=' w-10/12  py-10 mx-auto my-10 font-irSans'>
      <h2 className='mb-10 text-lg font-extrabold'>حساب کاربری</h2>
      <Formik initialValues={{fname : '' , lname : '' , born : '' , job : '' , city : '' , email : '' , address : '' , desc : '' }}>
      {({values , handleSubmit, handleChange })=>(
        <form className='lg:flex lg:flex-wrap lg:justify-between lg:px-4 lg:gap-4'>

          <div className=' mt-4 lg:w-5/12'>
            <label className='block text-center lg:text-right lg:pr-4' htmlFor='fname'>نام</label>
            <Input type='text' id='fname' name='fname' className=''/>            
          </div>

          <div className=' mt-4 lg:w-5/12'>
            <label className='block text-center lg:text-right lg:pr-4' htmlFor='lname'>نام خانوادگی</label>
            <Input type='text' id='lname' name='lname'/>            
          </div>

          <div className=' mt-4 lg:w-1/4'>
            <label className='block text-center lg:text-right lg:pr-4' htmlFor='born'> سال تولد</label>
            <Input type='text' id='born' name='born'/>            
          </div>

           <div className=' mt-4 lg:w-1/4'>
            <label className='block text-center  lg:text-right lg:pr-4' htmlFor='job'>  شغل</label>
            <Select id='job' name='job' className='w-full'  placeholder='شغل خود را انتخاب کنید'>
              <Select.Option >دانشجو</Select.Option>
              <Select.Option >دانشجو</Select.Option>
              <Select.Option >دانشجو</Select.Option>
            </Select>        
          </div>  
          
           <div className=' mt-4 lg:w-1/4'>
            <label className='block text-center lg:text-right lg:pr-4' htmlFor='city'>  شهر </label>
            <Select id='city' name='city' className='w-full'  placeholder='شهر خود را انتخاب کنید'>
              <Select.Option >ساری</Select.Option>
              <Select.Option >ساری</Select.Option>
              <Select.Option >ساری</Select.Option>
            </Select>        
          </div> 

          <div className=' mt-4 lg:w-5/12'>
            <label className='block text-center lg:text-right lg:pr-4' htmlFor='email'> ایمیل </label>
            <Input type='email' id='email' name='email' style={{direction:'ltr'}}/>            
          </div>

          <div className=' mt-4 lg:w-5/12'>
            <label className='block text-center lg:text-right lg:pr-4' htmlFor='address'> آدرس </label>
            <Input type='text' id='address' name='address'/>            
          </div> 
          
          <div className=' mt-4 lg:w-full'>
            <label className='block text-center lg:text-right lg:pr-4' htmlFor='desc'> توضیحات </label>
            <TextArea  id='desc' name='desc' style={{ height:'200px' ,minHeight:'100px', maxHeight:'300px'}}/>            
          </div> 

                             

        </form>


        )}

      </Formik>
    </div>
  )
}

export default EditProfile