import "./Style.scss";
import Title from "./../../components/Title";
import Input from "../../components/Input";
import ButtonSubmit from "../../components/ButtonSubmit";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
function Login() {
  const history = useHistory();
  const [useLogin, setLogin] = useState({
    email: "",
    password: "",
  });
  const handleSave = (value, name) => {
    setLogin({ ...useLogin, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log(useLogin);
    try {
      const response = await axios.post(
        `https://courflix.herokuapp.com/login`,
        useLogin
      );
      console.log(response);
      if (response.status === 200) {
        history.push("/Home");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <main className="wrapperLogin">
      <div className="wrapperForm">
        <div className="wrapperTitle">
          <Title title="Has login" />
        </div>
        <form className="Form" onSubmit={handleSubmit} method="post">
          <Input
            type="email"
            placeholder="@ insert you email"
            required={true}
            name="email"
            handleCallback={handleSave}
          />
          <Input
            type="password"
            placeholder="password"
            required={true}
            name="password"
            handleCallback={handleSave}
          />
          <ButtonSubmit value="Login..." />
        </form>
      </div>
    </main>
  );
}
export default Login;
