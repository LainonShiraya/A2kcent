import "./Navbar.css";
import { Link } from "react-router-dom";
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
              <Link to="link1" className="droplink">
                Oferta <i class="fas fa-angle-down"></i>
              </Link>
              <div class="dropdown-content dropdown-content-mobile">
                <Link to="link1">link_1</Link>
                <Link to="link2">link_2</Link>
                <Link to="link3">link_3</Link>
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
            <h4>Logo a2kcent</h4>
          </Link>
        </div>
        <div className="subpages-container">
          <Link to="O_nas">O nas</Link>
          <Link to="Aktualności">Aktualności</Link>
          <div class="dropdown">
            <Link to="Oferta">
              Oferta <i class="fas fa-angle-down"></i>
            </Link>
            <div class="dropdown-content">
              <Link to="Dla_Studentów">Dla Studentów</Link>
              <Link to="Dla_Labolatoriów">Dla Labolatoriów</Link>
              <Link to="Dla_Firm">Dla Firm</Link>
              <Link to="Dla_Producentów">Dla Producentów</Link>
              <Link to="Szkolenia_Zamknięte">Szkolenia Zamknięte</Link>
            </div>
          </div>
          <Link to="Promocje">Promocje</Link>
          <Link to="Harmonogram">Harmonogram</Link>
          <button className="navbar-button-contact">
            <Link to="Napisz_do_nas">Napisz do nas</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
