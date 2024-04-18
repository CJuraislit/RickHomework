import { useEffect, useState } from "react";
import { fetchEpisodes, fetchCharacters } from "../api";
import "./Rick.css";

export default function Rick() {
  const [episodes, setEpisodes] = useState([]);
  const [charactersByEpisodes, setCharactersByEpisodes] = useState({});
  const [isLoadingByEposodes, setisLoadingByEposodes] = useState({});
  useEffect(() => {
    fetchEpisodes().then((data) => {
      console.log(data);
      setEpisodes(data);
    });
  }, []);

  const handleEpisodeClick = (episode) => {
    const ids = episode.characters.map((character) => {
      const ids = character.split("/").pop();
      // console.log(ids);
      return ids;
    });

    setisLoadingByEposodes({ ...isLoadingByEposodes, [episode.id]: true });

    fetchCharacters(ids).then((data) => {
      console.log(data);
      setCharactersByEpisodes({ ...charactersByEpisodes, [episode.id]: data });
      setisLoadingByEposodes({ ...isLoadingByEposodes, [episode.id]: false });
    });
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Alive":
        return "character-alive";
      case "Dead":
        return "character-dead";
      default:
        return "character-unknown";
    }
  };

  return (
    <div>
      {episodes.map((episode) => {
        return (
          <div
            key={episode.id}
            className="episode"
            onClick={() => handleEpisodeClick(episode)}
          >
            <h3>{episode.episode + ":" + episode.name}</h3>
            <div className="characters-container">
              {isLoadingByEposodes[episode.id] && (
                <div className="loading">Loading...</div>
              )}
              {charactersByEpisodes[episode.id]?.map((character) => {
                return (
                  <div
                    key={episode.id + ":" + character.id}
                    className={"character " + getStatusClass(character.status)}
                  >
                    <div className="character-left">
                      <img src={character.image} alt={character.className} />
                    </div>
                    <div className="character-right">
                      <h3>{character.name}</h3>
                      <div>Species: {character.species}</div>
                      <div>Sex: {character.gender}</div>
                      <div>Location: {character.location.name}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
