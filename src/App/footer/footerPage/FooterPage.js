import "./FooterPage.css";

function FooterPage({ title, subpages }) {
  return (
    <div className="footer-page-container">
      <div className="footer-page-title">
        <h2>{title}</h2>
      </div>
      <div className="footer-page-subpages">
        {subpages.map(subpage => {
          return <h2>{subpage}</h2>;
        })}
      </div>
    </div>
  );
}

export default FooterPage;
