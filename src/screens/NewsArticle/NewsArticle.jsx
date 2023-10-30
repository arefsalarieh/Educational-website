import React from 'react'
import BigSearch from '../../components/common/BigSearch/BigSearch';
import NewsArticleComponent from '../../components/NewsArticleComponent/NewsArticleComponent';
import { motion } from 'framer-motion'

const NewsArticle = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5}}  
    className='text-center font-irSans'>

      <motion.section
      initial={{opacity:0 , y:-100}}
      animate={{opacity:1 , y:0}}
      transition={{duration:0.5}}  
      >
          <div className='mx-auto w-2/5 mt-12'><img src="laptop.png" alt="" /></div>
      </motion.section>

      <h2 className='mb-12 font-extrabold text-xl mt-8'>اخبار و مقالات  </h2>

      <BigSearch placeholder='عنوان مورد نظر ...'/>

      <NewsArticleComponent/>


  </motion.div>
  )
}

export default NewsArticle