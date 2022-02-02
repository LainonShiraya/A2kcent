import "./PostSmall.css";
import Image from "../../../assets/images/post-sample.jpeg";
function PostSmall({ title, info, date }) {
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
    </div>
  );
}

export default PostSmall;
