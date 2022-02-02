import "./Faq.css";

const showText = e => {
  if (e.currentTarget.lastElementChild.classList.contains("faq-text-show")) {
    e.currentTarget.lastElementChild.classList.remove("faq-text-show");
    e.currentTarget.lastElementChild.lastElementChild.classList.add(
      "faq-text-not-visible"
    );
  } else {
    e.currentTarget.lastElementChild.lastElementChild.classList.remove(
      "faq-text-not-visible"
    );
    e.currentTarget.lastElementChild.classList.add("faq-text-show");
  }
};
function Faq({ title, text }) {
  return (
    <div className="faq-container-faq" onClick={showText}>
      <div className="faq-title">
        <h2>{title}</h2>
        <i className="fas fa-chevron-down"></i>
      </div>
      <div className="faq-text-container faq-text-hide">
        <span className="faq-text faq-text-not-visible">{text}</span>
      </div>
    </div>
  );
}

export default Faq;
