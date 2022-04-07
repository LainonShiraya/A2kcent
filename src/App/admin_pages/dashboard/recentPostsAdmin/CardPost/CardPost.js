import React from "react";
import { Link } from "react-router-dom";
const Id = "1";
const CardPost = () => {
  return (
    <div class="card card-admin">
      <div class="card-header">
        <img
          src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
          alt="rover"
        />
      </div>
      <div class="card-body">
        <span class="tag tag-teal">Promocje</span>
        <h4>
          Wytyczne normy PN-ISO 29201:2022-02 Jakość wody - Zmienność wyników
          badań i niepewność pomiaru ilościowych metod mikrobiologicznych
        </h4>
        <p>
          Zapraszamy na nowe szkolenie „Wytyczne normy PN-ISO 29201:2022-02
          Jakość wody - Zmienność wyników badań i niepewność pomiaru ilościowych
          metod mikrobiologicznych” Program szkolenia 1. Ocena niepewności
          pomiaru ilościowych metod mikrobiologicznych – podejście globalne
          (całościowe). Wymagania ...
        </p>
        <div id="container">
          <button class="learn-more button-arrow-animation admin-buttons">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <Link to={`edit/${Id}`}>
              <span class="button-text">Edytuj</span>
            </Link>
          </button>
          <button class="learn-more button-arrow-animation admin-buttons">
            <span class="circle delete-colors" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">Usuń</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPost;
