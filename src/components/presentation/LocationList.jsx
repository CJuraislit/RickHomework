import React from "react";
import LocationItem from "./LocationItem";

const LocationList = ({ locations }) => {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      {locations.map((location) => {
        return <LocationItem key={location.id} location={location} />;
      })}
    </div>
  );
};

export default LocationList;
