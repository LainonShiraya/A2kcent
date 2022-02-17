import "./Navbar.css";
import { Link } from "react-router-dom";
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
        <button onClick={openNav}>
          <i class="fas fa-bars"></i>
        </button>
        <div id="myNav" class="overlay">
          <a href="#test" class="closebtn" onClick={closeNav}>
            &times;
          </a>
          <div class="overlay-content">
            <Link to="O_nas">O nas</Link>
            <div class="dropdown">
              Oferta <i class="fas fa-angle-down"></i>
              <div class="dropdown-content dropdown-content-mobile">
                <Link to="Dla_Studentów">Dla Studentów</Link>
                <Link to="laboratory">Dla Labolatoriów</Link>
                <Link to="companies">Dla Firm</Link>
                <Link to="producers">Dla Producentów</Link>
                <Link to="training">Szkolenia Zamknięte</Link>
              </div>
            </div>
            <Link to="Promocje">Promocje</Link>
            <Link to="Harmonogram">Harmonogram</Link>
            <Link to="Kontakt">Kontakt</Link>
            <Link to="/">Strona główna</Link>
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
          <Link to="O_nas">O nas</Link>
          {/* <Link to="Aktualności">Aktualności</Link> */}
          <div class="dropdown">
            Oferta <i class="fas fa-angle-down"></i>
            <div class="dropdown-content">
              <Link to="Dla_Studentów">Dla Studentów</Link>
              <Link to="laboratory">Dla Labolatoriów</Link>
              <Link to="companies">Dla Firm</Link>
              <Link to="producers">Dla Producentów</Link>
              <Link to="training">Szkolenia Zamknięte</Link>
            </div>
          </div>
          {/* <Link to="Promocje">Promocje</Link> */}
          {/* <Link to="Harmonogram">Harmonogram</Link> */}
          <Link to="Harmonogram">Zapisz się</Link>
          <button className="navbar-button-contact">
            <Link to="Napisz_do_nas">Napisz do nas</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
