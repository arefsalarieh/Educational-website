import React from 'react'
import LoginForm from './LoginForm'

const NewLogin = () => {



  return (
    <div className=' mx-auto py-14 w-screen   bg-gradient-to-b  from-primary dark:from-teal-800  border'>
    <div className='w-9/12  pb-14 mx-auto mt-12 bg-white dark:bg-slate-600 dark:text-stone-200 shadow-2xl rounded-2xl'>
        <div className='w-2/3 mx-auto '>
 
        </div>

        <div className='flex'>
            <div className='w-1/2'>
                <LoginForm/>
            </div>

            <div  className='w-1/2 '>
                <img src="./login.png" className='h-80 mx-auto' alt="" />
            </div>


        </div>         
        
    </div>


</div>
  )
}

export default NewLogin