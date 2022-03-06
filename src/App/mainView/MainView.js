import "./MainView.css";
import { Link } from "react-router-dom";
function MainView() {
  return (
    <div className="view-container">
      <div className="view-detail-container">
        <h3 className="text-title-text">
          Nasza firma oferuje organizację i obsługę szkoleń w pełnym zakresie.
        </h3>
        <Link to="O_nas">
          <button className="text-title-button-green">
            <h3 className="text-tittle-button-text">Read More</h3>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MainView;
