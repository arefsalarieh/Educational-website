import React from 'react'

const SingleItem = ({pic , desc}) => {
  return (
    <div className='border shadow-2xl relative sm:flex gap-8 w-full xl:h-40 mt-4 px-3'>
        <img className='m-4 mx-auto sm:mx-0' src={pic}/>
        <p className='pl-8 pr-4 text-sm mt-6'>
            {desc}
        <span><img className='sm:absolute w-8 mx-auto sm:mx-0 mt-2 left-6 bottom-2' src='./felesh.png'/></span>
        </p>
    </div>
  )
}

export default SingleItem