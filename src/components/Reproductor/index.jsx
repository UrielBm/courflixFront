import "./Style.scss";
function Reproductor({ source, image, type }) {
  return (
    <>
      <video
        className={type}
        preload="auto"
        src={source}
        controls
        poster={image}
      ></video>
    </>
  );
}
export default Reproductor;
