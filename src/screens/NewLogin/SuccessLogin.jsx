import React from 'react'
import { useNavigate } from 'react-router-dom';

const SuccessLogin = () => {
    const navigate = useNavigate()
    const goHome = () => {
        navigate('/')
    }
  return (
    <div className='text-center font-irSans'>
        <h2 className=' text-2xl text-pannel mt-24'>ورود با موفقیت انجام شد</h2>
        <button onClick={goHome} className='bg-green-300 p-3 mt-8'>بازگشت به خانه</button>
    </div>
  )
}

export default SuccessLogin