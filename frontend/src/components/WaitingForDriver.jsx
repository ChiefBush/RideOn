import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
         <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
                props.waitingForDriver(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
          <div className='flex items-center justify-between'>
            <img className='h-12 mt-3' src="../images/car.png" />
            <div className='text-right'>
              <h2 className='text-lg text-gray-500 font-medium captalize'>{props.ride?.captain.fullname.firstname}</h2>
              <h4 className='text-xl -mt-2 font-semibold'>{props.ride?.captain.vehicle.plate}</h4>
              <p className='text-sm -mt-2 text-gray-600'>Maruti Suzuki Swift</p>
              <h1 className='text-xl mt-2 text-yellow-500 font-semibold'>{props.ride?.otp}</h1>
            </div>
          </div>

        <div className='flex flex-col gap-2 justify-between items-center'>
            
            <div className='w-full mt-3 '>
                <div className='flex iems-center gap-5 p-3 border-b-2 border-gray-200'>
                    <i className="text-xl mt-2 ri-map-pin-2-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>Pickup</h3>
                        <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
                    </div>

                </div>
                <div className='flex iems-center gap-5 p-3 border-b-2 border-gray-200'>
                    <i className="text-xl mt-2 ri-map-pin-user-fill"></i> 
                    <div>
                        <h3 className='text-lg font-medium'>Destination</h3>
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
        </div>
    </div>
  )
}

export default WaitingForDriver