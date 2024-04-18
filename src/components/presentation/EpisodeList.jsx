import { EpisodeItem } from "./EpisodeItem";

export const EpisodeList = ({ episodes }) => {
  console.log(episodes);
  return (
    <div onClick={(e) => e.stopPropagation()}>
      {episodes.map((episode) => {
        return <EpisodeItem key={episode.id} episode={episode} />;
      })}
    </div>
  );
};
