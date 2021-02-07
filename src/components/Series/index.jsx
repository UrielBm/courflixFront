import { useState } from "react";
import Episode from "../Episode/index";
import Select from "../Select";
import "./Style.scss";
function Series({ serie }) {
  const episodes = serie.seasons[0].episodes;
  const [ArrayEpisodes, setArrayEpisodes] = useState(episodes);
  const displayEpisodes = (value) => {
    const seasonEpisodes = serie.seasons
      .filter((season) => season._id === value)
      .map(({ episodes }) => {
        return episodes;
      });
    setArrayEpisodes(seasonEpisodes[0]);
  };
  return (
    <>
      <div className="wrapperSeason">
        <Select callback={displayEpisodes} array={serie.seasons} />
      </div>
      <div className="wrapperEpisodes">
        {ArrayEpisodes.map((episode, index) => {
          return <Episode episode={episode} key={index} />;
        })}
      </div>
    </>
  );
}
export default Series;
