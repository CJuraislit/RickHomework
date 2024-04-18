import React, { useEffect, useState } from "react";
import { fetchLocation } from "../../api";
import LocationList from "../presentation/LocationList";

const LocationContainer = () => {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    fetchLocation().then((data) => {
      setLocation(data);
    });
  }, []);

  return <LocationList locations={location} />;
};

export default LocationContainer;
