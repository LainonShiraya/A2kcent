import "./CategoryB.css";
function Category({ title, textDescription }) {
  return (
    <div className="container containerB">
      <div className="category-text-containerB">
        <h3 className="text-category-titleB">{title}</h3>
        <span>{textDescription}</span>
        <button className="learn-more button-arrow-animation">
          <span className="circle" aria-hidden="true">
            <span className=" icon arrow"></span>
          </span>
          <span className="button-text">Sprawdź</span>
        </button>
      </div>
      <div className="category-image-containerB">
        <div className="category-imageB"></div>
      </div>
      <div className="category-circle-fillerB"></div>
    </div>
  );
}

export default Category;
