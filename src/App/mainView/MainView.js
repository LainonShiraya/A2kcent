import "./MainView.css";
import { Link } from "react-router-dom";
import Hero from "../../assets/images/hero_real.png";
function MainView() {
  return (
    <div className="view-container">
      <div className="view-detail-container">
        <div className="view-detail-text-container">
          <h3 className="text-title-text-numbers">
            Przeprowadziliśmy już 2700 spotkań
          </h3>
          <h3 className="text-title-text">
            Szkolenia online z obszarów badań laboratoryjnych
          </h3>
          <h5 className="text-title-text-small">
            Organizujemy szkolenia oraz konserwatoria, wdrażamy systemy
            zarządzania, prowadzimy konsultacje
          </h5>
          <Link to="O_nas">
            <button className="text-title-button-green">
              <h3 className="text-tittle-button-text">Read More</h3>
            </button>
          </Link>
        </div>
        <div className="view-image-container">
          <img src={Hero} alt="hero" className="view-image" />
        </div>
      </div>
    </div>
  );
}

export default MainView;
