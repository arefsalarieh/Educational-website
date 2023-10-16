import React from 'react'

const NewsArticleItem = ({title , desc , pic , teacher}) => {
  return (
    <div className='w-1/3 text-right p-4 '>
        <div className='border-2 p-2'>
            <img src={pic} alt="" />
            <h2 className='text-lg font-extrabold mt-4'>{title}</h2>
            <h5 className=' mt-4'>{desc} </h5>
            <a className='mt-4 mr-80 text-blue-500'>{teacher} </a>            
        </div>

    </div>
  )
}

export default NewsArticleItem