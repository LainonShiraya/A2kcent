import "./PostSmall.css";
import Image from "../../../../../assets/images/post-sample.jpeg";
import { Link } from "react-router-dom";
function PostSmall({ title, info, date }) {
  const key = 1;
  return (
    <div className="post-small-container">
      <div className="post-small-image-container">
        <img src={Image} alt="loading..." class="post-small-image" />
      </div>
      <div className="post-small-text-container">
        <div className="post-small-text-title">
          <h3>{title}</h3>
        </div>
        <div className="post-small-text-info">
          <span>{info}</span>
        </div>
        <div className="post-small-text-date">
          <h5>{date}</h5>
        </div>
      </div>
      <div className="posts-small-button-container">
        <Link to={`edit/${key}`}>
          <button className="button-post-small admin-button-margin">
            Edytuj
          </button>
        </Link>
        <button className="button-post-small">Usuń</button>
      </div>
    </div>
  );
}

export default PostSmall;
