import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Outlet } from 'react-router-dom';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWtpbjEyMyIsImEiOiJjbHZmcnlqcTYwazV4MmpvNWs5bG0wNDVzIn0.YIAS8yMyaCGuKNTlylhV4g';

const MapComponent = () => {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null); // Use a ref to persist the map instance

    useEffect(() => {
        // Initialize map only once
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-2.24, 53.48], // Default center
            zoom: 15
        });
        mapRef.current = map; // Store the map instance in the ref

        const nav = new mapboxgl.NavigationControl();
        map.addControl(nav, 'top-right');

        return () => {
            if (mapRef.current) {
                mapRef.current.remove(); // Remove the map instance on cleanup
            }
        };
    }, []);

    return (
        <div>
            <div ref={mapContainerRef} style={{ height: '100vh', width: '100vw' }} />
            <Outlet />
        </div>
    );
};

export default MapComponent;
