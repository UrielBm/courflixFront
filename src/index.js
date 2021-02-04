import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";
import Login from "./pages/Login";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import Reciente from "./pages/Reciente";
import MyList from "./pages/MyList";
import Play from "./pages/Play";
ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/movie=:id" component={Home} />
    <Route exact path="/series" component={Series} />
    <Route exact path="/movies" component={Movies} />
    <Route exact path="/reciente" component={Reciente} />
    <Route exact path="/mylist" component={MyList} />
    <Route exact path="/play/movie=:id" component={Play} />
  </Router>,
  document.getElementById("myApp")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
