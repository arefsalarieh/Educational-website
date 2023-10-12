import { AudioOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Input, Space } from 'antd';
import Course from '../../components/common/course/Course';
import SerachCourses from '../../components/common/search/serachCourses';
import AllCourses from '../../components/common/course/allCourse';






const Courses = () => {

  return (
    <div>

    <section>
        <div className='mx-auto w-2/5 mt-12'><img src="laptop.png" alt="" /></div>
    </section>

    <AllCourses parentShape='courses' courseShape='courses'/>

    </div>
  )
}

export default Courses