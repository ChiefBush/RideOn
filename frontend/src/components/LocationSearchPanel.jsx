import React from 'react'

const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion.description)
        } else if (activeField === 'destination') {
            setDestination(suggestion.description)
        }
        // setVehiclePanel(true)
        // setPanelOpen(false)
    }

    return (
        <div>
            {
                suggestions.map((elem, idx) => (
                    <div key={idx} onClick={() => handleSuggestionClick(elem)} className='flex items-center my-2 border-gray-50 active:border-black justify-start gap-4 border-2 p-2 rounded-xl'>
                        <h2 className='bg-[#eee] h-10 w-[13%] flex items-center justify-center rounded-full'>
                            <i className="ri-map-pin-fill"></i>
                        </h2>
                        <h4 className='font-medium w-[80%]'>
                            {elem.description}
                        </h4>
                    </div>
                ))
            }
        </div>
    )
}


export default LocationSearchPanel