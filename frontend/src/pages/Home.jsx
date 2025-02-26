import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const home = () => {
return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1502899576159-f224dc2349fa?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen flex justify-between flex-col w-full'>
            <img className='w-24 ml-8' src='../images/Rideon-removebg-preview.png' alt='logo' />
            <div className='bg-white py-4 px-4 pb-7'>
                <h2 className='text-[30px] font-bold'>Get Started with RideOn</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5 relative transition duration-300 ease-in-out transform hover:bg-gray-800 hover:scale-102'>
                    <span className='flex-grow text-center'>Continue</span>
                    <FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff",}} className='absolute right-4' />
                </Link>
            </div>
        </div>
    </div>
)
}

export default home