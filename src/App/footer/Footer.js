import React, { useState } from "react";
import "./Footer.css";
import FooterPage from "../footer/footerPage/FooterPage";
import { Link } from "react-router-dom";
import bootstrap from "bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
function Footer() {
  const [verified, setverified] = useState(false);
  return (
    <footer class="bg-white">
      <hr />
      <div class="container py-5">
        <div class="row py-4">
          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <img src="img/logo.png" alt="" width="180" class="mb-3" />
            <p class="font-italic text-muted">
              Nasza firma organizuje i obsługuję szkolenia w pełnym zakresie.
              Istnieje również możliwość szkolenia na terenie Państwa Firmy. W
              takich przypadkach prosimy o wysłanie do nas zapytania,
              Zapraszamy, Zespół A2K CeNT.
            </p>
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="#" target="_blank" title="facebook">
                  <i class="fab fa-facebook-square fa-2x"></i>
                </a>
              </li>
              &nbsp;
              <li class="list-inline-item">
                <a href="#" target="_blank" title="instagram">
                  <i class="fab fa-instagram fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4">Podstrony</h6>
            <ul class="list-unstyled mb-0">
              <li class="mb-2">
                <a href="../laboratory" class="text-muted">
                  Dla Laboratoriów
                </a>
              </li>
              <li class="mb-2">
                <a href="../companies" class="text-muted">
                  Dla Firm
                </a>
              </li>
              <li class="mb-2">
                <a href="../producers" class="text-muted">
                  Dla Producentów
                </a>
              </li>
              <li class="mb-2">
                <a href="../training" class="text-muted">
                  Szkolenia zamknięte
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4">Informacje</h6>
            <ul class="list-unstyled mb-0">
              <li class="mb-2">
                <a href="../" class="text-muted">
                  Strona główna
                </a>
              </li>
              <li class="mb-2">
                <a href="../O_nas" class="text-muted">
                  O Nas
                </a>
              </li>
              <li class="mb-2">
                <a href="../Napisz_do_nas" class="text-muted">
                  Kontakt
                </a>
              </li>
              <li class="mb-2">
                <a href="../Harmonogram" class="text-muted">
                  Zapisz się
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4">Newsletter</h6>
            <p class="text-muted mb-4">
              W celu otrzymywania od nas okazyjnych ofert oraz nowości,
              zapraszamy do zapisania się do newslettera
            </p>
            <div class="p-1 rounded border">
              <div class="input-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  aria-describedby="button-addon1"
                  class="form-control border-0 shadow-0"
                />
                <div class="input-group-append">
                  {verified && (
                    <button
                      id="button-addon1"
                      type="submit"
                      class="btn btn-link"
                    >
                      <i class="fa fa-paper-plane"></i>
                    </button>
                  )}
                  {!verified && (
                    <button
                      id="button-addon1"
                      type="submit"
                      class="btn btn-link"
                    >
                      <i class="fa fa-paper-plane disabled-captcha"></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={value => {
                console.log("Captcha value: " + value);
                setverified(!verified);
              }}
              className="captcha"
            />
          </div>
        </div>
      </div>
      <div class="bg-light py-4">
        <div class="container text-center">
          <p class="text-muted mb-0 py-2">
            A2KCeNT s.c. © 2015 | Centrum Naukowo-Techniczne. Szkolenia z
            akcentem na A2KCeNT
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
