import React, { useState, useEffect } from 'react';
import LocationCard from './LocationCard'
import DataManager from '../../modules/DataManager'

const LocationList = () => {
    const [locations, setLocations] = useState([]);

    const getLocations = () => {
        return DataManager.getAll("locations")
                .then(APIlocations => setLocations(APIlocations))
    };

    useEffect(() => {
        getLocations();
    }, []);

    return (
        <div className="container-cards">
            {locations.map(location =>
                <LocationCard
                    key={location.id}
                    employee={location}
                />    
            )}
        </div>
    );
};

export default LocationList