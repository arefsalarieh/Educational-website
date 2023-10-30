import React from 'react'
import { motion } from 'framer-motion';

const NewsArticleItem = ({title , desc , pic , teacher}) => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{ delay:0.3}}
    className='sm:w-1/2 lg:w-1/4 relative sm:text-right p-4 '>
        <div className='border-2 p-2 pb-8'>
            <img src={pic} alt="" />
            <h2 className='text-lg font-extrabold mt-4'>{title}</h2>
            <h5 className=' mt-4'>{desc} </h5>
            <a className='sm:absolute block mt-4 mx-auto sm:mx-0  left-8 bottom-6 text-blue-500'>{teacher} </a>            
        </div>

    </motion.div>
  )
}

export default NewsArticleItem