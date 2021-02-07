import { Link } from "react-router-dom";
import "./Style.scss";
function Card({ item }) {
  const background = {
    backgroundImage: `url('${item?.image}')`,
  };
  return (
    <Link to={`/home/movie=${item?.id}`} className="Link">
      <section className="wrapperCard" style={background}>
        <div className="wrapperInfo">
          <h3 className="wrapperName">
            nombre: <span className="name">{item?.name}</span>
          </h3>
          <p className="wrapperCategory">
            <span className="category">genero: {item?.category}</span>
          </p>
        </div>
      </section>
    </Link>
  );
}

export default Card;
