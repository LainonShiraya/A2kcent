import "./Ofert.css";
import { Link } from "react-router-dom";
function Ofert({ id, title, type, date, price, place }) {
  return (
    <div className="ofert-container" key={id}>
      <div className="ofert-description-container">
        <div className="restriction" data-text={title}>
          <div className="on-hover-text-container" data-text={title}>
            <h3>{title}</h3>
          </div>
          <button className="button-program">
            program szkolenia <i class="fas fa-chevron-down"></i>
          </button>
        </div>
      </div>
      <div className="ofert-params-container">
        <div className="ofert-param-container-type">
          <h3 className="ofert-param-text">{type}</h3>
          <h4 className="ofert-param-text">
            {" "}
            <i class="fas fa-map-marked"></i> &nbsp; {place}
          </h4>
        </div>
        <div className="ofert-param-container-date">
          <h3 className="ofert-param-text">{date}</h3>
        </div>
        <div className="ofert-param-container-price">
          <h3 className="ofert-param-text">{price} zł</h3>
        </div>
      </div>
      <Link to={`../Harmonogram/${id}/${title}`} params={{ id, title }}>
        <button className="button-oferts">Zapisz się</button>
      </Link>
    </div>
  );
}

export default Ofert;
