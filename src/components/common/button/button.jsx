import React from 'react'

const Button = ({type='submit' , title='ttrg' , rounded='rounded-xl' , textColor='text-white' , backgroundColor='bg-zgh' , borderWidth='border-2', borderColor='border-zgh' , paddingX='px-10' , paddingY = 'py-2' , extra , }) => {
  return (
    <button type={type} className={`font-bold  ${rounded} ${textColor} ${backgroundColor} ${borderWidth} ${borderColor} ${paddingX} ${paddingY} ${extra}`}>{title}</button>
  )
}

export default Button