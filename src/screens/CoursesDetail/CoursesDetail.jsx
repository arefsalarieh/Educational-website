import React from 'react'
import { Space, Tabs } from 'antd'
import Detail from '../../components/coursesDetailComponents/detail'

const CoursesDetail = () => {
  return (
    <div className='w-5/6 mx-auto'>

          <Tabs>


            <Tabs.TabPane  tab='جزییات دوره' key='tab1'>
                <Detail/>
            </Tabs.TabPane>

            <Tabs.TabPane  tab='جزییات دوره' key='tab2'>
                <Detail/>
            </Tabs.TabPane>

    
        </Tabs>   

       
    </div>

  )
}

export default CoursesDetail