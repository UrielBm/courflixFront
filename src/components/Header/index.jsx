import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import logo from "./../../assets/img/logo.svg";
import { useState } from "react";
import "./Style.scss";
import NavBar from "../NavBar";
function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="wrapperNav">
      <header className="wrapperHeader">
        <div className="wrapperMenuHambuerguesa">
          <Hamburger color="#e50914" toggled={isOpen} toggle={setOpen} />
        </div>
        <div className="wrapperLogo">
          <Link to="/home">
            <img src={logo} className="" alt="Logo" />
          </Link>
        </div>
      </header>
      <div className="wrapperNavBar">
        {isOpen ? (
          <NavBar className="wrapperLinks" />
        ) : (
          <>
            <NavBar className="wrapperLinksNone" />
          </>
        )}
      </div>
    </div>
  );
}
export default Header;
