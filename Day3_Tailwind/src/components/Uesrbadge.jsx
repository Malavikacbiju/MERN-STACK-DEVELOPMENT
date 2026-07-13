import React from 'react'
import userAvatar from '../assets/hero.png'

const Userbadge = ({ name, role, image }) => {
  return (
    <div className='flex flex-col items-center mx-4'>
      <img
        src={image || userAvatar}
        alt={`${name} avatar`}
        className='w-16 h-16 rounded-full object-cover'
      />
      <h3 className='text-xl font-bold'>{name}</h3>
      <p className='text-gray-500'>{role}</p>
    </div>
  )
}

export default Userbadge