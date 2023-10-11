import React from 'react'

const Button = ({title='ttrg' , rounded='rounded-xl' , textColor='text-white' , backgroundColor='bg-zgh' , borderWidth='border-2', borderColor='border-zgh' , paddingX='px-10' , paddingY = 'py-2' }) => {
  return (
    <button className={`font-bold  ${rounded} ${textColor} ${backgroundColor} ${borderWidth} ${borderColor} ${paddingX} ${paddingY}`}>{title}</button>
  )
}

export default Button