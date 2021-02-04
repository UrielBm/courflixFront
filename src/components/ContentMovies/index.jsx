import "./Style.scss";
import Card from "../Card";
function ContentMovies({ movies }) {
  return (
    <>
      {movies.map((item, index) => {
        return (
          <article className="wrapperCardMovies" key={index}>
            <Card item={item} />
          </article>
        );
      })}
    </>
  );
}
export default ContentMovies;
