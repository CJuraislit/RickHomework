import { useEffect, useState } from "react";
import { fetchEpisodes } from "../../api";
import { EpisodeList } from "../presentation/EpisodeList";

export const EpisodesContainer = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    console.log("Component: rendered");
  });

  useEffect(() => {
    fetchEpisodes().then((data) => {
      setEpisodes(data);
    });
  }, []);

  return <EpisodeList episodes={episodes} />;
};
