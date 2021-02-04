import { Link } from "react-router-dom";
import Button from "../Button";
import Title from "../Title";
import "./Style.scss";
function Hero({ movie }) {
  //console.log(movie);
  const background = {
    backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.5)
    ),url('${movie?.image}')`,
  };

  return (
    <section className="wrapperHero" style={background}>
      <div className="wrapperSubtitle">
        <h2>Original de COURFLIX</h2>
      </div>
      <div className="wrapperTitle">
        <Title title={movie?.name} />
      </div>
      <div className="wrapperButtons">
        <Link to={`play/movie=${movie?.id}`}>
          <Button style={`play`} text="Reproducir" />
        </Link>
        <Button style={`play`} text="+ mi lista" />
      </div>
      <div className="wrapperExtraInfo">
        <p>{`¡ Ve la ${movie?.type} de categoria ${movie?.category} Ahora !`}</p>
      </div>
      <div className="wrapperDescription">
        <p>{movie?.desc}</p>
      </div>
    </section>
  );
}
export default Hero;
