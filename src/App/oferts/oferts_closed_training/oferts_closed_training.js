import React from "react";
import "../oferts_closed_training/oferts_closed_training.css";
import { Link } from "react-router-dom";

const Oferts_training = () => {
  return (
    <div className="ofertsTraining-container">
      <div className="ofertsTraining-title-container">
        <h1 className="header-title-training">Szkolenia</h1>
        <h2 className="sub-title-training">Dopasowane do Waszych potrzeb</h2>
      </div>
      <div className="ofertsTraining-text-container">
        <h2 className="text-color-green">"Szyte na miarę"</h2>
        <span>
          W naszej ofercie znajdziecie Państwo szkolenia „szyte na miarę”,
          oznacza to opracowanie programu szkolenia w oparciu o Państwa
          indywidualne wytyczne. Szkolenie odbywa się w wyznaczonym i w
          zaproponowanym przez Państwa czasie. Tego typu forma pozwala na
          jednorazowe przeszkolenie większej liczby pracowników z wybranego
          zakresu tematycznego oszczędzając czas i pieniądze. Do tej pory nasza
          firma zrealizowała ponad 500 szkoleń zamkniętych o przeróżnej tematyce
          z zakresu badań laboratoryjnych na terenie całej Polski. W celu
          ustalenia szczegółów prosimy o{" "}
          <Link to="../Napisz_do_nas" className="text-bolded text-color-green">
            {" "}
            wysłanie do nas zapytania{" "}
          </Link>{" "}
          , a my postaramy się przedstawić Państwu atrakcyjną ofertę.
        </span>
        {/* <span>
          <span className="text-bolded text-color-green">
            {" "}
            Szkolenia, konsultacje i wizje lokalne w gospodarowaniu odpadami{" "}
          </span>{" "}
          – współpracujemy z praktykiem z wieloletnim doświadczeniem i zarówno
          biegłym sądowym <br /> <br />
          <span className="text-bolded text-color-green">
            {" "}
            Szkolenia i konsultacje w zakresie bezpieczeństwa pracy w
            laboratorium{" "}
          </span>{" "}
          – po wcześniejszych ustaleniach, nasz ekspert może przyjechać i pomóc
          w prawidłowym i bezpiecznym oznakowaniu miejsc pracy.
          <br /> <br />{" "}
          <span className="text-bolded text-color-green">
            {" "}
            Wdrożenia i konsultacje{" "}
          </span>{" "}
          konsultacje – możemy pomóc Państwu przy wdrożeniu systemów zarządzania
          zgodnych z ISO 17025, ISO 9001, ISO 45001, ISO 14001, a także udzielić
          konsultacji przy napisaniu lub aktualizacji dokumentacji. Zapewniamy
          poufność przekazanych informacji. <br /> <br />{" "}
          <span className="text-bolded text-color-green">
            Sprawdzanie poprawności etykiet żywnościowych{" "}
          </span>{" "}
          - na Państwa życzenie możemy sprawdzić zgodności opisu na opakowaniach
          dla środków spożywczych i suplementów diet – dokonamy oceny opisu i
          wyglądu etykiety oraz wprowadzimy ewentualne poprawki. Pomożemy w
          opracowaniu prawidłowych etykiet dla środków spożywczych - w oparciu o
          aktualne normy i wymagania UE opracujemy etykiety dla środków
          spożywczych i suplementów diety oraz przygotujemy poprawne tabele
          wartości odżywczych. Pomożemy w przygotowaniu dokumentacji do
          wprowadzenia produktu na rynek. Współpracujący z nami ekspert od wielu
          lat zajmuje się prawem żywnościowym i na bieżąco monitoruje
          dynamicznie zmieniające się przepisy w tym zakresie.
          <br /> <br />{" "}
          <span className="text-bolded text-color-green">
            Konserwatoriach, Szkoleniach lub Audytach{" "}
          </span>
          , na które państwo mogą zapisać się na naszej stronie{" "}
        </span> */}
      </div>
    </div>
  );
};

export default Oferts_training;
