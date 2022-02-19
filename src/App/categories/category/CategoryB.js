import "./CategoryB.css";
import Image from "../../../assets/images/roman nerd.png";
function Category({
  title,
  setShowDetail,
  setShowDetailText,
  setShowDetailTitle,
  textDescription,
  test,
  link,
  page,
}) {
  const clickShowDetail = e => {
    setShowDetail(true);
    setShowDetailText(textDescription);
    setShowDetailTitle(title);
    test.style.display = "flex";
    console.log(page);

    link({ page });
  };
  return (
    <div className="category-containerB">
      <div className="category-image-containerB">
        <img src={Image} alt="..." className="category-imageB" />
      </div>
      <div className="category-text-containerB">
        <h3 className="text-category-titleB">{title}</h3>
        <button className="button-categoryB" onClick={clickShowDetail}>
          Read More
        </button>
      </div>
    </div>
  );
}

export default Category;
