import React, { useState } from "react";
import LocationContainer from "./LocationContainer";

const LocationSelect = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="episode-select" onClick={() => setOpen(!open)}>
      <h2>Location List</h2>
      {open && <LocationContainer />}
    </div>
  );
};

export default LocationSelect;
