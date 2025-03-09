import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {

    const [Otp, setOtp] = useState('')

    const submitHandler=(e)=>{
        e.preventDefault()
    }

  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
               props.setConfirmridePopupPanel(false) 
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-3xl font-semibold ml-3 mb-5'>Confirm this ride to start</h3>
        <div className='flex items-center justify-between p-3 bg-yellow-100 rounded-lg mt-4'>
            <div className='flex items-center gap-3'>
                <img className='h-15 w-15 rounded-full object-cover' src="https://i.redd.it/mibglviklubb1.jpg" alt="" />
                <h2 className='text-xl font-medium'>Ariza Patel</h2>
            </div>
            <h5 className='text-lg font-semibold'>0 Km</h5>
        </div>
        <div className='flex flex-col gap-2 justify-between items-center'>
            <div className='w-full mt-3 '>
                <div className='flex iems-center gap-5 p-3 border-b-2 border-gray-200'>
                    <i className="text-xl mt-2 ri-map-pin-2-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Jasola Vihar, New Delhi, Delhi</p>
                    </div>

                </div>
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
            <div className='mt-6 w-full'>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }}>
                    <input value={Otp} onChange={(e)=>setOtp(e.target.value)} type="text" className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-5' placeholder='Enter OTP' />
                    <Link to='/captain-riding' className='w-full text-lg mt-5 flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg transition duration-300 ease-in-out transform hover:bg-green-800 '>Confirm
                    </Link>
                    <button onClick={()=>{
                        props.setConfirmridePopupPanel(false)
                        props.setridePopupPanel(false)
                    }} className='w-full mt-2 bg-red-600 text-lg text-white font-semibold p-3 rounded-lg transition duration-300 ease-in-out transform hover:bg-red-800 '>Cancel
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ConfirmRidePopUp