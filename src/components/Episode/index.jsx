import Reproductor from "../Reproductor";
import "./Style.scss";
function Episode({ episode }) {
  const { name, description, image, source } = episode;
  return (
    <article className="wrapperEpisode">
      <div className="wrapperVideoEpisode">
        <Reproductor type="serie" source={source} image={image} />
      </div>
      <div className="wrapperInfoEpisode">
        <h3 className="titleEpisode">{name}</h3>
        <p className="descriptionEpisode">{description}</p>
      </div>
    </article>
  );
}
export default Episode;
