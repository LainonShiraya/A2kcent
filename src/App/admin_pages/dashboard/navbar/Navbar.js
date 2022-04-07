import "./Navbar_admin.css";
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
        <div className="navbar-button-hamburger-container">
          <Link to="/">
            <img alt="logo" src={Image} className="logo"></img>
          </Link>
          <button onClick={openNav}>
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </button>
        </div>
        <div id="myNav" class="overlay">
          <a href="#test" class="closebtn" onClick={closeNav}>
            &times;
          </a>
          <div class="overlay-content">
            <Link to="/">Strona główna</Link>
            <Link to="../admin/dashboard">Aktualności</Link>
            <Link to="../admin/dashboard/courses">Szkolenia</Link>
            <Link to="../admin">Wyloguj</Link>
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
            to="/"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Strona główna
          </NavLink>
          <NavLink
            to="../admin/dashboard"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Aktualności
          </NavLink>
          {/* <Link to="Promocje">Promocje</Link> */}
          {/* <Link to="Harmonogram">Harmonogram</Link> */}
          <NavLink
            to="../admin/dashboard/courses"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Szkolenia
          </NavLink>
          <Link to="../admin">
            <button className="navbar-button-contacts">Wyloguj</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
