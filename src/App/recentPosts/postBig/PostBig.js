import "./PostBig.css";
//import Image from "../../../assets/images/post-sample.jpeg";
function PostBig({ title, info, date, Image }) {
  console.log(info);
  return (
    <div
      className="post-big-container"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className="post-big-text-container">
        <div className="post-big-text-title">
          <h3>{title}</h3>
        </div>
        <div className="post-big-text-info">
          {info.map(e => {
            return <p>{e}</p>;
          })}
        </div>
        <div className="post-big-text-date-container">
          <h5 className="text-post-big-date">{date}</h5>
        </div>
      </div>
    </div>
  );
}

export default PostBig;
