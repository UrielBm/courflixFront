import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Reproductor from "../../components/Reproductor";
import Series from "../../components/Series";
import "./Style.scss";
function Play() {
  const { id } = useParams();
  const [Video, setVideo] = useState({
    image: "",
    source: "",
    type: "",
  });
  const [Serie, setSerie] = useState({
    name: "",
    category: "",
    type: "",
    desc: "",
    image: "",
    seasons: [],
  });
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const handleGetVideo = async () => {
      const pelicula = await axios.get(
        `https://backendcourflix.herokuapp.com/movie/${id}`
      );
      const { image, source, type } = pelicula.data;
      if (type === "movie") {
        setVideo({ image, source, type });
      } else {
        const { name, category, type, desc, image, seasons } = pelicula.data;
        setSerie({ name, category, type, desc, image, seasons });
      }
      setLoading(false);
    };
    handleGetVideo();
  }, [id]);
  return (
    <main className="wrapperHome">
      <div className="wrapperHeader">
        <Header />
      </div>
      {Video.type === "movie" ? (
        <div className="wrapperVideo">
          {Loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <Reproductor
                type="movie"
                source={Video.source}
                image={Video.image}
              />
            </>
          )}
        </div>
      ) : (
        <></>
      )}
      {Serie.type === "serie" && Serie.seasons.length !== 0 ? (
        <>
          <div className="wrapperHeroSeries">
            <Hero movie={Serie} play={false} />
            <Series serie={Serie} />
          </div>
        </>
      ) : Serie.type === "serie" ? (
        <div className="wrapperHeroSeries">
          <Hero movie={Serie} play={false} />
          <p className="NoSeries">Aun no hay temporadas disponibles :/</p>
        </div>
      ) : (
        <></>
      )}
    </main>
  );
}
export default Play;
