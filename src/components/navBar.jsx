import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/test">
                Test
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
