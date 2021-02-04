import axios from "axios";
import { useEffect, useState } from "react";
import ContentMovies from "../../components/ContentMovies";
import Header from "../../components/Header";
import Search from "../../components/Search";

function Series() {
  const [ArraySeries, setArraySeries] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    handleGetSeries();
  }, []);
  const handleGetSeries = async () => {
    const listSeries = await axios.get(
      "https://backendcourflix.herokuapp.com/series"
    );
    setArraySeries(listSeries.data);
    setLoading(false);
  };
  const handleSearch = (value) => {
    if (value === "") {
      handleGetSeries();
    }
    const seriesFilter = ArraySeries.filter((serie) => {
      return serie.name.toLowerCase().match(value.toLowerCase());
    });
    setArraySeries(seriesFilter);
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
        <div className="wrapperMoviesofMovies">
          <ContentMovies movies={ArraySeries} />
        </div>
      )}
    </main>
  );
}
export default Series;
