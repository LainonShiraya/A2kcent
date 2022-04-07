import { Link } from "react-router-dom";
import "./Ofert_admin.css";
function Ofert({ id, title, type, date, price, place }) {
  return (
    <div className="ofert-container  from-left" key={id}>
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
      <div className="buttons-container">
        <Link
          to={`../admin/dashboard/edit/Harmonogram/${id}`}
          params={{ id, title }}
        >
          <button className="button-oferts">Edytuj</button>
        </Link>
        <button className="button-oferts button-warning">Usuń</button>
      </div>
    </div>
  );
}

export default Ofert;
