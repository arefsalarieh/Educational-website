import React from 'react'

const Slide = ({name , pic , desc}) => {
  return (
    <div className='teachers shadow-2xl rounded-xl lg:flex lg:flex-wrap lg:relative lg:h-60 pt-1 md:pt-0 pb-8 '>
        <h2 className=' text-center lg:text-right lg:pr-6 lg:w-9/12 lg:text-lg my-6'>{name} </h2>
        <img className='mx-auto lg:absolute lg:w-2/12 lg:top-4 lg:left-4 ' src={pic}/>
        <button className='mt-4 text-lg text-center lg:absolute top-14 mx-auto lg:mr-4 block lg:w-24 py-2  px-6 rounded-lg text-white bg-zgh '>مدیریت</button>
        <p className='lg:text-right pr-6 mt-6 lg:mt-12 w-10/12'>{desc}</p>
    </div>  
  )
}

export default Slide