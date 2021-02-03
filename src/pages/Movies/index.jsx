import { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";
import "./Style.scss";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Search from "../../components/Search";
function Movies() {
  const [ArrayMovies, setArrayMovies] = useState([]);
  const [page, SetPage] = useState(2);
  useEffect(() => {
    handleGetMovies();
  }, []);
  const handleGetMovies = async () => {
    const listMovies = await axios.get(
      "https://backendcourflix.herokuapp.com/movies"
    );
    setArrayMovies(listMovies.data);
  };
  const handleAddMovies = async () => {
    const addlistMovies = await axios.get(
      `https://backendcourflix.herokuapp.com/movies?pag=${page}`
    );
    const { data } = addlistMovies;
    const concantlist = ArrayMovies.concat(data);
    setArrayMovies(concantlist);
    SetPage(page + 1);
  };
  //console.log(ArrayMovies);
  return (
    <main className="wrapperHome">
      <Header />
      <div className="wrapperSearch">
        <Search />
      </div>
      <div className="wrapperMoviesofMovies">
        {ArrayMovies.map((item, index) => {
          return (
            <article className="wrapperCardMovies" key={index}>
              <Card item={item} />
            </article>
          );
        })}
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
    </main>
  );
}
export default Movies;
