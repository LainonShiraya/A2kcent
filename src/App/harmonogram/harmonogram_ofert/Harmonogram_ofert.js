import "./Harmonogram_ofert.css";
import { useParams } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Osoba from "../harmonogram_ofert/osoba/osoba";
import ReCAPTCHA from "react-google-recaptcha";
import PrintComponent from "../harmonogram_print/PrintComponent";
function MainPage() {
  let params = useParams();
  const [osoby, setOsoby] = useState([]);
  const [Imie, setImie] = useState("");
  let [Id, setId] = useState(0);
  const [tax, setTax] = useState(false);

  const [Nazwisko, setNazwisko] = useState("");
  const [Email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [telefon, setTelefon] = useState("");
  const [verified, setverified] = useState(false);

  const [nazwa_firmy, setNazwaFirmy] = useState("");
  const [adres, setAdres] = useState("");
  const [nip_pesel, setNipPesel] = useState("");
  const [osoba_kontakt, setOsobaKontakt] = useState("");
  const [emailFirma, setEmailFirma] = useState("");
  const [telefonFirma, setTelefonFirma] = useState("");

  const ImieRef = useRef(null);
  const NazwiskoRef = useRef(null);
  const EmailRef = useRef(null);
  const TelefonRef = useRef(null);
  const Title = params.title; // z bazy danych
  const price = 500; // z bazy danych
  const promocja = osoby.length; // tutaj dodać wzór na zniżkę zależnie od osób
  // captcha do dorobienia ale trzeba podac mail i pobrac api key googlowski
  useEffect(() => {}, []);
  const dodajOsobe = () => {
    const emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    setEmailError("");
    console.log(telefon);
    if (
      ImieRef.current.value.length > 2 &&
      NazwiskoRef.current.value.length > 2 &&
      EmailRef.current.value.length > 2 &&
      TelefonRef.current.value.length === 9
    ) {
      if (emailRegex.test(Email)) {
        setId(Id + 1);
        setOsoby([...osoby, { Id, Imie, Nazwisko, Email, telefon }]);
        ImieRef.current.value = "";
        NazwiskoRef.current.value = "";
        EmailRef.current.value = "";
        TelefonRef.current.value = "";
        setNazwisko("");
        setImie("");
        setEmail("");
        setTelefon("");
      } else {
        setEmailError("Wprowadzony e-mail jest niepoprawny!");
      }
    } else {
      if (telefon === "") {
        setEmailError("Numer telefonu musi zawierać tylko cyfry!");
      } else if (telefon.length !== 9) {
        setEmailError("Numer telefonu musi wynosić 9 cyfr!");
      } else {
        setEmailError("Pola nie mogą być puste!");
      }
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
          <div className="input-long">
            <h4>Nazwa firmy, instytucji :</h4>
            <input
              type="text"
              name="nazwa_firmy"
              onChange={e => setNazwaFirmy(e.target.value)}
            />
            <h4>Adres:</h4>
            <input
              type="text"
              name="adres_firmy"
              onChange={e => setAdres(e.target.value)}
            />
            <h4>NIP/PESEL :</h4>
            <input
              type="text"
              name="nazwa_firmy"
              onChange={e => setNipPesel(e.target.value)}
            />
            <h4>Osoba kontaktowa w spr. finansowych :</h4>
            <input
              type="text"
              name="nazwa_firmy"
              onChange={e => setOsobaKontakt(e.target.value)}
            />
            <h4>Adres e-mail :</h4>
            <input
              type="text"
              name="nazwa_firmy"
              onChange={e => setEmailFirma(e.target.value)}
            />
            <h4>Telefon :</h4>
            <input
              type="text"
              name="nazwa_firmy"
              onChange={e => setTelefonFirma(e.target.value)}
            />
          </div>
          {/* <div className="input-container-small">
            <div className="input-container">
              <h4>Nazwa firmy, instytucji :</h4>
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
          </div> */}
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
              <h4> Adres E-mail Zgłaszanej osoby :</h4>
              <input
                type="text"
                name="osoba_email"
                ref={EmailRef}
                onKeyUp={e => setEmail(e.target.value)}
              />
            </div>
            <div className="input-container">
              <h4>Nr telefonu zgłaszanej osoby: </h4>
              <input
                type="number"
                name="osoba_telefon"
                className="input_no_arrows"
                ref={TelefonRef}
                onKeyUp={e => {
                  setTelefon(e.target.value);
                }}
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
            telefon={data.telefon}
            setOsoby={setOsoby}
          />
        ))}
      </div>
      <hr className="separator-line" />
      <div className="harmonogram-regulamin">
        <span>
          Oświadczenie w przypadku finansowania ze środków publicznych i
          zwolnieniu z VAT (zwolnienie dotyczy tylko udziału w szkoleniu, nie
          dotyczy opcji dodatkowych tj. noclegi):
        </span>
        <span className="span-border">
          Oświadczamy, że nabyta od Centrum Naukowo-Technicznego A2K CeNT s.c.
          usługa powyższego szkolenia zawodowego lub przekwalifikowania
          zawodowego doskonaląca kwalifikacje zawodowe naszych pracowników jest
          finansowana ze środków publicznych i korzysta ze zwolnienia w myśl
          zapisów art. 5 ust 1 ustawy z dn. 27 sierpnia 2009r. o finansach
          publicznych: - w całości – zwolnienie w oparciu o art. 43 ust. 1 pkt.
          29 lit c) ustawy o podatku od towarów i usług z dn. 11 marca 2004 r. *
          - w co najmniej 70%, ale mniej niż 100% - zwolnienie wynikające z § 13
          ust. 1 pkt. 20 rozporządzenia Ministra Finansów z dn. 4 kwietnia 2011
          r. *
        </span>
        <div className="radio-options">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              onClick={() => {
                setTax(true);
              }}
            />
            <label class="form-check-label" for="inlineRadio1">
              tak
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
              onClick={() => {
                setTax(false);
              }}
            />
            <label class="form-check-label" for="inlineRadio2">
              nie
            </label>
          </div>
        </div>
        <div className="harmonogram-bulletpoints">
          <h6>
            1. Podstawą przyjęcia zgłoszenia na szkolenie jest przesłanie:
          </h6>
          <h6>
            a. Podpisanej przez upoważnioną osobą i opieczętowanej karty
            zgłoszeniowej na adres Centrum Naukowo-Techniczne A2K CeNT s.c. ul.
            Opinogórska 2 lok.69, 04-039 Warszawa
          </h6>
          <h6>
            b. Skanu podpisanej przez upoważnioną osobą i opieczętowanej karty
            zgłoszeniowej na adres a2kcent@a2kcent.pl
          </h6>
          <h6>
            2. Centrum Naukowo-Techniczne A2K CeNT s.c. nie ponosi
            odpowiedzialności w przypadku, gdy karta zgłoszeniowa wysłana Pocztą
            Polską lub innym doręczycielem, nie dotrze do Centrum
            Naukowo-Techniczne A2K CeNT s.c. najpóźniej 5 dni roboczych przed
            planowanym terminem szkolenia. Organizator może zagwarantować
            uczestnictwo w przypadku, gdy będą wolne miejsca.
          </h6>
          <h6>
            3. Centrum Naukowo-Techniczne A2K CeNT s.c. po otrzymaniu karty
            zgłoszeniowej każdorazowo przesyła potwierdzenie przyjęcia
            zgłoszenia. Nie jest jednoznaczne z potwierdzeniem organizacji
            szkolenia.
          </h6>
          <h6>
            <span className="bold">4.</span> 5 dni roboczych prze planowanym
            terminem szkolenia uczestnik szkolenia otrzymuje od Organizatora, na
            podany w karcie zgłoszeniowej adres mailowy, informację dotyczącą
            statusu szkolenia (czy się odbywa czy też nie) oraz w przypadku
            potwierdzenia organizacji szkolenia szczegółowe informacje na jego
            temat – program, godziny i zaproszenie na szkolenie w formie linku.
            <span className="bold">
              {" "}
              Zalecamy korzystanie z laptopów. Jeżeli dane uczestnka nie będą
              się zgadzały ze zgłoszeniem, taka osoba zostanie usunięta w
              trakcie szkolenia.{" "}
            </span>
          </h6>
          <h6>
            <span className="bold">
              5. Tydzień przed terminem szkolenia otrzymają Państwo link do
              próbnego połączenia. Sprawdzimy czy nikt nie ma problemów z
              oprogramowaniem Webex. Zajmie to 5-10 minut. Dopiero po tym teście
              otrzymają Państwo link do szkolenia.
            </span>
          </h6>
          <h6>
            6. W przypadku stwierdzenia przez Państwa braku takiej informacji w
            terminie 4 dni roboczych przed planowanym terminem szkolenia,
            prosimy o sprawdzenie skrzynek mailowych SPAM lub kontakt
            telefoniczny z Organizatorem.
          </h6>
          <h6>
            7. Odwołanie uczestnictwa odbywa się tylko i wyłącznie w formie
            pisemnej. Musi wpłynąć do organizatora najpóźniej 7 dni roboczych
            przed planowanym terminem szkolenia. To tym terminie zgłaszający
            poniesie pełne koszty uczestnictwa.
          </h6>
          <h6>
            7. Zastrzegamy sobie prawo do zmiany terminu i wykładowcy z powodów
            losowych. O takiej sytuacji będą Państwo informowani drogą mailową
            i/lub telefoniczną.
          </h6>
          <h6>
            8. Podana cena szkolenia (netto) obejmuje: udział w szkoleniu,
            materiały szkoleniowe i zaświadczenie o uczestnictwie w szkoleniu
          </h6>
          <h6>
            9. Wysłanie karty zgłoszeniowej jest akceptacją powyższych warunków
            współpracy.
          </h6>
          <h5>
            W związku z wejściem w życie Rozporządzenia Parlamentu Europejskiego
            i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony
            osób fizycznych w związku z przetwarzaniem danych osobowych i w
            sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy
            95/46/WE (ogólne rozporządzenie o ochronie danych osobowych)
            informujemy, że:
          </h5>
          <h6>
            1. Administratorem Państwa danych osobowych jest{" "}
            <span className="bold">
              {" "}
              Centrum Naukowo-Techniczne A2K CeNT s.c.{" "}
            </span>
          </h6>
          <h6>
            2. Państwa dane osobowe będą przetwarzane w celach marketingowych -
            związanych z informacją o nadchodzących szkoleniach, przez{" "}
            <span className="bold">
              {" "}
              Centrum Naukowo-Techniczne A2K CeNT s.c.{" "}
            </span>
          </h6>
          <h6>
            3. Państwa dane osobowe będą przechowywane przez{" "}
            <span className="bold">
              {" "}
              Centrum Naukowo-Techniczne A2K CeNT s.c.{" "}
            </span>{" "}
            do czasu prośby Państwa o ich usunięcie.
          </h6>
          <h6>
            4. Państwa dane osobowe nie będą przekazywane przez{" "}
            <span className="bold">
              {" "}
              Centrum Naukowo-Techniczne A2K CeNT s.c.{" "}
            </span>{" "}
            żadnemu innemu podmiotowi ani operatorowi telekomunikacyjnemu.
          </h6>
          <h6>
            5. Państwa dane osobowe nie będą wykorzystywane przez{" "}
            <span className="bold">
              {" "}
              Centrum Naukowo-Techniczne A2K CeNT s.c.{" "}
            </span>{" "}
            do profilowania.
          </h6>
          <h6>
            {" "}
            6. Państwa dane osobowe nie będą przekazywane przez{" "}
            <span className="bold">
              {" "}
              Centrum Naukowo-Techniczne A2K CeNT s.c.{" "}
            </span>{" "}
            poza obszar Unii Europejskiej.
          </h6>
          <h6>
            7. Państwa dane osobowe będą pozyskane przez{" "}
            <span className="bold">
              {" "}
              Centrum Naukowo-Techniczne A2K CeNT s.c.{" "}
            </span>
            , bezpośrednio ode Państwa lub od podmiotu, który Państwa zatrudnia.
          </h6>
          <h6>
            8. Mają Państwo prawo do dostępu, zmiany lub żądania usunięcia
            treści swoich danych osobowych.
          </h6>
          <h6>
            9. Niepodanie danych osobowych uniemożliwi przesyłanie informacji
            szkoleniowych i marketingowych.
          </h6>
          <h6>
            {" "}
            10.W przypadku naruszenia powyższych klauzul przysługuje Państwu
            prawo do wniesienia skargi do PUODO.{" "}
          </h6>
        </div>
      </div>
      <hr className="separator-line" />

      <div className="price-calculator-container">
        <h2 className="text-color-green">{price * promocja} PLN</h2>
      </div>
      <div className="confirm-button-container">
        <div className="captcha">
          {" "}
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={value => {
              console.log("Captcha value: " + value);
              setverified(!verified);
            }}
          />
        </div>
        {verified && (
          <button className="button-send button-newsletter">Potwierdz</button>
        )}
        {!verified && (
          <button
            className="button-send button-newsletter button-disabled"
            disabled
          >
            Potwierdz
          </button>
        )}
        <PrintComponent
          nazwa_szkolenia={Title}
          nazwa_firmy={nazwa_firmy}
          adres={adres}
          nip_pesel={nip_pesel}
          osoba_kontakt={osoba_kontakt}
          email={emailFirma}
          telefon={telefonFirma}
          tax={tax}
          osoby={osoby}
        />
      </div>
    </div>
  );
}

export default MainPage;
