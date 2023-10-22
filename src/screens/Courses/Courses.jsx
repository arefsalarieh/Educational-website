import { AudioOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Input, Space } from 'antd';
import Course from '../../components/common/course/Course';
import SearchCourses from '../../components/common/search/searchCourses';
import Allcourse from '../../components/allcourse/allcourse';






const Courses = () => {

  return (
    <div className='text-center'>

      <section>
          <div className='mx-auto w-2/5 mt-12'><img src="laptop.png" alt="" /></div>
      </section>

      <h2 className='mb-12'>دوره های آموزشی</h2>

      <SearchCourses placeholder='جستجوی دوره ...'/>

      <Allcourse parentShape='courses' courseShape='courses'/>

      <button className='block mx-auto rounded-xl mt-12 py-3 px-10 border-zgh border'>بیشتر</button>

    </div>
  )
}

export default Courses