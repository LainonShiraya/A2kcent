import "./Promotion.css";
import Image from "../../../assets/images/post-sample.jpeg";

function Promotion() {
  return (
    <div className="promotion-view-container">
      <div className="promotion-image-container">
        <div
          className="promotion-image"
          style={{ backgroundImage: `url(${Image})` }}
        ></div>
      </div>
      <div className="promotion-text-container">
        <div className="promotion-text">
          <h2>Szkolenia</h2>
          <h3>od dziś w ofercie akcent</h3>
          <div className="promotion-text-params">
            <h5>
              <i class="fas fa-map-marker-alt"></i>online
            </h5>
            <h5>
              <i class="far fa-calendar-alt"></i> 29 listopada 2019
            </h5>
          </div>
          <div className="promotion-text-description">
            <h3>
              W związku z pandemią covid-19 postanowiliśmy wdrożyć prowadzenie
              zajęć online
            </h3>
          </div>
        </div>
      </div>
      <div className="promotion-buy-container">
        <h1>Liczba miejsc</h1>
        <h2>ograniczona</h2>
        <h1 className="promotion-sale">- 50%</h1>
        <button className="button-ofert promotion-button">Zgłoś się!</button>
      </div>
    </div>
  );
}

export default Promotion;
