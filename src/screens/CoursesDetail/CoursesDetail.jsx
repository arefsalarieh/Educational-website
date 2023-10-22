import React from 'react'
import { Divider, Tabs } from 'antd'
import CoursesDetailComponents from '../../components/CoursesDetailComponents/CoursesDetailComponents'

const CoursesDetail = () => {
  return (
    <div className='w-5/6 mx-auto'>

          <Tabs>


            <Tabs.TabPane  tab='جزییات دوره' key='tab1'>
                <CoursesDetailComponents/>
            </Tabs.TabPane>

            <Divider/>

            <Tabs.TabPane  tab='جزییات دوره' key='tab2'>
                <CoursesDetailComponents/>
            </Tabs.TabPane>

    
        </Tabs>   

       
    </div>

  )
}

export default CoursesDetail