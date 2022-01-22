import { Component } from "react";
import "./nav-bar.component.css";

export default class NavBar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="d-flex ">
          <div>Home</div>
          <div>About</div>
          <div></div>
        </nav>
      </div>
    );
  }
}
