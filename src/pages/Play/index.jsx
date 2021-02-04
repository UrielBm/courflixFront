import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import "./Style.scss";
function Play() {
  const { id } = useParams();
  const [Video, setVideo] = useState({
    image: "",
    source: "",
  });
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const handleGetVideo = async () => {
      const pelicula = await axios.get(
        `https://backendcourflix.herokuapp.com/movie/${id}`
      );
      const { image, source } = pelicula.data;
      setVideo({ image, source });
      setLoading(false);
    };
    handleGetVideo();
  }, [id]);
  const { image, source } = Video;
  return (
    <main className="wrapperHome">
      <div className="wrapperHeader">
        <Header />
      </div>
      <div className="wrapperVideo">
        {Loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <video
              className="video"
              preload="auto"
              src={source}
              controls
              poster={image}
            ></video>
          </>
        )}
      </div>
    </main>
  );
}
export default Play;
