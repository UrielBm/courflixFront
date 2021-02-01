import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ButtonSubmit from "../../components/ButtonSubmit";
import Input from "../../components/Input";
import Title from "../../components/Title";
import "./Style.scss";
function Register() {
  const history = useHistory();
  const [useRegister, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    favMovie: "",
  });
  const handleCallback = (value, name) => {
    setRegister({ ...useRegister, [name]: value });
  };
  const handleAction = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `https://courflix.herokuapp.com/registeruser`,
        useRegister
      );
      //console.log(response);
      if (response.status === 200) {
        history.push("/login");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="wrapperRegister">
      <div className="wrapperForm">
        <div className="wrapperTitle">
          <Title title="Has tu registro aquí" />
        </div>
        <form className="Form" onSubmit={handleAction}>
          <Input
            type="text"
            placeholder="name"
            required={true}
            name="name"
            handleCallback={handleCallback}
          />
          <Input
            type="email"
            placeholder="correo@correo.com"
            required={true}
            name="email"
            handleCallback={handleCallback}
          />
          <Input
            type="password"
            placeholder="contraseña"
            required={true}
            name="password"
            handleCallback={handleCallback}
          />
          <Input
            type="text"
            placeholder="¿pelicula favorita?"
            required={false}
            name="favMovie"
            handleCallback={handleCallback}
          />
          <ButtonSubmit value="Registrate" />
        </form>
      </div>
    </div>
  );
}

export default Register;
