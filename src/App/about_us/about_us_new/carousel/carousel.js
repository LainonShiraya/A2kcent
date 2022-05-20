import React from "react";
import "./carousel.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const carousel = () => {
  return (
    <Carousel
      showThumbs={false}
      stopOnHover={true}
      infiniteLoop={true}
      autoPlay={true}
    >
      <div>
        <span className="carousel-text">
          {" "}
          „(…) Z pełną odpowiedzialnością i wielką przyjemnością polecamy
          Centrum Naukowo-Techniczne A2KCENT s.c. jako kompetentnego Partnera w
          zakresie organizacji szkoleń, służących podnoszeniu kwalifikacji
          pracowników.”
          <p> - ( Instytut Metali Nieżelaznych )</p>
        </span>
      </div>
      <div>
        <span className="carousel-text">
          {" "}
          „(…) Z przyjemnością polecamy Centrum Naukowo – Techniczne A2K CeNT
          jako kompetentnego organizatora szkoleń.”
          <p> - ( WSSE w Poznaniu )</p>
        </span>
      </div>
      <div>
        <span className="carousel-text">
          „(…)W imieniu swoim i uczestników szkolenia składam serdeczne
          podziękowania Pani trener i firmie A2KCeNT za profesjonalne i rzetelne
          przygotowanie szkolenia zamkniętego, które spełniło nasze
          oczekiwania.”
          <p>- ( Niezależne Laboratorium Badawcze Stanlab Sp. z o.o. )</p>
        </span>
      </div>
      <div>
        <span className="carousel-text">
          „Dzień dobry, na szczególne słowa uznania zasługuje prowadzący
          szkolenie Pan Grzegorz Jenczała za sposób w jaki prowadził szkolenie,
          przekaz informacji, przykłady, wyjaśnienia.”
          <p>- ( Osoba prywatna )</p>
        </span>
      </div>
    </Carousel>
  );
};

export default carousel;
