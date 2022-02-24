import "./Footer.css";
import FooterPage from "../footer/footerPage/FooterPage";
import { Link } from "react-router-dom";
import bootstrap from "bootstrap";
function Footer() {
  return (
    // <div className="footer-container">
    //   <hr />
    //   <div className="footer-pages-contrainer">
    //     <div className="footer-left-container">
    //       <h2>Nawigacja</h2>
    //       <div className="footer-left-links-container">
    //         <Link to="/">Strona główna</Link>
    //         <Link to="O_nas">O nas</Link>
    //         <Link to="../Harmonogram">Zapisy</Link>
    //         <Link to="../Napisz_do_nas">Kontakt</Link>
    //         <Link to="Dla_Studentów">Dla Studentów</Link>
    //         <Link to="../laboratory">Dla Laboratoriów</Link>
    //         <Link to="../companies">Dla Firm</Link>
    //         <Link to="../producers">Dla Producentów</Link>
    //         <Link to="../training">Szkolenia Zamknięte</Link>
    //         <div className="footer-page-subpages">
    //           <Link to="#facebook">
    //             <div className="socials">
    //               <i class="fab fa-facebook-f fa-2x"></i>
    //               <div className="socials-titles">
    //                 <h2>Facebook</h2>
    //                 <h2>/a2kcent</h2>
    //               </div>
    //             </div>
    //           </Link>
    //         </div>
    //         <div className="footer-page-subpages">
    //           <Link to="#instagram">
    //             <div className="socials">
    //               <i class="fab fa-instagram fa-2x"></i>
    //               <div className="socials-titles">
    //                 <h2>Instagram</h2>
    //                 <h2>@a2kcent</h2>
    //               </div>
    //             </div>
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="regulamin">
    //         <Link to="../regulamin" className="regulamin">
    //           Regulamin A2kcent
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="footer-right-container">
    //       <div className="footer-newsletter-container">
    //         <h2>Newsletter</h2>
    //         <div className="footer-input-container">
    //           <input
    //             type="text"
    //             placeholder="Email"
    //             className="input-newsletter"
    //           />
    //           <button className="button-newsletter">Zapisz się</button>
    //         </div>
    //       </div>
    //     </div>
    //     {/* <div className="footer-page-container">
    //       <div className="footer-page-title">
    //         <h2>Społeczność</h2>
    //       </div>
    //       <div className="footer-page-subpages">
    //         <div className="socials">
    //           <i class="fab fa-facebook-f fa-2x"></i>
    //           <div className="socials-titles">
    //             <h2>Facebook</h2>
    //             <h2>/a2kcent</h2>
    //           </div>
    //         </div>
    //         <div className="socials">
    //           <i class="fab fa-instagram fa-2x"></i>
    //           <div className="socials-titles">
    //             <h2>Instagram</h2>
    //             <h2>@a2kcent</h2>
    //           </div>
    //         </div>
    //       </div>
    //     </div> */}
    //     {/* <div className="footer-page-container">
    //       <div className="footer-page-title">
    //         <h2>Kontakt</h2>
    //       </div>
    //       <div className="footer-page-subpages">
    //         <div className="footer-contact">
    //           <div className="footer-contact-param">
    //             <i class="far fa-envelope fa-2x"></i>
    //             <h3>a2kcent@a2kcent.pl</h3>
    //           </div>
    //           <div className="footer-contact-param">
    //             <i class="fas fa-phone fa-2x"></i>
    //             <h3>+48 691 398 442</h3>
    //           </div>
    //           <div className="footer-contact-param">
    //             <i class="fas fa-phone fa-2x"></i>
    //             <h3>+48 660 421 107</h3>
    //           </div>
    //         </div>
    //       </div>
    //     </div> */}
    //     {/* <FooterPage
    //       title="Oferta"
    //       subpages={[
    //         "Dla Studentów",
    //         "Dla Laboratoriów",
    //         "Dla Firm",
    //         "Dla Producentów",
    //         "Dla Szkolenia Zamknięte",
    //       ]}
    //     />
    //     <FooterPage
    //       title="Zasady"
    //       subpages={[
    //         "Strona glowna",
    //         "Strona glowna",
    //         "Strona glowna",
    //         "Regulamin A2k CeNT",
    //       ]}
    //     /> */}
    //   </div>

    //   <div className="footer-copyrights-container">
    //     <hr />
    //     <h2>
    //       A2KCeNT s.c. © 2015 | Centrum Naukowo-Techniczne. Szkolenia z akcentem
    //       na A2KCeNT
    //     </h2>
    //   </div>
    // </div>
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
                <a href="#" class="text-muted">
                  Dla Laboratoriów
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-muted">
                  Dla Firm
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-muted">
                  Dla Producentów
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-muted">
                  Szkolenia zamknięte
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4">Informacje</h6>
            <ul class="list-unstyled mb-0">
              <li class="mb-2">
                <a href="#" class="text-muted">
                  Strona główna
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-muted">
                  O Nas
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-muted">
                  Kontakt
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-muted">
                  Regulamin
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
                  <button id="button-addon1" type="submit" class="btn btn-link">
                    <i class="fa fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
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
