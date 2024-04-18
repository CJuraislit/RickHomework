import React from "react";

const LocationItem = ({ location }) => {
  return (
    <div className="location">
      <h3>
        Planet: {location.name} Dimension: {location.dimension}{" "}
      </h3>
    </div>
  );
};

export default LocationItem;
