import {Component} from 'react'
import { NavLink } from 'react-router-dom'

export default class NavMenu extends Component {

  render() {
        return (
            <nav
              className="navbar navbar-expand-lg navbar-light bg-light bg-transparent"
              id="gtco-main-nav"
            >
      <div className="container">
        <img src={process.env.PUBLIC_URL+"assets/images/spaceEnterpriseLOGO.png"} />
        <button
          className="navbar-toggler"
          data-target="#my-nav"
          onClick={this.myFunction}
          data-toggle="collapse"
        >
          <span className="bar1"></span> <span className="bar2"></span>
          <span className="bar3"></span>
        </button>
        <div id="my-nav" className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/service">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        )
    }
}