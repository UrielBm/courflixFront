import "./App.scss";
import Title from "../components/Title";
import Button from "../components/Button";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="wrapperMain">
      <div className="wrapperTitle">
        <Title title={`Bienvenido registrate para continuar o inicia sesión`} />
      </div>
      <section className=" wrapperButton">
        <Link to="/register">
          <Button style={`register`} text={`Registrate`} />
        </Link>
        <Link to="/login">
          <Button style={`login`} text={`Iniciar Sesión`} />
        </Link>
      </section>
    </div>
  );
}

export default App;
