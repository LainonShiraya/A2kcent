import React, { useState, useEffect, useRef } from "react";
import CategoryA from "../categories/category/Category";
import CategoryB from "../categories/category/CategoryB";
import { Link } from "react-router-dom";
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
            <Link to={{ pathname: link.page }}>
              <button>Więcej </button>
            </Link>
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
          link={setLink}
          page="students"
        />
        <CategoryB
          title="Dla Laboratoriów"
          showDetail={showDetail}
          setShowDetail={setShowDetail}
          setShowDetailText={setShowDetailText}
          setShowDetailTitle={setShowDetailTitle}
          textDescription="Wymagania akredytacyjne wymagają od Ciebie doskonalenia kompetencji? Chcesz być na bieżąco z nowinkami technicznymi wkraczającymi
           do Twojego laboratorium? Masz nowych i młodych pracowników i chcesz ich przeszkolić? Skorzystaj z naszej oferty.
            Nasz doświadczony zespół pomoże pracownikom laboratoriów badawczych doskonalić swoje kompetencje."
          test={test}
          link={setLink}
          page="laboratory"
        />
        <CategoryA
          title="Dla Firm"
          showDetail={showDetail}
          setShowDetail={setShowDetail}
          setShowDetailText={setShowDetailText}
          setShowDetailTitle={setShowDetailTitle}
          textDescription="Masz problem do rozwiązania? Chcesz ulepszyć instrukcje i procedury, stworzyć nowe materiały i narzędzia,
           lepsze środowisko pracy albo konkretny program szkoleniowy? -  skontaktuj się z nami, a zaczniemy pracować razem, aby osiągnąć Twój cel. 
          Wszystkie aspekty szkoleń, konsultacji czy wizji lokalnych są ustalane indywidualnie z każdym Klientem. Dla Kadry Zarządzającej oraz pracowników Firm,
           Instytutów czy Zakładów Przemysłowych
          "
          test={test}
          link={setLink}
          page="companies"
        />
        <CategoryB
          title="Dla producentów"
          showDetail={showDetail}
          setShowDetail={setShowDetail}
          setShowDetailText={setShowDetailText}
          setShowDetailTitle={setShowDetailTitle}
          textDescription="Masz problem w gospodarowaniu odpadami? Nie wiesz czy Twoje środowisko pracy jest bezpieczne?
           A może chcesz udoskonalić techniki badawcze?  Skontaktuj się z nami. Nasi eksperci rozwiążą wszystkie Twoje problemy.
          Szczegółowy zakres szkoleń, konsultacji czy wizji lokalnych jest ustalany indywidualnie z każdym Klientem.
           Dla Kadry Zarządzającej oraz pracowników Firm, Instytutów czy Zakładów Przemysłowych 
          "
          test={test}
          link={setLink}
          page="producers"
        />
        <CategoryB
          title="Szkolenia zamknięte"
          showDetail={showDetail}
          setShowDetail={setShowDetail}
          setShowDetailText={setShowDetailText}
          setShowDetailTitle={setShowDetailTitle}
          textDescription="W naszej ofercie znajdziecie Państwo szkolenia „szyte na miarę”, oznacza 
           to opracowanie programu szkolenia w oparciu o Państwa indywidualne wytyczne. Szkolenie odbywa się w wyznaczonym i w zaproponowanym przez Państwa czasie.
            Tego typu forma pozwala na jednorazowe przeszkolenie większej liczby pracowników z wybranego zakresu tematycznego oszczędzając czas i pieniądze.
             Do tej pory nasza firma zrealizowała ponad 500 szkoleń zamkniętych o przeróżnej tematyce z zakresu badań laboratoryjnych na terenie całej Polski.  
          W celu ustalenia szczegółów prosimy o wysłanie do nas zapytania, a my postaramy się przedstawić Państwu atrakcyjną ofertę. 
          "
          test={test}
          link={setLink}
          page="training"
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
