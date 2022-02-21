import "./RecentPosts.css";
import PostSmall from "../recentPostsAdmin/postSmall/PostSmall";
import { Link } from "react-router-dom";
function RecentPosts() {
  return (
    <div className="recent-posts-container">
      <div className="recent-posts">
        <div className="recent-posts-small-admin ">
          <PostSmall
            title=" Szkolenia online od dziś w ofercie akcent"
            info="  W związku z pandemią covid-19 postanowiliśmy wdrożyć prowadzenie
            zajęć online  W związku z pandemią covid-19 postanowiliśmy wdrożyć prowadzenie
            zajęć online  W związku z pandemią covid-19 postanowiliśmy wdrożyć prowadzenie
            zajęć online  W związku z pandemią covid-19 postanowiliśmy wdrożyć prowadzenie
            zajęć online  W związku z pandemią covid-19 postanowiliśmy wdrożyć prowadzenie
            zajęć online"
            date=" 30 listopada 2021"
          />
          <PostSmall
            title=" Szkolenia online od dziś w ofercie akcent"
            info="  W związku z pandemią covid-19 postanowiliśmy wdrożyć prowadzenie
            zajęć online"
            date=" 30 listopada 2021"
          />
        </div>
      </div>
      <div className="button-recent-posts-container">
        <Link to="add">
          <button className="button-post-small">Dodaj</button>
        </Link>
      </div>
    </div>
  );
}

export default RecentPosts;
