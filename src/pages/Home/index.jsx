import { useEffect, useState } from "react";
import "./Style.scss";
import Header from "../../components/Header";
import axios from "axios";
import Hero from "../../components/Hero";
import CarrucelImg from "../../components/Carrucel";
function Home() {
  const [ArrayMovies, SetArrayMovies] = useState([]);
  const [Movie, SetMovie] = useState({});
  const [ArraySeries, SetArraySeries] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleRequestMovies = async () => {
      const listMovies = await axios.get(
        "https://backendcourflix.herokuapp.com/movies?pag=3"
      );
      const movie = await axios.get(
        "https://backendcourflix.herokuapp.com/movie/60171527cfd1e40015b1d1d1"
      );
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
  }, []);

  return (
    <main className="wrapperHome">
      <section className="wrapperHeader">
        <Header />
      </section>
      <section>{loading ? <p>loading...</p> : <Hero movie={Movie} />}</section>
      <section className="wrapperMovies">
        {loading ? (
          <p>loading...</p>
        ) : (
          <CarrucelImg title="movies" arrayItems={ArrayMovies} />
        )}
      </section>
      <section className="wrapperSeries">
        {loading ? (
          <p>loading...</p>
        ) : (
          <CarrucelImg title="Series" arrayItems={ArraySeries} />
        )}
      </section>
    </main>
  );
}
export default Home;
