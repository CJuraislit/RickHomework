import { createContext, useState } from "react";
import Rick from "./components/Rick";
import EpisodesSelect from "./components/containers/EpisodesSelect";
import LocationSelect from "./components/containers/LoacationSelect";

function App() {
  return (
    <>
      <EpisodesSelect />
      <LocationSelect />
    </>
  );
}

export default App;
