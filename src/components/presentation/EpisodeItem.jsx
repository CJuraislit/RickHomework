import { useMemo, useState } from "react";
import { CharacterContainer } from "../containers/CharactersContainer";

export const EpisodeItem = ({ episode }) => {
  const [open, setOpen] = useState(false);

  const ids = episode.characters.map((character) => {
    const id = character.split("/").pop();
    return id;
  });

  // const ids = useMemo(() => {
  //   episode.characters.map((character) => {
  //     const id = character.split("/").pop();
  //     return id;
  //   });
  // }, [episode?.characters]);

  console.log(ids);

  return (
    <div
      className="episode"
      onClick={(e) => {
        e.stopPropagation();
        setOpen(!open);
      }}
    >
      <h3>{episode.episode + ":" + episode.name}</h3>
      {open && <CharacterContainer ids={ids} />}
    </div>
  );
};
