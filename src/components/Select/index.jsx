import "./Style.scss";
function Select(props) {
  const { callback, array } = props;
  const handleOnChange = (e) => {
    const { value } = e.target;
    callback(value);
  };
  return (
    <select className="select" onChange={handleOnChange}>
      {array.map((season, key) => {
        return (
          <option value={season._id} key={key}>
            {season.name}
          </option>
        );
      })}
    </select>
  );
}
export default Select;
