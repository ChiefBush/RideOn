import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
               props.setridePopupPanel(false) 
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-3xl font-semibold ml-3 mb-5'>New Ride Available!</h3>
        <div className='flex items-center justify-between p-3 bg-yellow-100 rounded-lg mt-4'>
            <div className='flex items-center gap-3'>
                <img className='h-15 w-15 rounded-full object-cover' src="https://i.redd.it/mibglviklubb1.jpg" alt="" />
                <h2 className='text-xl font-medium'>{props.ride?.user.fullname.firstname+" "+props.ride?.user.fullname.lastname}</h2>
            </div>
            <h5 className='text-lg font-semibold'>2.2 Km away</h5>
        </div>
        <div className='flex flex-col gap-2 justify-between items-center'>
            <div className='w-full mt-3 '>
                <div className='flex iems-center gap-5 p-3 border-b-2 border-gray-200'>
                    <i className="text-xl mt-2 ri-map-pin-2-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>Pickup Location</h3>
                        <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
                    </div>

                </div>
                <div className='flex iems-center gap-5 p-3 border-b-2 border-gray-200'>
                    <i className="text-xl mt-2 ri-map-pin-user-fill"></i> 
                    <div>
                        <h3 className='text-lg font-medium'>Dropoff Location</h3>
                        <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
                    </div>

                </div>
                <div className='flex iems-center gap-5 p-3'>
                    <i className="text-xl mt-2 ri-cash-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>₹ {props.ride?.fare}</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                    </div>
                </div>
            </div>
            <div className='mt-5  flex w-full items-center justify-between'>
                <button onClick={()=>{
                    props.setridePopupPanel(false)
                }} className='mt-1 bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg transition duration-300 ease-in-out transform hover:bg-gray-400 '>Ignore
                </button>
                <button onClick={()=>{
                    props.setConfirmridePopupPanel(true)
                    props.confirmRide()
                }} className='mt-1 bg-green-600 text-white font-semibold p-3 px-10 rounded-lg transition duration-300 ease-in-out transform hover:bg-green-800 '>Accept
                </button>
            </div>
        </div>
    </div>
  )
}

export default RidePopUp