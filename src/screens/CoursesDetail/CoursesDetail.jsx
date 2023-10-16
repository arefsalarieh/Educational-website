import React from 'react'
import { Space, Tabs } from 'antd'
import CompDetail from '../../components/coursesDetailComponents/CompDetail'

const CoursesDetail = () => {
  return (
    <div className='w-5/6 mx-auto'>

          <Tabs>


            <Tabs.TabPane  tab='جزییات دوره' key='tab1'>
                <CompDetail/>
            </Tabs.TabPane>

            <Tabs.TabPane  tab='جزییات دوره' key='tab2'>
                <CompDetail/>
            </Tabs.TabPane>

    
        </Tabs>   

       
    </div>

  )
}

export default CoursesDetail