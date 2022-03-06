import "./RecentPosts.css";
import PostSmall from "../recentPosts/postSmall/PostSmall";
import PostBig from "../recentPosts/postBig/PostBig";
import CardPost from "../recentPosts/CardPost/CardPost";

function RecentPosts() {
  return (
    <div className="recent-posts-container">
      <div className="recent-posts-title">
        <div className="title">
          <h2 className="text-posts-title-text">Aktualności</h2>
        </div>
        <hr className="line-green" />
        <div className="recent-posts">
          {/* <div className="recent-posts-big"> */}
          <CardPost />
          <CardPost />
          <CardPost />

          {/* <PostBig
              title=" Szkolenia online od dziś w ofercie akcent"
              info="  W związku z pandemią covid-19 postanowiliśmy wdrożyć prowadzenie
            zajęć online"
              date=" 30 listopada 2021"
            />
          </div>
          <div className="recent-posts-small">
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
            /> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default RecentPosts;
