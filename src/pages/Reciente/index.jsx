import axios from "axios";
import { useEffect, useState } from "react";
import ContentMovies from "../../components/ContentMovies";
import Header from "../../components/Header";
import "./Style.scss";
function Reciente() {
  const [loading, setloading] = useState(true);
  const [lastMovies, setlastMovies] = useState([]);
  useEffect(() => {
    handleGetLastMovies();
  }, []);
  const handleGetLastMovies = async () => {
    const response = await axios.get(
      "https://backendcourflix.herokuapp.com/movies?pag=4"
    );
    const { data } = response;
    setlastMovies(data);
    setloading(false);
  };
  return (
    <main className="wrapperHome">
      <Header />
      {loading ? (
        <div className="wrapperLoading">
          <div className="loading"></div>
        </div>
      ) : (
        <div className="wrapperMoviesofMovies">
          <ContentMovies movies={lastMovies} />
        </div>
      )}
    </main>
  );
}
export default Reciente;
