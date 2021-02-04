import { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";
import "./Style.scss";
import Button from "../../components/Button";
import Search from "../../components/Search";
import ContentMovies from "../../components/ContentMovies";
function Movies() {
  const [ArrayMovies, setArrayMovies] = useState([]);
  const [page, SetPage] = useState(0);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    handleGetMovies();
  }, []);
  const handleGetMovies = async () => {
    const listMovies = await axios.get(
      "https://backendcourflix.herokuapp.com/movies"
    );
    setArrayMovies(listMovies.data);
    SetPage(2);
    setLoading(false);
  };
  const handleAddMovies = async () => {
    const addlistMovies = await axios.get(
      `https://backendcourflix.herokuapp.com/movies?pag=${page}`
    );
    const { data } = addlistMovies;
    setArrayMovies([...ArrayMovies, ...data]);
    SetPage(page + 1);
  };
  const handleSearch = (value) => {
    if (value === "") {
      handleGetMovies();
    }
    const moviesFilter = ArrayMovies.filter((movie) => {
      return movie.name.toLowerCase().match(value.toLowerCase());
    });
    setArrayMovies(moviesFilter);
  };
  return (
    <main className="wrapperHome">
      <Header />
      <div className="wrapperSearch">
        <Search accion={handleSearch} />
      </div>
      {Loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="wrapperMoviesofMovies">
            <ContentMovies movies={ArrayMovies} />
          </div>
          <div className="wrapperSearchButton">
            {page <= 4 ? (
              <Button
                action={handleAddMovies}
                style={`search`}
                text="Buscar más peliculas"
              />
            ) : (
              <></>
            )}
          </div>
        </>
      )}
    </main>
  );
}
export default Movies;
