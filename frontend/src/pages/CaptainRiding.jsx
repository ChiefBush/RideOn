import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import FinishRide from '../components/FinishRide';

const CaptainRiding = () => {

    const [finishRidePanel, setfinishRidePanel] = useState(false)

    const finishRidePanelRef = useRef(null)

    useGSAP(function(){
        if(finishRidePanel){
            gsap.to(finishRidePanelRef.current,{
                transform:'translateY(0)'
            })
        }
        else{
            gsap.to(finishRidePanelRef.current,{
                transform:'translateY(100%)'
            })
          }
      },[finishRidePanel])

  return (
    <div className='h-screen relative'>
        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
          <img className='w-24' src='../images/captainBlackLogo.png' alt=''/>
          <Link to='/captain-home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className=" text-lg font-bold ri-logout-box-r-line"></i>
        </Link>
        </div>
        <div className="h-4/5 ">
            <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />

        </div>
        <div className='h-1/5 p-6 flex items-center justify-between relative bg-yellow-100'
            onClick={()=>{
                setfinishRidePanel(true)
            }}
        >
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
               
                }}><i className="text-3xl text-gray-400 ri-arrow-up-wide-line"></i></h5>
            <h4 className='text-xl font-semibold'>7.2 Km away</h4>
            <button className='mt-1 bg-green-600 text-white font-semibold p-3 px-10 rounded-lg transition duration-300 ease-in-out transform hover:bg-green-800 '>Complete Ride</button>
        </div>
        <div ref={finishRidePanelRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-10 pt-14'>
            <FinishRide setfinishRidePanel={setfinishRidePanel} />
        </div>
    </div>
  )
}

export default CaptainRiding