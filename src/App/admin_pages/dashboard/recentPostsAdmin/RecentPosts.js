import "./RecentPostsAdmin.css";
import PostSmall from "../recentPostsAdmin/CardPost/CardPost.js";
import { Link } from "react-router-dom";
function RecentPosts() {
  return (
    <div className="recent-posts-container">
      <Link to="add">
        <button className="button-oferts admin-button-margin">Dodaj</button>
      </Link>
      <div className="recent-posts-title ">
        <div className="recent-posts admin-posts">
          <PostSmall
            title=" Szkolenia online od dziś w ofercie akcent"
            info="  W związku z pandemią covid-19 postanowiliśmy wdrożyć prowadzenie
            zajęć online"
            date=" 30 listopada 2021"
          />
          <PostSmall
            title=" Szkolenia online od dziś w ofercie akcent"
            info="  W związku z pandemią covid-19 postanowiliśmy wdrożyć prowadzenie
            zajęć online"
            date=" 30 listopada 2021"
          />
          <PostSmall
            title=" Szkolenia online od dziś w ofercie akcent"
            info="  W związku z pandemią covid-19 postanowiliśmy wdrożyć prowadzenie
            zajęć online"
            date=" 30 listopada 2021"
          />
          <PostSmall
            title=" Szkolenia online od dziś w ofercie akcent"
            info="  W związku z pandemią covid-19 postanowiliśmy wdrożyć prowadzenie
            zajęć online"
            date=" 30 listopada 2021"
          />
          <PostSmall
            title=" Szkolenia online od dziś w ofercie akcent"
            info="  W związku z pandemią covid-19 postanowiliśmy wdrożyć prowadzenie
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
    </div>
  );
}

export default RecentPosts;
