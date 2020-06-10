import React from 'react';

const LocationCard = props => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>
                    <span className="card-locationname">
                        {props.location.name}
                    </span>
                </h3>
                <p>{props.location.address}</p>
                <p>{props.location.phone}</p>
            </div>
        </div>
    );
};

export default LocationCard