import { useEffect, useState } from "react";
import "./Style.scss";
import Header from "../../components/Header";
import axios from "axios";
import Hero from "../../components/Hero";
import CarrucelImg from "../../components/Carrucel";
import { useParams } from "react-router-dom";
function Home() {
  const { id } = useParams();
  const [ArrayMovies, SetArrayMovies] = useState([]);
  const [Movie, SetMovie] = useState({});
  const [ArraySeries, SetArraySeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Pag, SetPag] = useState(1);
  useEffect(() => {
    handleRandomPages();
    const handleRequestMovies = async () => {
      let movie;
      const listMovies = await axios.get(
        `https://backendcourflix.herokuapp.com/movies?pag=${Pag}`
      );
      if (id) {
        movie = await axios.get(
          `https://backendcourflix.herokuapp.com/movie/${id}`
        );
      } else {
        movie = await axios.get(
          "https://backendcourflix.herokuapp.com/movie/60171527cfd1e40015b1d1d1"
        );
      }
      const listSeries = await axios.get(
        "https://backendcourflix.herokuapp.com/series"
      );
      //console.log(movie.data);
      SetArrayMovies(listMovies.data);
      SetMovie(movie.data);
      SetArraySeries(listSeries.data);
      setLoading(false);
    };
    handleRequestMovies();
  }, [id, Pag]);
  const handleRandomPages = () => {
    const pag = Math.floor(Math.random() * (4 - 1)) + 1;
    SetPag(pag);
  };
  return (
    <main className="wrapperHome">
      <section className="wrapperHeader">
        <Header />
      </section>
      <section>
        {loading ? (
          <div className="wrapperLoading">
            <div className="loading"></div>
          </div>
        ) : (
          <Hero movie={Movie} play={true} />
        )}
      </section>
      <section className="wrapperMovies">
        {loading ? (
          <></>
        ) : (
          <CarrucelImg title="movies" arrayItems={ArrayMovies} />
        )}
      </section>
      <section className="wrapperSeries">
        {loading ? (
          <></>
        ) : (
          <CarrucelImg title="Series" arrayItems={ArraySeries} />
        )}
      </section>
    </main>
  );
}
export default Home;
