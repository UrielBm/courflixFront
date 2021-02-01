import { Link } from "react-router-dom";
import "./Style.scss";
function NavBar({ className }) {
  return (
    <nav className={className}>
      <Link to="/home" className="linkOptions">
        <span>Inicio</span>
      </Link>
      <Link to="/series" className="linkOptions">
        <span>Series</span>
      </Link>
      <Link to="/movies" className="linkOptions">
        <span>Películas</span>
      </Link>
      <Link to="/reciente" className="linkOptions">
        <span>Agregados Recientemente</span>
      </Link>
      <Link to="/mylist" className="linkOptions">
        <span>Mi lista</span>
      </Link>
    </nav>
  );
}
export default NavBar;
