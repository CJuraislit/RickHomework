import { CharacterItem } from "./CharacterItem";

export const CharacterList = ({ characters, isLoading }) => {
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="characters-container">
      {characters.map((character) => (
        <CharacterItem key={character.id} character={character} />
      ))}
    </div>
  );
};
