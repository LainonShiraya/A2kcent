import "./Promotions.css";
import Promotion from "../promotions/promotion/Promotion";
function Promotions() {
  return (
    <div className="promotions-view-container">
      <div className="promotions-title-container">
        <h1>Zapoznaj się z najnowszymi promocjami !</h1>
      </div>
      <div className="promotions-container">
        <Promotion />
        <Promotion />
      </div>
    </div>
  );
}

export default Promotions;
