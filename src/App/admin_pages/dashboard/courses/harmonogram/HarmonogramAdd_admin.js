import React, { useState } from "react";
import "../css/HarmonogramEdit_admin.css";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import "moment/locale/pl";
const HarmonogramEdit_admin = () => {
  let inputProps = {
    placeholder: "Data szkolenia",
  };
  const [mode, setMode] = useState(false);
  return (
    <div className="harmonogramEdit-container">
      <div className="hamronogramEdit-title-container">
        <h1>Dodaj szkolenie</h1>
      </div>
      <div className="harmonogramEdit-body-container">
        <div class="form-group">
          <label for="exampleInputEmail1">Nazwa szkolenia</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Nazwa szkolenia"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Typ szkolenia</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Szkolenie</option>
            <option>Seminarium</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Miejsce</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            onChange={e => {
              if (e.target.value === "Fizycznie") {
                setMode(true);
              } else setMode(false);
            }}
          >
            <option>Online</option>
            <option>Fizycznie</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Miasto</label>
          {!mode && (
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Miasto"
              disabled
            />
          )}
          {mode && (
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Miasto"
            />
          )}
        </div>
        <div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label class="form-check-label" for="inlineRadio1">
              Szkolenie bez noclegu
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label class="form-check-label" for="inlineRadio2">
              Szkolenie z noclegiem
            </label>
          </div>
        </div>
        <div class="mb-3">
          <label for="formFile" class="form-label">
            program szkolenia
          </label>
          <input class="form-control" type="file" id="formFile" />
        </div>
        <div className="course-date">
          <Datetime locale="pl" inputProps={inputProps} />
        </div>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Cena szkolenia za osobę"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span class="input-group-text" id="basic-addon2">
            PLN
          </span>
        </div>
      </div>
      <button className="button-newsletter admin-button-margin"> Edytuj</button>
    </div>
  );
};

export default HarmonogramEdit_admin;
