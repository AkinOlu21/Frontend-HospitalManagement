import React from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import MapComponent from './MapComponent'; // Renamed from 'Maps' for clarity

const MapPage = () => {
    const { state } = useLocation();
  
    // Check if state or location is undefined and handle appropriately
    if (!state || !state.location) {
      return <p>No location data provided!</p>;  // Fallback content or redirect
    }
  
    return (
      <div>
        <MapComponent location={state.location} />
      </div>
    );
  };
export default MapPage;
