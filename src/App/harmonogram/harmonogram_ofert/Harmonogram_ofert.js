import "./Harmonogram_ofert.css";
import { useParams } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Osoba from "../harmonogram_ofert/osoba/osoba";

function MainPage() {
  let params = useParams();

  const [osoby, setOsoby] = useState([]);
  const [Imie, setImie] = useState("");
  let [Id, setId] = useState(0);
  const [Nazwisko, setNazwisko] = useState("");
  const [Email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const ImieRef = useRef(null);
  const NazwiskoRef = useRef(null);
  const EmailRef = useRef(null);
  const Title = params.title; // z bazy danych
  const price = 500; // z bazy danych
  const promocja = osoby.length; // tutaj dodać wzór na zniżkę zależnie od osób
  // captcha do dorobienia ale trzeba podac mail i pobrac api key googlowski
  useEffect(() => {}, []);
  const dodajOsobe = () => {
    const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    setEmailError("");
    if (
      ImieRef.current.value.length > 2 &&
      NazwiskoRef.current.value.length > 2 &&
      EmailRef.current.value.length > 2
    ) {
      if (emailRegex.test(Email)) {
        setId(Id + 1);
        setOsoby([...osoby, { Id, Imie, Nazwisko, Email }]);
        ImieRef.current.value = "";
        NazwiskoRef.current.value = "";
        EmailRef.current.value = "";
        setNazwisko("");
        setImie("");
        setEmail("");
      } else {
        setEmailError("Wprowadzony e-mail jest niepoprawny!");
      }
    } else {
      setEmailError("Pola nie mogą być puste!");
    }
  };

  return (
    <div className="harmonogram-ofert-container">
      <div className="harmonogram-ofert-title-container">
        <h1>Zapisz się na Szkolenie </h1>
        <h2>{Title}</h2>
      </div>
      <div className="harmonogram-ofert-osoba-title-container">
        <h2>Dane do faktury :</h2>
        <h2 className="person-data-big-res">Dane Zgłaszanej Osoby :</h2>
      </div>
      <div className="harmonogram-ofert-upper-container">
        <div className="harmonogram-ofert-company-inputs-container">
          <div className="input-container-small">
            <div className="input-container">
              <h4>Nazwa firmy, instytucji :</h4>
              <input type="text" name="nazwa_firmy" />
              <h4>Numer Klienta rabatowego :</h4>
              <input type="text" name="nazwa_firmy" />
              <h4>NIP/PESEL :</h4>
              <input type="text" name="nazwa_firmy" />
            </div>
            <div className="input-container">
              <h4>Adres e-mail :</h4>
              <input type="text" name="nazwa_firmy" />
              <h4>Telefon :</h4>
              <input type="text" name="nazwa_firmy" />
              <h4>Osoba kontaktowa w spr. finansowych :</h4>
              <input type="text" name="nazwa_firmy" />
            </div>
          </div>
          <div className="input-long">
            <h4>Adres:</h4>
            <input type="text" name="nazwa_firmy" />
          </div>
        </div>
        <div className="input-person-title-container">
          <h2 className="person-data-small-res">Dane Zgłaszanej Osoby :</h2>
        </div>
        <div className="harmongoram-ofert-company-inputs-osoba">
          <div className="harmonogram-ofert-company-inputs-container-person">
            <div className="input-container">
              <h4>Imię :</h4>
              <input
                type="text"
                name="imie_nazwisko_osoba"
                ref={ImieRef}
                onKeyUp={e => setImie(e.target.value)}
              />
              <h4>Nazwisko :</h4>
              <input
                type="text"
                name="imie_nazwisko_osoba"
                ref={NazwiskoRef}
                onKeyUp={e => setNazwisko(e.target.value)}
              />
            </div>
            <div className="input-container">
              <h4>Zgłaszana osoba E-mail :</h4>
              <input
                type="text"
                name="osoba_email"
                ref={EmailRef}
                onKeyUp={e => setEmail(e.target.value)}
              />
            </div>
          </div>
          {emailError}
          <div className="harmonogram-button-container">
            <button className="button-harmonogram" onClick={dodajOsobe}>
              Dodaj Osobę
            </button>
          </div>
        </div>
      </div>
      <div className="harmonogram-osoba-container">
        {osoby.map(data => (
          <Osoba
            Id={data.Id}
            Imie={data.Imie}
            Nazwisko={data.Nazwisko}
            Email={data.Email}
            osoby={osoby}
            setOsoby={setOsoby}
          />
        ))}
      </div>
      <hr className="separator-line" />
      <div className="price-calculator-container">
        <h2 className="text-color-green">{price * promocja} PLN</h2>
      </div>
      <div className="confirm-button-container">
        <button className="text-title-button-green">Potwierdz</button>
      </div>
    </div>
  );
}

export default MainPage;
