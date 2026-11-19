import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets.js'
import { ArrowRightIcon } from 'lucide-react'

export const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className= 'fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center px-4 py-2 sm:px-32'>
        <img src={assets.logo} alt="Doom.ai" className='w-32 sm:w-44 cursor pointer' onClick={ ()=> navigate('/') }/>

        <button className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>Get Started <ArrowRightIcon className='w-4 h-4' /> </button>
    </div>
  )
}

export default Navbar