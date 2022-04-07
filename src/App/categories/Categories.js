import React, { useState, useEffect, useRef } from "react";
import CategoryA from "../categories/category/Category";
import CategoryB from "../categories/category/CategoryB";
import { Link } from "react-router-dom";
import Hero from "../../assets/images/thirdwoman.png";
import "./Categories.css";
function Categories() {
  const [showDetail, setShowDetail] = useState(false);
  const [showDetailText, setShowDetailText] = useState("");
  const [showDetailTitle, setShowDetailTitle] = useState("");
  const [test, setTest] = useState();
  const [link, setLink] = useState("");
  const closeDetail = e => {
    myContainer.current.style.display = "none";
  };

  const myContainer = useRef(null);
  useEffect(() => {
    setTest(myContainer.current);
  }, []);
  return (
    <div className="categories-container">
      <div className="categories-text">
        <h3 className="text-quote-text">
          <span className="text-color-green"> Nasza oferta </span>
        </h3>
        <span className="text-quote-description">
          Skorzystaj z ponad 200 indywidualnie przygotowanych szkoleń do Twoich
          potrzeb, lub sprawdź ofertę przygotowaną indywidualnie dla Firm.
        </span>
      </div>
      <div className="categories-display-container">
        <div className="categories-display-category-container">
          <Link to="../companies" className="category-containerB">
            <CategoryB
              title="Dla Laboratoriów"
              showDetail={showDetail}
              setShowDetail={setShowDetail}
              setShowDetailText={setShowDetailText}
              setShowDetailTitle={setShowDetailTitle}
              textDescription=" W naszej ofercie znajdziecie Państwo szkolenia „szyte na miarę”, oznacza 
              to opracowanie programu szkolenia w oparciu o Państwa indywidualne wytyczne. "
              test={test}
              link={setLink}
              page="laboratory"
            />
          </Link>
          <Link to="../companies" className="category-containerB">
            <CategoryB
              title="Dla Firm"
              showDetail={showDetail}
              setShowDetail={setShowDetail}
              setShowDetailText={setShowDetailText}
              setShowDetailTitle={setShowDetailTitle}
              textDescription="W naszej ofercie znajdziecie Państwo szkolenia „szyte na miarę”, oznacza 
              to opracowanie programu szkolenia w oparciu o Państwa indywidualne wytyczne. 
          "
              test={test}
              link={setLink}
              page="companies"
            />
          </Link>
          <Link to="../producers" className="category-containerB">
            <CategoryB
              title="Dla producentów"
              showDetail={showDetail}
              setShowDetail={setShowDetail}
              setShowDetailText={setShowDetailText}
              setShowDetailTitle={setShowDetailTitle}
              textDescription="W naszej ofercie znajdziecie Państwo szkolenia „szyte na miarę”, oznacza 
              to opracowanie programu szkolenia w oparciu o Państwa indywidualne wytyczne. 
          "
              test={test}
              link={setLink}
              page="producers"
            />
          </Link>
          <Link to="../laboratory" className="category-containerB">
            <CategoryB
              title="Szkolenia zamknięte"
              showDetail={showDetail}
              setShowDetail={setShowDetail}
              setShowDetailText={setShowDetailText}
              setShowDetailTitle={setShowDetailTitle}
              textDescription="W naszej ofercie znajdziecie Państwo szkolenia „szyte na miarę”, oznacza 
           to opracowanie programu szkolenia w oparciu o Państwa indywidualne wytyczne. 
          "
              test={test}
              link={setLink}
              page="training"
            />
          </Link>
        </div>
      </div>
      <div className="categories-text">
        <h3 className="text-quote-text">
          <span className="text-color-green"> Popularne szkolenia</span>
        </h3>
        <span className="text-quote-description">
          Skorzystaj z ponad 200 indywidualnie przygotowanych szkoleń do Twoich
          potrzeb, lub sprawdź ofertę przygotowaną indywidualnie dla Firm.
        </span>
      </div>
    </div>
  );
}

export default Categories;
