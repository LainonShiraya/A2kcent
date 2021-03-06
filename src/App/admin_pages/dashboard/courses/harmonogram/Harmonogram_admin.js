import Ofert from "../harmonogram/Ofert/Ofert_admin";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Harmonogram_admin.css";
function Promotions() {
  const [clicked, setClicked] = useState([false, ""]);
  const [oferts, setOferts] = useState([
    {
      id: "1fdhfdw321",
      title: "Analiza i ocena wyników w obszarze badań chemicznych ",
      type: "Szkolenie",
      date: "2022-01-02",
      price: 1900,
      place: "Warszawa",
    },
    {
      id: "2fsdafdsa",
      title: "Analiza i ocena wyników w obszarze badań chemicznych ",
      type: "Szkolenie",
      date: "2022-01-02",
      price: 1900,
      place: "online",
    },
    {
      id: "3fdsafdsa",
      title: "ZZZAnaliza i ocena wyników w obszarze badań chemicznych ",
      type: "Szkolenie",
      date: "2022-01-02",
      price: 1900,
      place: "online",
    },
    {
      id: "4hgfdhfgd",
      title: "Testowanie produktów ",
      type: "Seminarium",
      date: "2022-01-02",
      price: 1700,
      place: "online",
    },
  ]);

  const sort = e => {
    const sorted_array = [...oferts];
    switch (e.target.value) {
      case "title":
        if (clicked[0] && clicked[1].localeCompare(e.target.value) === 0) {
          sorted_array.sort((a, b) => b.title.localeCompare(a.title));
          setClicked([false, ""]);
        } else {
          sorted_array.sort((a, b) => a.title.localeCompare(b.title));
          setClicked([true, e.target.value]);
        }
        break;
      case "type":
        if (clicked[0] && clicked[1].localeCompare(e.target.value) === 0) {
          sorted_array.sort((a, b) => a.type.localeCompare(b.type));
          setClicked([false, ""]);
        } else {
          sorted_array.sort((a, b) => b.type.localeCompare(a.type));
          setClicked([true, e.target.value]);
        }
        break;
      case "date":
        if (clicked[0] && clicked[1].localeCompare(e.target.value) === 0) {
          sorted_array.sort((a, b) => a.date - b.date);
          setClicked([false, ""]);
        } else {
          sorted_array.sort((a, b) => b.date - a.date);
          setClicked([true, e.target.value]);
        }
        break;
      case "price":
        if (clicked[0] && clicked[1].localeCompare(e.target.value) === 0) {
          sorted_array.sort((a, b) => a.price - b.price);
          setClicked([false, ""]);
        } else {
          sorted_array.sort((a, b) => b.price - a.price);
          setClicked([true, e.target.value]);
        }
        break;
      default:
        console.log("Błąd sortowania");
    }
    setOferts(sorted_array);
  };

  const ofertsList = useRef(null);
  const noOferts = useRef(null);
  const filterOfferts = e => {
    const text = e.target.value;
    const ofertNodes = ofertsList.current.childNodes;
    let testValue = 0;
    for (const ofert of ofertNodes) {
      if (!ofert.textContent.toUpperCase().includes(text.toUpperCase())) {
        ofert.classList.add("hide-element");
        testValue = testValue + 1;
        console.log(testValue);
      } else {
        console.log("ofert: ");
        console.log(ofert.classList);
        console.log(ofert.classList);
        ofert.classList.remove("hide-element");
        noOferts.current.style.display = "none";
      }
    }
    console.log(testValue);
    console.log(ofertNodes.length);
    if (testValue === ofertNodes.length) {
      noOferts.current.style.display = "block";
    }
  };
  return (
    <div className="harmonogram-container">
      <div className="harmonogram-upper-container">
        <div className="harmonogram-title-container">
          <h3 className="text-title-text">
            Szkolenia organizowane przez Naszą firmę
          </h3>
        </div>
        <div className="harmonogram-search-container">
          <input
            type="text"
            placeholder="Wyszukaj szkolenia..."
            onKeyUp={filterOfferts}
          ></input>
        </div>
      </div>
      <div className="harmonogram-bottom-container">
        <div className="harmonogram-sorts-container harmonogram-sorts-container-admin">
          <div className="harmonogram-sorting harmonogram-sorting-admin">
            <Link to={`../admin/dashboard/courses/add`}>
              <button className="button-oferts button-add">Dodaj</button>
            </Link>
            Sortuj po:
            <button onClick={sort} value="title">
              Nazwa
            </button>
            <button onClick={sort} value="type">
              Kategoria
            </button>
            <button onClick={sort} value="date">
              Data
            </button>
            <button onClick={sort} value="price">
              Cena
            </button>
          </div>
          <div className="harmonogram-current-courses">
            <h4>Obecnie odbywa się 39 szkoleń</h4>
          </div>
        </div>
        <div className="harmonogram-no-offerts-container" ref={noOferts}>
          <div className="harmonogram-communicate-container">
            <h5>
              Przepraszamy, nie udało się znaleźć szukanej przez Państwa oferty
            </h5>
          </div>
        </div>
        <div className="harmonogram-oferts-container" ref={ofertsList}>
          {oferts.map(data => (
            <Ofert
              id={data.id}
              title={data.title}
              type={data.type}
              date={data.date}
              price={data.price}
              place={data.place}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Promotions;
