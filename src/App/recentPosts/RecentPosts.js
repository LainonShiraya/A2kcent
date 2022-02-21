import "./RecentPosts.css";
import PostSmall from "../recentPosts/postSmall/PostSmall";
import PostBig from "../recentPosts/postBig/PostBig";
import { useEffect, useState } from "react";
import axios from "axios";

function RecentPosts() {
  const [Posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://graph.facebook.com/v13.0/111812341432258?fields=id%2Cname%2Cposts%7Bmessage%2Cfull_picture%2Cto%2Cbackdated_time%2Ccreated_time%7D&access_token=EAAJTCf53S9gBAKPCsZC3lqyGPxJMKbaleuzIi4ywzZAQS68cISn3OA3wJOZB9intLEhHgFiyAq1g2yHWogM5VjgSLKSeD0HfZBEsYZB3xLRf2fN4ZCiqvH0JhXZCn0wtIlFJKQIJSZCEIXBzLDJdifJmvHyoncExY9A5W94ZCDbaWS0fMdEpmUhZC8EG3JGwsbuoUZD%22"
      )
      .then(res => {
        if (res.data) {
          setPosts(res.data.posts.data);
          console.log("działa if !");
        }
        console.log(res.data);
      });
  }, []);
  return (
    <div className="recent-posts-container">
      <div className="recent-posts-title">
        <div className="title">
          <h2 className="text-posts-title-text">Aktualności</h2>
        </div>
        <hr className="line-green" />
        <div className="recent-posts">
          <div className="recent-posts-big">
            {Posts.length > 0 && (
              <PostBig
                title={Posts[0].message.split(/\n/)[0]}
                info={Posts[0].message.split(/\n/).slice(1)}
                date={Posts[0].created_time.split("T")[0]}
                Image={Posts[0].full_picture}
              />
            )}
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
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentPosts;
