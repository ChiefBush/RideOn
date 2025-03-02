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
              <h2 className='text-lg text-gray-500 font-medium '>Sarthak</h2>
              <h4 className='text-xl -mt-2 font-semibold'>MP04 AB 1234</h4>
              <p className='text-sm -mt-2 text-gray-600'>Maruti Suzuki Alto</p>
            </div>
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
        </div>
    </div>
  )
}

export default WaitingForDriver