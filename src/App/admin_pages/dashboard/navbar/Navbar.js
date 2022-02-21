import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Image from "../../../../assets/images/logo.png";
function Navbar() {
  const openNav = e => {
    e.target.offsetParent.lastChild.style.width = "100%";
    console.log(e.target.offsetParent.lastChild);
  };
  const closeNav = e => {
    e.target.offsetParent.style.width = "0%";
  };
  return (
    <div className="navbar-general-container">
      <div className="navbar-mobile">
        <button onClick={openNav}>
          <i class="fas fa-bars"></i>
        </button>
        <div id="myNav" class="overlay">
          <a href="#test" class="closebtn" onClick={closeNav}>
            &times;
          </a>
          <div class="overlay-content">
            <Link to="/">Aktualności</Link>
            <Link to="O_nas">Szkolenia</Link>
            <Link to="../Promocje">Maile</Link>
          </div>
        </div>
      </div>
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/">
            <img alt="logo" src={Image} className="logo"></img>
          </Link>
        </div>
        <div className="subpages-container">
          <NavLink
            to="../admin/dashboard"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Aktualności
          </NavLink>
          <NavLink
            to="../admin/szkolenia"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Szkolenia
          </NavLink>
          <NavLink
            to="../admin/maile"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Maile
          </NavLink>
          {/* <Link to="Aktualności">Aktualności</Link> */}
          {/* <Link to="Promocje">Promocje</Link> */}
          {/* <Link to="Harmonogram">Harmonogram</Link> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
