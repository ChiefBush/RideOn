import React from 'react'
import 'remixicon/fonts/remixicon.css'

const LocationSearchPanel = (props) => {

    const locations=[
        "Amity University Gate Number 2, Sector 125, Noida, Uttar Pradesh",
        "DLF Mall of India, Sector 18, Noida, Uttar Pradesh",
        "KM 03, Jaypee Kosmos, Sector 134, Noida, Uttar Pradesh",
        "419, C Pocket, Sarita Vihar, New Delhi, Delhi"
    ]

  return (
    <div>

        {
            locations.map(function(elem, index){
                return <div onClick={()=>{
                    props.setvehiclePanel(true)
                    props.setpanelOpen(false)
                    }} key={index} className='flex items-center my-2 border-gray-50 active:border-black justify-start gap-4 border-2 p-3 rounded-xl'>
                <h2 className='bg-[#eee] h-10 w-[13%] flex items-center justify-center rounded-full'><i className="ri-map-pin-fill text-xl"></i></h2>
                <h4 className='font-medium w-[80%]'>
                    {elem}
                </h4>
            </div>
            })
        }
        
    </div>
  )
}

export default LocationSearchPanel