import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
         <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
                props.setconfirmRidePanel(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-3xl font-semibold ml-3 mb-5'>Confirm your Ride</h3>

        <div className='flex flex-col gap-2 justify-between items-center'>
            <img className='h-25 mt-3' src="../images/car.png" />
            <div className='w-full mt-3 '>
                <div className='flex iems-center gap-5 p-3 border-b-2 border-gray-200'>
                    <i className="text-xl mt-2 ri-map-pin-2-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>Pickup Point</h3>
                        <p className='text-sm -mt-1 text-gray-600'>{props.pickup}</p>
                    </div>

                </div>
                <div className='flex iems-center gap-5 p-3 border-b-2 border-gray-200'>
                    <i className="text-xl mt-2 ri-map-pin-user-fill"></i> 
                    <div>
                        <h3 className='text-lg font-medium'>Dropoff Point</h3>
                        <p className='text-sm -mt-1 text-gray-600'>{props.destination}</p>
                    </div>

                </div>
                <div className='flex iems-center gap-5 p-3'>
                    <i className="text-xl mt-2 ri-cash-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>₹ {props.fare[props.vehicleType]}</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                    </div>
                </div>
            </div>
            <button onClick={()=>{
                props.setvehicleFound(true)
                props.setconfirmRidePanel(false)
                props.createRide()
            }} className='w-full mt-5 mb-5 bg-green-600 text-white font-semibold p-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-green-800 hover:scale-102'>Confirm</button>
        </div>
    </div>
  )
}

export default ConfirmRide