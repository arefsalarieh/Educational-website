import React from 'react'
import { Button, Checkbox, Form, Input   } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const PishForm = () => {
  return (
    <Form className=' shadow-xl mx-auto lg:mr-48 mt-12 pt-6 px-4 sm:px-12 w-8/12 '    name="basic" labelCol={{span: 8,}}   initialValues={{remember: true,}}>
    
        <label htmlFor='d1'>ایمیل شما</label>
        <Form.Item id='d1' className='w-full  mt-4 rounded-xl' name="email" rules={[{ required: true, message: 'Please input your username!',},]}>
        < Input className='w-full h-14 text-xl p-4' style={{direction:'ltr'}} placeholder='Maryammohajer@gmail.com'/>
        </Form.Item>

        <label htmlFor='d2'>متن پیام شما</label>
        <Form.Item id='d2' className='mt-4'>
          <TextArea className='h-24 rounded-xl' style={{direction:'ltr' , height:'160px' ,minHeight:'100px'}}/>
        </Form.Item>

        <Form.Item >
          <Button type="primary" className='bg-send rounded-xl mx-auto mb-8 px-6 pt-0 h-10 block text-xl '>ارسال</Button>
        </Form.Item>
        
    </Form>
  )
}

export default PishForm