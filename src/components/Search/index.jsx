import "./Style.scss";
function Search(props) {
  const handleOnChange = (e) => {
    const { value } = e.target;
    props.accion(value);
  };
  return (
    <>
      <input
        type="text"
        className="Search"
        placeholder="buscar pelicula..."
        onChange={handleOnChange}
      />
    </>
  );
}
export default Search;
