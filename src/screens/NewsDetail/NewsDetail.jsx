import React from 'react'
import { Divider, Tabs } from 'antd'
import NewsDetailComponent from '../../components/NewsDetailComponent/NewsDetailComponent'
import { motion } from 'framer-motion'

const NewsDetail = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5}}
    className='w-5/6 mx-auto'>

        <Tabs>


            <Tabs.TabPane  tab='جزییات خبر' key='tab1'>
                <NewsDetailComponent/>
            </Tabs.TabPane>

            <Divider/>

            <Tabs.TabPane  tab='جزییات خبر' key='tab2'>
                22222222          
            </Tabs.TabPane>


        </Tabs>   


    </motion.div>
  )
}

export default NewsDetail