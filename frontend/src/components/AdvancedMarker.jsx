import React, { useEffect } from 'react';

const AdvancedMarker = ({ map, position, title }) => {
    useEffect(() => {
        if (!window.google || !map) return;

        // Create the AdvancedMarkerElement
        const advancedMarker = new window.google.maps.marker.AdvancedMarkerElement({
            map,
            position,
            title,
        });

        return () => {
            // Clean up the marker on component unmount
            advancedMarker.setMap(null);
        };
    }, [map, position, title]);

    return null;
};

export default AdvancedMarker;