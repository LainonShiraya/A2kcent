import "./Footer.css";
import FooterPage from "../footer/footerPage/FooterPage";

function Footer() {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer-pages-contrainer">
        <div className="footer-page-container">
          <div className="footer-page-title">
            <h2>Społeczność</h2>
          </div>
          <div className="footer-page-subpages">
            <div className="socials">
              <i class="fab fa-facebook-f fa-2x"></i>
              <div className="socials-titles">
                <h2>Facebook</h2>
                <h2>/a2kcent</h2>
              </div>
            </div>
            <div className="socials">
              <i class="fab fa-instagram fa-2x"></i>
              <div className="socials-titles">
                <h2>Instagram</h2>
                <h2>@a2kcent</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-page-container">
          <div className="footer-page-title">
            <h2>Kontakt</h2>
          </div>
          <div className="footer-page-subpages">
            <div className="footer-contact">
              <div className="footer-contact-param">
                <i class="far fa-envelope fa-2x"></i>
                <h3>a2kcent@a2kcent.pl</h3>
              </div>
              <div className="footer-contact-param">
                <i class="fas fa-phone fa-2x"></i>
                <h3>+48 691 398 442</h3>
              </div>
              <div className="footer-contact-param">
                <i class="fas fa-phone fa-2x"></i>
                <h3>+48 660 421 107</h3>
              </div>
            </div>
          </div>
        </div>
        <FooterPage
          title="Oferta"
          subpages={[
            "Dla Studentów",
            "Dla Laboratoriów",
            "Dla Firm",
            "Dla Producentów",
            "Dla Szkolenia Zamknięte",
          ]}
        />
        <FooterPage
          title="Zasady"
          subpages={[
            "Strona glowna",
            "Strona glowna",
            "Strona glowna",
            "Regulamin A2k CeNT",
          ]}
        />
      </div>

      <div className="footer-copyrights-container">
        <hr />
        <h2>
          A2KCeNT s.c. © 2015 | Centrum Naukowo-Techniczne. Szkolenia z akcentem
          na A2KCeNT
        </h2>
      </div>
    </div>
  );
}

export default Footer;
