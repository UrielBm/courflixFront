import { useEffect, useState } from "react";
import "./Style.scss";
import Header from "../../components/Header";
import axios from "axios";
import Hero from "../../components/Hero";
import CarrucelImg from "../../components/Carrucel";
function Home() {
  const [Movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    handleRequestMovies();
  }, []);
  const handleRequestMovies = async () => {
    const listMovies = await axios.get(
      "https://backendcourflix.herokuapp.com/movies?pag=3"
    );
    //console.log(listMovies.data);
    setMovie(...Movie, listMovies.data);
    setLoading(false);
  };
  //console.log(Movie);
  return (
    <main className="wrapperHome">
      <Header />
      <section>
        {loading ? <p>loading...</p> : <Hero movie={Movie[6]} />}
      </section>
      <section className="wrapperMovies">
        {loading ? (
          <p>loading...</p>
        ) : (
          <CarrucelImg title="movies" arrayItems={Movie} />
        )}
      </section>
      <section className="wrappperSeries">
        {loading ? (
          <p>loading...</p>
        ) : (
          <CarrucelImg title="Series" arrayItems={Movie} />
        )}
      </section>
    </main>
  );
}
export default Home;
