import "./Newsletter.css";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function RecentPosts() {
  const [verified, setverified] = useState(false);
  return (
    <div className="container">
      <div className="newsletter-container">
        <div className="icon-container">
          <i className="far fa-envelope fa-10x"></i>
        </div>
        <div className="newsletter-text-container">
          <h2>
            Nie przegap naszych
            <span className="text-color-green"> Szkoleń!</span>
          </h2>
          <h2>
            Zapisz się na <span className="text-color-green">Newsletter</span>
          </h2>
        </div>
      </div>
      <div className="newsletter-input-container">
        <input type="text" placeholder="Email" className="input-newsletter" />
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
        {verified && <button className="button-newsletter">Zapisz się</button>}

        {!verified && (
          <button className="button-newsletter button-disabled" disabled>
            Zapisz się
          </button>
        )}
      </div>
    </div>
  );
}

export default RecentPosts;
