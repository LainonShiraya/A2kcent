import "./Category.css";
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
    <div className="category-container">
      <div className="category-image-container">
        <img src={Image} alt="..." className="category-image" />
      </div>
      <div className="category-text-container">
        <h3 className="text-category-title">{title}</h3>
        <button className="button-category" onClick={clickShowDetail}>
          Read More
        </button>
      </div>
    </div>
  );
}

export default Category;

// showDetail={showDetail}
// setShowDetail={setShowDetail}
// setShowDetailText={setShowDetailText}
// const [showDetail, setShowDetail] = useState(false);
// const [showDetailText, setShowDetailText] = useState("");
