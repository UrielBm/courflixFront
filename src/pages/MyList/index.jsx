import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import "./Style.scss";
function MyList() {
  const [loading, setloading] = useState(true);
  const [perfil, setPerfil] = useState({});
  useEffect(() => {
    handlegetPerfil();
  }, []);
  const handlegetPerfil = async () => {
    const perfil = await axios.get(
      "https://backendcourflix.herokuapp.com/user/60170db0cfd1e40015b1d1d0"
    );
    const { data } = perfil;
    setPerfil(data);
    setloading(false);
  };
  const { name, isAdmin, movie, favMovie } = perfil;
  console.log(movie);
  return (
    <main className="wrapperHome">
      <Header />
      {loading ? (
        <div className="wrapperLoading">
          <div className="loading"></div>
        </div>
      ) : (
        <div className="wrapperPerfil">
          <div className="wrapperInfoUser">
            <h2 className="title">User Perfil</h2>
            <p className="text">Nombre: {name}</p>
            <p className="text">Película favorita: {favMovie}</p>
            {isAdmin ? (
              <p className="text">
                Type User: <span className="admin">Es Administrador</span>
              </p>
            ) : (
              <p className="text">
                Type User: <span className="admin">Usuario</span>
              </p>
            )}
          </div>
          <div className="wrapperInfoMovie">
            <div className="Info">
              <p className="text">Nombre: {movie.name}</p>
              <p className="text">Category: {movie.category}</p>
              <p className="text">Type: {movie.type}</p>
            </div>
            <div className="wrapperImg">
              <img className="img" src={movie.image} alt="favorite movie" />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
export default MyList;
