import React, { useState, useEffect } from 'react';
import { LoadScript, GoogleMap } from '@react-google-maps/api';
import AdvancedMarker from './AdvancedMarker';

const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: -3.745,
    lng: -38.523,
};

const libraries = ['marker'];

const LiveTracking = () => {
    const [currentPosition, setCurrentPosition] = useState(center);
    const [map, setMap] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({ lat: latitude, lng: longitude });
        });

        const watchId = navigator.geolocation.watchPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({ lat: latitude, lng: longitude });
        });
        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    useEffect(() => {
        const updatePosition = () => {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                console.log('Position updated:', latitude, longitude);
                setCurrentPosition({ lat: latitude, lng: longitude });
            });
        };

        updatePosition();
        const intervalId = setInterval(updatePosition, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const handleOnLoad = (mapInstance) => {
        setMap(mapInstance);
    };

    const mapOptions = {
        mapId: import.meta.env.VITE_MAP_ID,
    };

    return (
        <LoadScript
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
            libraries={libraries} // Pass the constant array
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={currentPosition}
                zoom={15}
                options={mapOptions}
                onLoad={handleOnLoad}
            >
                {map && (
                    <AdvancedMarker
                        map={map}
                        position={currentPosition}
                        title="Current Position"
                    />
                )}
            </GoogleMap>
        </LoadScript>
    );
};

export default LiveTracking;