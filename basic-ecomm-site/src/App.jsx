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
        <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-style">
          <a class="navbar-brand" href="#home">
            Navbar
          </a>
          <button
            ref={this.buttonRef}
            class="navbar-toggler"
            type="button"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link disabled" href="#home">
                  Home
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
