import "./Style.scss";
function Input({ type, placeholder, required, name, handleCallback }) {
  const handleChage = (event) => {
    const { name, value } = event.target;
    handleCallback(value, name);
  };
  return (
    <input
      className="input"
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      onChange={handleChage}
    />
  );
}
export default Input;
