import Button from "../Button";
import Title from "../Title";
import "./Style.scss";
function Hero({ movie }) {
  const { category, desc, image, name, type } = movie;
  const background = {
    backgroundImage: `url('${image}')`,
  };

  return (
    <section className="wrapperHero" style={background}>
      <div className="wrapperSubtitle">
        <h2>Original de COURFLIX</h2>
      </div>
      <div className="wrapperTitle">
        <Title title={name} />
      </div>
      <div className="wrapperButtons">
        <Button style={`play`} text="Reproducir" />
        <Button style={`play`} text="+ mi lista" />
      </div>
      <div className="wrapperExtraInfo">
        <p>{`¡ Ve la ${type} de categoria ${category} Ahora !`}</p>
      </div>
      <div className="wrapperDescription">
        <p>{desc}</p>
      </div>
    </section>
  );
}
export default Hero;
