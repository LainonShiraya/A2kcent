import "./Faq.css";

const showText = e => {
  console.log(e.currentTarget);
  if (
    e.currentTarget.parentElement.lastElementChild.classList.contains(
      "faq-text-show"
    )
  ) {
    e.currentTarget.parentElement.lastElementChild.classList.remove(
      "faq-text-container-show"
    );
    e.currentTarget.parentElement.lastElementChild.classList.remove(
      "faq-text-show"
    );
    e.currentTarget.parentElement.lastElementChild.lastElementChild.classList.add(
      "faq-text-not-visible"
    );
    e.currentTarget.lastElementChild.classList.remove("fa-rotate-180");
  } else {
    e.currentTarget.parentElement.lastElementChild.lastElementChild.classList.remove(
      "faq-text-not-visible"
    );
    e.currentTarget.parentElement.lastElementChild.classList.add(
      "faq-text-container-show"
    );
    e.currentTarget.parentElement.lastElementChild.classList.add(
      "faq-text-show"
    );
    e.currentTarget.lastElementChild.classList.add("fa-rotate-180");
  }
};
function Faq({ title, text }) {
  return (
    <div className="faq-container-faq">
      <div className="faq-title" onClick={showText}>
        <h2>{title}</h2>
        <i className="fas fa-chevron-down"></i>
      </div>
      <div className="faq-text-container ">
        <span className="faq-text faq-text-not-visible">{text}</span>
      </div>
    </div>
  );
}

export default Faq;
