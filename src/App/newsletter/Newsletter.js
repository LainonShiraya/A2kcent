import "./Newsletter.css";

function RecentPosts() {
  return (
    <div className="container">
      <div className="newsletter-container">
        <div className="icon-container">
          <i className="far fa-envelope fa-10x"></i>
        </div>
        <div className="newsletter-text-container">
          <h2>
            Nie przegap naszych
            <span className="text-color-green"> Szkoleń!</span>
          </h2>
          <h2>
            Zapisz się na <span className="text-color-green">Newsletter</span>
          </h2>
        </div>
      </div>
      <div className="newsletter-input-container">
        <input type="text" placeholder="Email" className="input-newsletter" />
        <button className="button-newsletter">Zapisz się</button>
      </div>
    </div>
  );
}

export default RecentPosts;
