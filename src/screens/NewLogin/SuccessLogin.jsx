import React from 'react'
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import instance from '../../core/services/interceptor';
import {onPhoneNumberChange, onFnameChange, onLnameChange, onUsernameChange, onEmailChange, onImageChange} from '../../redux/user'
import toast from 'react-hot-toast';

const SuccessLogin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const goHome = () => {
        navigate('/')
    }

    const userId = useSelector(state => state.user.id)

    const {data: getUserDataById, status} = useQuery("getUserDataById", () => {return instance.get(`/User/UserDetails/${userId}`)})
    console.log(getUserDataById);

    if(status === "success"){
      dispatch(onPhoneNumberChange(getUserDataById.phoneNumber))
      dispatch(onFnameChange(getUserDataById.fName))
      dispatch(onLnameChange(getUserDataById.lName))
      dispatch(onUsernameChange(getUserDataById.userName))
      dispatch(onEmailChange(getUserDataById.gmail))
      dispatch(onImageChange(getUserDataById.currentPictureAddress))
      toast.success("ورود موفقیت آمیز")
    } else toast.error("خطا در دریافت داده")


  return (
    <div className='text-center font-irSans'>
        <h2 className=' text-2xl text-pannel mt-24'>ورود با موفقیت انجام شد</h2>
        <button onClick={goHome} className='bg-green-300 p-3 mt-8'>بازگشت به خانه</button>
    </div>
  )
}

export default SuccessLogin