import React from "react";
import "../oferts_producers/oferts_producers.css";
const Oferts_producers = () => {
  return (
    <div className="ofertsProducers-container">
      <div className="ofertsProducers-title-container">
        <h1 className="header-title-producers">Producenci</h1>
        <h2 className="sub-title-producers">
          Dla Kadry Zarządzającej oraz pracowników Firm, Instytutów czy Zakładów
          Przemysłowych
        </h2>
      </div>
      <div className="ofertsProducers-text-container">
        {/* <span>
          Masz problem do rozwiązania? Chcesz ulepszyć instrukcje i procedury,
          stworzyć nowe materiały i narzędzia, lepsze środowisko pracy albo
          konkretny program szkoleniowy? - skontaktuj się z nami, a zaczniemy
          pracować razem, aby osiągnąć Twój cel. Wszystkie aspekty szkoleń,
          konsultacji czy wizji lokalnych są ustalane indywidualnie z każdym
          Klientem. Dla Kadry Zarządzającej oraz pracowników Firm, Instytutów
          czy Zakładów Przemysłowych oferujemy:
        </span> */}
        <h2 className="text-color-green">Podpowiadamy</h2>
        <span>
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
        </span>
      </div>
    </div>
  );
};

export default Oferts_producers;
