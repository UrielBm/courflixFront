import { useEffect, useState } from "react";
import "./Style.scss";
import Header from "../../components/Header";
import axios from "axios";
import Hero from "../../components/Hero";
function Home() {
  const [Movie, setMovie] = useState([]);
  useEffect(() => {
    handleRequestMovies();
  }, []);
  const handleRequestMovies = async () => {
    const listMovies = await axios.get(
      "https://backendcourflix.herokuapp.com/movies"
    );
    console.log(listMovies.data);
    setMovie(...Movie, listMovies.data);
  };
  console.log(Movie);
  return (
    <main className="wrapperHome">
      <Header />
      <section>
        <Hero movie={Movie[0]} />
      </section>
    </main>
  );
}
export default Home;
