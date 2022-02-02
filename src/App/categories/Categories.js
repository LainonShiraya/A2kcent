import React, { useState, useEffect, useRef } from "react";
import CategoryA from "../categories/category/Category";
import CategoryB from "../categories/category/CategoryB";
import "./Categories.css";
function Categories() {
  const [showDetail, setShowDetail] = useState(false);
  const [showDetailText, setShowDetailText] = useState("");
  const [showDetailTitle, setShowDetailTitle] = useState("");
  const [test, setTest] = useState();
  const closeDetail = e => {
    myContainer.current.style.display = "none";
  };

  const myContainer = useRef(null);
  useEffect(() => {
    setTest(myContainer.current);
  }, []);
  return (
    <div className="categories-container">
      <div className="categories-category-detail" ref={myContainer}>
        <div className="categories-category-detail-info">
          <div className="categories-category-detail-title">
            <div className="categories-category-detail-title-container">
              <h2>{showDetailTitle}</h2>
              <div className="categories-category-detail-exit-button">
                <button onClick={closeDetail}>
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="categories-category-detail-text">
            <h6>{showDetailText}</h6>
          </div>
          <div className="categoried-category-detail-button">
            <button> Więcej </button>
          </div>
        </div>
      </div>
      <div className="categories-text">
        <h3 className="text-quote-text">
          We serve
          <span className="text-color-green"> business and tech leaders </span>
          building software
        </h3>
        <span className="text-quote-description">
          Join 230+ tech leaders who have built software with us. Engage a
          cross-functional team or dedicated experts.
        </span>
      </div>
      <div className="categories-display-container">
        <CategoryA
          title="Dla Studentów "
          showDetail={showDetail}
          setShowDetail={setShowDetail}
          setShowDetailText={setShowDetailText}
          setShowDetailTitle={setShowDetailTitle}
          textDescription="Join 230+ tech leaders who have built software with us. Engage a
          cross-functional team or dedicated experts.
          Join 230+ tech leaders who have built software with us. Engage a
          cross-functional team or dedicated experts.
          Join 230+ tech leaders who have built software with us. Engage a
          cross-functional team or dedicated experts.
          Join 230+ tech leaders who have built software with us. Engage a
          cross-functional team or dedicated experts."
          test={test}
        />
        <CategoryB
          title="Dla Laboratoriów"
          showDetail={showDetail}
          setShowDetail={setShowDetail}
          setShowDetailText={setShowDetailText}
          setShowDetailTitle={setShowDetailTitle}
          textDescription="Join 230+ tech leaders who have built software with us. Engage a
           cross-functional team or dedicated experts.
           Join 230+ tech leaders who have built software with us. Engage a
           cross-functional team or dedicated experts.
           Join 230+ tech leaders who have built software with us. Engage a
           cross-functional team or dedicated experts.
           Join 230+ tech leaders who have built software with us. Engage a
           cross-functional team or dedicated experts."
          test={test}
        />
        <CategoryA
          title="Dla Firm"
          showDetail={showDetail}
          setShowDetail={setShowDetail}
          setShowDetailText={setShowDetailText}
          setShowDetailTitle={setShowDetailTitle}
          textDescription="Join 230+ tech leaders who have built software with us. Engage a
          cross-functional team or dedicated experts.
          Join 230+ tech leaders who have built software with us. Engage a
          cross-functional team or dedicated experts.
          Join 230+ tech leaders who have built software with us. Engage a
          cross-functional team or dedicated experts.
          Join 230+ tech leaders who have built software with us. Engage a
          cross-functional team or dedicated experts."
          test={test}
        />
        <CategoryB
          title="Dla producentów"
          showDetail={showDetail}
          setShowDetail={setShowDetail}
          setShowDetailText={setShowDetailText}
          setShowDetailTitle={setShowDetailTitle}
          textDescription="Join 230+ tech leaders who have built software with us. Engage a
          cross-functional team or dedicated experts.
          Join 230+ tech leaders who have built software with us. Engage a
          cross-functional team or dedicated experts.
          Join 230+ tech leaders who have built software with us. Engage a
          cross-functional team or dedicated experts.
          Join 230+ tech leaders who have built software with us. Engage a
          cross-functional team or dedicated experts."
          test={test}
        />
        <CategoryB
          title="Szkolenia zamknięte"
          showDetail={showDetail}
          setShowDetail={setShowDetail}
          setShowDetailText={setShowDetailText}
          setShowDetailTitle={setShowDetailTitle}
          textDescription="Join 230+ tech leaders who have built software with us. Engage a
          cross-functional team or dedicated experts.
          Join 230+ tech leaders who have built software with us. Engage a
          cross-functional team or dedicated experts.
          Join 230+ tech leaders who have built software with us. Engage a
          cross-functional team or dedicated experts.
          Join 230+ tech leaders who have built software with us. Engage a
          cross-functional team or dedicated experts."
          test={test}
        />
      </div>
      <div className="categories-text">
        <h3 className="text-quote-text">
          We serve
          <span className="text-color-green"> business and tech leaders </span>
          building software
        </h3>
        <span className="text-quote-description">
          Join 230+ tech leaders who have built software with us. Engage a
          cross-functional team or dedicated experts.
        </span>
      </div>
    </div>
  );
}

export default Categories;
