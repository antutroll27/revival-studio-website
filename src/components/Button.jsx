import React from 'react'

const Button = ({title , id , rightIcon , leftIcon , containerClassName}) => {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full  px-7 py-3 text-black ${containerClassName}`}>{leftIcon}
    
    <span className='relative incline-flex overflow-hidden font-general text-sm uppercase'>
        <div>{title}</div>
    </span>
    {rightIcon}
    </button>
  )
}

export default Button