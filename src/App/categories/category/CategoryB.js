import "./CategoryB.css";
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
    <div className="container">
      <div className="category-text-containerB">
        <h3 className="text-category-titleB">{title}</h3>
      </div>
    </div>
  );
}

export default Category;
