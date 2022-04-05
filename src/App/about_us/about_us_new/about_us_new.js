import React, { useState } from "react";
import "./about_us_new.css";
import Hero from "../../../assets/images/hero_real_background.jpg";
import Hero2 from "../../../assets/images/hero2_real_background.jpg";
import Intertek from "../../../assets/images/Intertek.jpg";
import Mekovita from "../../../assets/images/mekovita.png";
import Arcelormittal from "../../../assets/images/arcelormittal.jpg";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import TrackVisibility from "react-on-screen";

const About_us_new = () => {
  return (
    <div className="aboutUsNew-container">
      <div className="aboutUsNew-header-container">
        <div className="aboutUsNew-header-text-container">
          <div className="aboutUsNew-header-text">
            <h1 className="text-color-green aboutUsNew-header-text-title">
              Nasza Firma
            </h1>
            <h4 className="aboutUsNew-header-text-subtitle">
              szkolimy i organizujemy
            </h4>
            <span>
              Od ponad 15 lat wychodzimy naprzeciw Państwa oczekiwaniom
              organizując szkolenia, warsztaty, konwersatoria i audity dla
              laboratoriów badawczych. Stale rozszerzamy zakres tematyczny
              naszych szkoleń, a także grono współpracujących z nami
              specjalistów. Chcemy zapewnić Państwu możliwość skorzystania z
              profesjonalnych, rzetelnych i fachowych szkoleń, ponieważ wiemy,
              jak we współczesnym świecie są ważne wysokie kompetencje, wiedza i
              umiejętności pracowników.
            </span>
          </div>
        </div>
        <div className="aboutUsNew-header-image-container">
          <div className="aboutUsNew-header-image"></div>
        </div>
      </div>
      <div className="aboutUsNew-statistics-detail">
        <div className="aboutUsNew-statistics-text-container">
          <h1 className=" text-posts-title-text">Sukcesy firmy</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            consectetur, est sed posuere vehicula, sem elit sollicitudin ipsum,
            sed condimentum odio mi eget dolor. Duis sit amet convallis est.
            Nullam tincidunt blandit velit, vel interdum ligula malesuada sit
            sed condimentum odio mi eget dolor. Duis sit amet convallis est.
            Nullam tincidunt blandit velit, vel interdum ligula malesuada sit
          </span>
        </div>
        <div className="aboutUsNew-statistics-container">
          <div className="aboutUsNew-statistic">
            <i class="fas fa-chalkboard-teacher fa-4x"></i>
            <h3>Szkoleń</h3>
            <h1>
              <TrackVisibility once>
                {({ isVisible }) =>
                  isVisible ? (
                    <CountUp start={0} end={7300} duration={3} />
                  ) : (
                    7300
                  )
                }
              </TrackVisibility>
            </h1>
          </div>
          <div className="aboutUsNew-statistic">
            <i class="fas fa-users fa-4x"></i>
            <h3>Konsultacji</h3>
            <h1>
              <TrackVisibility once>
                {({ isVisible }) =>
                  isVisible ? <CountUp start={0} end={500} duration={3} /> : 500
                }
              </TrackVisibility>
            </h1>
          </div>
          <div className="aboutUsNew-statistic">
            <i class="fas fa-building fa-4x"></i>
            <h3>Firm</h3>
            <h1>
              <TrackVisibility once>
                {({ isVisible }) =>
                  isVisible ? (
                    <CountUp start={0} end={3200} duration={3} />
                  ) : (
                    3200
                  )
                }
              </TrackVisibility>
            </h1>
          </div>
          <div className="aboutUsNew-statistic">
            <i class="fas fa-book-open fa-4x"></i>
            <h3>Audytów</h3>
            <h1>
              <TrackVisibility once>
                {({ isVisible }) =>
                  isVisible ? (
                    <CountUp start={0} end={1500} duration={3} />
                  ) : (
                    1500
                  )
                }
              </TrackVisibility>
            </h1>
          </div>
        </div>
      </div>
      <div className="aboutUsNew-lecturers-container">
        <div className="aboutUsNew-lecturers-image-container">
          <img src={Hero} className="aboutUsNew-lecturer-image" alt="Hero" />
        </div>
        <div className="aboutUsNew-lecturers-text-container">
          {" "}
          <h1 className="text-posts-title-text">John Doe</h1>{" "}
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            consectetur, est sed posuere vehicula, sem elit sollicitudin ipsum,
            sed condimentum odio mi eget dolor. Duis sit amet convallis est.
            Nullam tincidunt blandit velit, vel interdum ligula malesuada sit
            amet. Suspendisse potenti. In hac habitasse platea dictumst. Proin
            rhoncus justo eget erat ornare, vel interdum ligula egestas. Integer
            porttitor, purus sed eleifend varius, dui dui sollicitudin mauris,
            ac commodo neque enim in felis. Nam tincidunt diam vitae vulputate
            feugiat. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Integer eu tortor semper, dictum
            ligula at, finibus lacus. Nulla congue commodo rhoncus. Vestibulum
            felis quam, tincidunt vitae magna nec, bibendum tincidunt libero.
          </span>
        </div>
      </div>
      <div className="aboutUsNew-lecturers-container flex-reverse">
        <div className="aboutUsNew-lecturers-text-container">
          {" "}
          <h1 className="text-posts-title-text">John Doe</h1>{" "}
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            consectetur, est sed posuere vehicula, sem elit sollicitudin ipsum,
            sed condimentum odio mi eget dolor. Duis sit amet convallis est.
            Nullam tincidunt blandit velit, vel interdum ligula malesuada sit
            amet. Suspendisse potenti. In hac habitasse platea dictumst. Proin
            rhoncus justo eget erat ornare, vel interdum ligula egestas. Integer
            porttitor, purus sed eleifend varius, dui dui sollicitudin mauris,
            ac commodo neque enim in felis. Nam tincidunt diam vitae vulputate
            feugiat. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Integer eu tortor semper, dictum
            ligula at, finibus lacus. Nulla congue commodo rhoncus. Vestibulum
            felis quam, tincidunt vitae magna nec, bibendum tincidunt libero.
          </span>
        </div>
        <div className="aboutUsNew-lecturers-image-container">
          <img src={Hero2} className="aboutUsNew-lecturer-image" alt="Hero2" />
        </div>
      </div>
      <div className="aboutUsNew-companies-container">
        <div className="aboutUsNew-companies-text-container">
          <h1>Nasi Klienci</h1>
          <span>
            od momentu powstania mieliśmy przyjemność pracować z
            przedstawicielami rynku
          </span>
        </div>
        <div className="aboutUsNew-companies-images-container">
          <img src={Intertek} alt="company" />
          <img src={Arcelormittal} alt="company" />
          <img src={Mekovita} alt="company" />
          <img src={Intertek} alt="company" />
          <img src={Arcelormittal} alt="company" />
          <img src={Mekovita} alt="company" />
          <img src={Intertek} alt="company" />
          <img src={Arcelormittal} alt="company" />
          <img src={Mekovita} alt="company" />
          <img src={Intertek} alt="company" />
          <img src={Arcelormittal} alt="company" />
          <img src={Mekovita} alt="company" />
          <img src={Intertek} alt="company" />
          <img src={Arcelormittal} alt="company" />
          <img src={Mekovita} alt="company" />
        </div>
      </div>
    </div>
  );
};
export default About_us_new;
