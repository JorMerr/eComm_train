import React, { Component } from "react";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
  }
  componentDidMount() {
    this.buttonRef.current.addEventListener("click", this.handleToggle);
  }
  componentWillUnmount() {
    this.buttonRef.current.removeEventListener("click", this.handleToggle);
  }
  handleToggle = () => {
    const navbarNav = document.getElementById("navbarNav");
    navbarNav.classList.toggle("show");
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-style">
          <a className="navbar-brand" href="/#">
            eCommerce Site Training
          </a>
          <button
            ref={this.buttonRef}
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link disabled" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#about">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
