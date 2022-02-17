import "./Harmonogram.css";
import Ofert from "../ofertsMain/Ofert/Ofert";
import { useRef, useState } from "react";

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
  const filterOfferts = e => {
    console.log(e.target.value);
    const text = e.target.value;
    const ofertNodes = ofertsList.current.childNodes;
    for (const ofert of ofertNodes) {
      console.log(ofert.textContent.toUpperCase());
      if (!ofert.textContent.toUpperCase().includes(text.toUpperCase())) {
        ofert.classList.add("hide-element");
      } else {
        console.log("ofert: ");
        console.log(ofert.classList);
        console.log(ofert.classList);
        ofert.classList.remove("hide-element");
      }
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
        <div className="harmonogram-sorts-container">
          <div className="harmonogram-sorting">
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
