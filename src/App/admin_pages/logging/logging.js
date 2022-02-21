import React from "react";
import "../logging/logging.css";
import Image from "../../../assets/images/logo.png";

const Logging = () => {
  return (
    <div className="logging-container">
      <img alt="logo" src={Image} className="logo"></img>
      <div className="logging-inputs-container">
        <div className="logging-input-text-container">
          <label for="login">Login</label>
          <input
            type="text"
            className="input-newsletter"
            name="login"
            id="login"
          />
        </div>
        <div className="logging-input-text-container">
          <label for="password">Password</label>
          <input
            type="password"
            className="input-newsletter"
            name="password"
            id="password"
          />
        </div>
        <button className="button-newsletter button-newsletter-login">
          Zaloguj się
        </button>
      </div>
    </div>
  );
};

export default Logging;
