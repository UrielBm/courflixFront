import "./Style.scss";
function Button({ text, style, action }) {
  const handleAction = () => {
    action();
  };

  return (
    <button className={style} onClick={handleAction}>
      {text}
    </button>
  );
}
export default Button;
