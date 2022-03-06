import "./OpinionView.css";
function OpinionView() {
  return (
    <div className="opinion-view-container">
      <div class="opinion-list-container">
        <div className="opinion-container">
          <i className="far fa-calendar-check fa-6x icon-color-green"></i>
          <h3 className="text-image-description-green"> 15+</h3>
          <span className="text-image-description-subtext">
            Years in business
          </span>
        </div>
        <div className="opinion-container">
          <i className="fas fa-users fa-7x icon-color-green"></i>
          <h4 className="text-image-description-green"> 150+</h4>
          <span className="text-image-description-subtext">
            People completed the course
          </span>
        </div>
        <div className="opinion-container">
          <i className="fas fa-laptop fa-6x icon-color-green"></i>
          <h3 className="text-image-description-green"> 30+</h3>
          <span className="text-image-description-subtext">
            Teachings completed
          </span>
        </div>
      </div>
    </div>
  );
}

export default OpinionView;
