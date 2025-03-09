import React from 'react'
import {Link} from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className=" text-lg font-bold ri-home-4-line"></i>
        </Link>
        <div className="h-1/2 ">
            <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />

        </div>
        <div className='h-1/2 p-4'>
        <div className='flex items-center justify-between'>
            <img className='h-12 mt-3' src="../images/car.png" />
            <div className='text-right'>
              <h2 className='text-lg text-gray-500 font-medium '>Sarthak</h2>
              <h4 className='text-xl -mt-2 font-semibold'>MP04 AB 1234</h4>
              <p className='text-sm -mt-2 text-gray-600'>Maruti Suzuki Alto</p>
            </div>
          </div>

        <div className='flex flex-col gap-2 justify-between items-center'>
            
            <div className='w-full mt-3 '>
                <div className='flex iems-center gap-5 p-3 border-b-2 border-gray-200'>
                    <i className="text-xl mt-2 ri-map-pin-user-fill"></i> 
                    <div>
                        <h3 className='text-lg font-medium'>Amity University, Gate Number 2</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Sector 125, Noida, Uttar Pradesh</p>
                    </div>

                </div>
                <div className='flex iems-center gap-5 p-3'>
                    <i className="text-xl mt-2 ri-cash-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>₹ 193.20</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                    </div>
                </div>
            </div>
        </div>
            <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-green-800 hover:scale-102'>Make Payment</button>
        </div>
    </div>
  )
}

export default Riding