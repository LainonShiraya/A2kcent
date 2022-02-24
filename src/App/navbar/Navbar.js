import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Image from "../../assets/images/logo.png";
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
            <Link to="../O_nas">O nas</Link>
            <div class="dropdown">
              Oferta <i class="fas fa-angle-down"></i>
              <div class="dropdown-content dropdown-content-mobile">
                <Link to="Dla_Studentów">Dla Studentów</Link>
                <Link to="../laboratory">Dla Laboratoriów</Link>
                <Link to="../companies">Dla Firm</Link>
                <Link to="../producers">Dla Producentów</Link>
                <Link to="../training">Szkolenia Zamknięte</Link>
              </div>
            </div>
            <Link to="../Harmonogram">Zapisz się</Link>
            <Link to="../Napisz_do_nas">Kontakt</Link>
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
            to="../O_nas"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            O nas
          </NavLink>
          {/* <Link to="Aktualności">Aktualności</Link> */}
          <div class="dropdown">
            Oferta <i class="fas fa-angle-down"></i>
            <div class="dropdown-content">
              <Link to="Dla_Studentów">Dla Studentów</Link>
              <Link to="../laboratory">Dla Laboratoriów</Link>
              <Link to="../companies">Dla Firm</Link>
              <Link to="../producers">Dla Producentów</Link>
              <Link to="../training">Szkolenia Zamknięte</Link>
            </div>
          </div>
          {/* <Link to="Promocje">Promocje</Link> */}
          {/* <Link to="Harmonogram">Harmonogram</Link> */}
          <NavLink
            to="../Harmonogram"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Zapisz się
          </NavLink>
          <Link to="../Napisz_do_nas">
            <button className="navbar-button-contact">Napisz do nas</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
