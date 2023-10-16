import React from 'react'
import { Space, Tabs } from 'antd'
import NewsDetailComponent from '../../components/NewsDetailComponent/NewsDetailComponent'

const NewsDetail = () => {
  return (
    <div className='w-5/6 mx-auto'>

        <Tabs>


          <Tabs.TabPane  tab='جزییات دوره' key='tab1'>
              <NewsDetailComponent/>
          </Tabs.TabPane>

          <Tabs.TabPane  tab='جزییات دوره' key='tab2'>
              <NewsDetailComponent/>            
          </Tabs.TabPane>


      </Tabs>   

    
    </div>
  )
}

export default NewsDetail