import React, { useState } from "react";
import { EpisodesContainer } from "./EpisodesContainer";

const EpisodesSelect = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="episode-select" onClick={() => setOpen(!open)}>
      <h2>Elisodes List</h2>
      {open && <EpisodesContainer />}
    </div>
  );
};

export default EpisodesSelect;
