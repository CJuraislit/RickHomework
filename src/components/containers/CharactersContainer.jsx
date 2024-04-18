import { CharacterList } from "../presentation/CharacterList";
import { useEffect, useState } from "react";
import { fetchCharacters } from "../../api";

export const CharacterContainer = ({ ids }) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchCharacters(ids).then((data) => {
      console.log(data);
      setCharacters(data);
      setIsLoading(false);
    });
  }, [ids]);

  return <CharacterList characters={characters} isLoading={isLoading} />;
};
