import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import axios from 'axios'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
    const [pickup, setpickup] = useState('')
    const [destination, setdestination] = useState('')
    const [panelOpen, setpanelOpen] = useState(false)
    const [vehiclePanel, setvehiclePanel] = useState(false)
    const [confirmRidePanel, setconfirmRidePanel] = useState(false)
    const [vehicleFound, setvehicleFound] = useState(false)
    const [waitingForDriver, setwaitingForDriver] = useState(false)
    const [ pickupSuggestions, setPickupSuggestions ] = useState([])
    const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
    const [ activeField, setActiveField ] = useState(null)
    const [ fare, setFare ] = useState({})
    const [vehicleType, setvehicleType] = useState(null)

    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const vehiclePanelRef = useRef(null)
    const confirmRidePanelRef = useRef(null)
    const vehicleFoundRef = useRef(null)
    const waitingForDriverRef = useRef(null)

    const handlePickupChange = async (e) => {
        setpickup(e.target.value)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }

            })
            setPickupSuggestions(response.data)
        } catch {
            // handle error
        }
    }

    const handleDestinationChange = async (e) => {
        setdestination(e.target.value)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setDestinationSuggestions(response.data)
        } catch {
            // handle error
        }
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
    }

    useGSAP(function(){
        if(panelOpen){
            gsap.to(panelRef.current,{
                height: '70%',
                paddingLeft:24,
                paddingRight:24,
                paddingBottom:24,
                paddingTop:48,
                opacity:1
            })
            gsap.to(panelCloseRef.current,{
                opacity:1
            })
        }
        else{
            gsap.to(panelRef.current,{
                height: '0%',
                padding:0,
                opacity:0
            })
            gsap.to(panelCloseRef.current,{
                opacity:0
            })
        }
    },[panelOpen])

    useGSAP(function(){
        if(vehiclePanel){
            gsap.to(vehiclePanelRef.current,{
                transform:'translateY(0)'
            })
        }
        else{
            gsap.to(vehiclePanelRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[vehiclePanel])

    useGSAP(function(){
        if(confirmRidePanel){
            gsap.to(confirmRidePanelRef.current,{
                transform:'translateY(0)'
            })
        }
        else{
            gsap.to(confirmRidePanelRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[confirmRidePanel])

    useGSAP(function(){
        if(vehicleFound){
            gsap.to(vehicleFoundRef.current,{
                transform:'translateY(0)'
            })
        }
        else{
            gsap.to(vehicleFoundRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[vehicleFound])

    useGSAP(function(){
        if(waitingForDriver){
            gsap.to(waitingForDriverRef.current,{
                transform:'translateY(0)'
            })
        }
        else{
            gsap.to(waitingForDriverRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[waitingForDriver])

    async function findTrip() {
        setvehiclePanel(true)
        setpanelOpen(false)

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
            params: { pickup, destination },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setFare(response.data)
    }

    async function createRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
            pickup,
            destination,
            vehicleType
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        console.log(response.data)


    }

  return (
    <div className='h-screen relative overflow-hidden'>
        <img className='w-24 absolute left-5 top-5' src="../images/logo_black.png" alt="" />
        <div className="h-screen w-screen ">
            <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>
        <div className='h-screen absolute bottom-0 w-full flex flex-col justify-end'>
            <div className='h-[30%] p-6 bg-white relative'>
                <h5 ref={panelCloseRef} onClick={()=>
                    setpanelOpen(false)
                } className='absolute opacity-0 top-6 right-6 text-3xl hover:text-gray-500 '>
                <i className="ri-arrow-down-wide-line"></i>
                </h5>
                <h4 className='text-2xl font-semibold'>Find a trip</h4>
                    <form className='relative py-3' onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <div className="absolute top-[18%] left-3 "><i className="ri-record-circle-fill text-lg"></i></div>
                        <div className="line absolute h-11 w-0.5 top-[50%] -translate-y-1/2 left-5 bg-black rounded-full"></div>
                        <div className="absolute top-[62%] left-3 "><i className="ri-stop-circle-fill text-lg"></i></div>
                        <input
                            onClick={() => {
                                setpanelOpen(true)
                                setActiveField('pickup')
                            }}
                            value={pickup}
                            onChange={handlePickupChange}
                            className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full'
                            type="text"
                            placeholder='Add a pick-up location'
                        />
                        <input
                            onClick={() => {
                                setpanelOpen(true)
                                setActiveField('destination')
                            }}
                            value={destination}
                            onChange={handleDestinationChange}
                            className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3'
                            type="text"
                            placeholder='Enter your destination' />
                    </form>
                    <button
                        onClick={findTrip}
                        className='bg-black text-white px-4 py-2 rounded-lg mt-5 w-full hover:bg-gray-900'>
                        Find Trip
                    </button>
            </div>
                <div ref={panelRef} className='bg-white h-0'>
                    <LocationSearchPanel
                        suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
                        setPanelOpen={setpanelOpen}
                        setVehiclePanel={setvehiclePanel}
                        setPickup={setpickup}
                        setDestination={setdestination}
                        activeField={activeField}
                    />
                </div>
        </div>
        <div ref={vehiclePanelRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-10 pt-14'>
            <VehiclePanel selectVehicle={setvehicleType} fare={fare} setconfirmRidePanel={setconfirmRidePanel} setvehiclePanel={setvehiclePanel} />
        </div>
        <div ref={confirmRidePanelRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-6 pt-12'>
            <ConfirmRide pickup={pickup} destination={destination} fare={fare} vehicleType={vehicleType} createRide={createRide} setconfirmRidePanel={setconfirmRidePanel} setvehicleFound={setvehicleFound}/>
        </div>
        <div ref={vehicleFoundRef} className='fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-6 pt-12'>
            <LookingForDriver pickup={pickup} destination={destination} fare={fare} vehicleType={vehicleType} createRide={createRide} setvehicleFound={setvehicleFound}  />
        </div>
        <div ref={waitingForDriverRef} className='fixed w-full z-10 bg-white bottom-0 px-3 py-6 pt-12'>
            <WaitingForDriver waitingForDriver={waitingForDriver} setwaitingForDriver={setwaitingForDriver}  />
        </div>
    </div>
  )
}

export default Home