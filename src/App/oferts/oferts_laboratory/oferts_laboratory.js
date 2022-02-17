import React from "react";
import "./oferts_laboratory.css";
const Oferts_laboratory = () => {
  return (
    <div className="ofertsLaboratory-container">
      <div className="ofertsLaboratory-title-container">
        <h1 className="header-title-laboratory">Laboratoria</h1>
        <h2 className="sub-title-laboratory">Dla pracowników laboratoriów</h2>
      </div>
      <div className="ofertsLaboratory-text-container">
        {/* <span>
          Wymagania akredytacyjne wymagają od Ciebie doskonalenia kompetencji?
          <br />
          Chcesz być na bieżąco z nowinkami technicznymi wkraczającymi do
          Twojego laboratorium? <br /> Masz nowych i młodych pracowników i
          chcesz ich przeszkolić? <br />
        </span> */}
        <h2 className="text-color-green">Podpowiadamy</h2>
        <span>
          <span className="text-bolded text-color-green">
            {" "}
            Szkolenia otwarte{" "}
          </span>{" "}
          – skierowane są do pracowników laboratoriów, chcących poszerzyć swoją
          wiedzę. Odbiorcą tych szkoleń może być każdy zainteresowany tematyką
          pracownik laboratorium, a proponowany zakres tematyczny opracowywany
          jest na podstawie Państwa sugestii przesyłanych w ankietach, a także
          przedstawianych podczas wspólnych rozmów i dyskusji <br /> <br />
          <span className="text-bolded text-color-green">
            {" "}
            Szkolenia zamknięte{" "}
          </span>{" "}
          – w naszej ofercie znajdziecie Państwo szkolenia „szyte na miarę”, to
          oznacza opracowanie programu szkolenia w oparciu o Państwa
          indywidualne wytyczne. Szkolenie odbywa się w wyznaczonym i w
          zaproponowanym przez Państwa czasie. Tego typu forma pozwala na
          jednorazowe przeszkolenie większej liczby pracowników z wybranego
          zakresu tematycznego oszczędzając czas i pieniądze. <br /> <br />{" "}
          <span className="text-bolded text-color-green">
            {" "}
            Konwersatoria{" "}
          </span>{" "}
          – to cyklicznie raz w roku organizowane spotkania z osobami o
          podobnych doświadczeniach i zainteresowaniach. To okazja do wymiany
          doświadczeń, poznania różnych rozwiązań tych samych problemów,
          nawiązania nowych kontaktów. Wykłady prowadzone przez praktyków w
          danej dziedzinie dają możliwość pogłębienia wiedzy i udziału w
          fachowych dyskusjach. <br /> <br />{" "}
          <span className="text-bolded text-color-green">
            Audyty wewnętrzne{" "}
          </span>{" "}
          – współpracujący z nami audytorzy sprawdzą Państwa dokumentację i
          przeprowadzą w pełni kompetentny audyt systemowy i/lub techniczny w
          przyjaznej i bezstresowej atmosferze. Ocena może być przeprowadzona u
          Państwa na miejscu lub też on-line. <br /> <br />{" "}
          <span className="text-bolded text-color-green">
            {" "}
            Wdrożenia i konsultacje{" "}
          </span>{" "}
          – oferujemy wdrożenia różnych systemów zarządzania (ISO 17025, ISO
          9001, ISO 15189, ISO 45001, ISO 14001), konsultacje i pomoc przy
          napisaniu lub aktualizacji dokumentacji. Zapewniamy poufność
          przesłanych informacji. <br /> <br />{" "}
          <span className="text-bolded text-color-green">
            {" "}
            On-line i stacjonarnie{" "}
          </span>{" "}
          – zarówno szkolenia, jak i audyty prowadzimy w wersji stacjonarnej i
          wersji on-line przy użyciu platformy Webex. Wymagania dotyczące
          udziału w szkoleniu on-line znajdą państwo w najczęściej zadawanych
          pytaniach na dole strony. Najpóźniej dzień przed szkoleniem otrzymają
          Państwo, droga elektroniczną, materiały w wersji pdf do wydrukowania.
          Zaświadczenia wysyłamy w wersji oryginalnej pocztą tradycyjną. <br />{" "}
          <br />{" "}
          <span className="text-bolded text-color-green"> Webinaria </span> –
          krótkie wykłady on-line najczęściej dotyczące jednego, konkretnego
          zagadnienia.
        </span>
      </div>
    </div>
  );
};

export default Oferts_laboratory;
