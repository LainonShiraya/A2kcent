import React from "react";
import "../contact/contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-title-container">
        <h2>KONTAKT</h2>
      </div>
      <div className="contact-subtitle-container">
        <h2 className="text-color-green">Zadaj nam pytanie</h2>
        <h2>a odpowiemy najszybciej jak to możliwe</h2>
      </div>
      <div className="contact-message-split-container">
        <div className="contact-info-container">
          <h2 className="text-color-green font-subtitle">Dane Firmy</h2>
          <span>
            Skontaktuj się z nami, aby uzyskać więcej informacji na temat
            naszych usług.
            <br />
            <br /> Nasz doświadczony zespół może Ci pomóc znaleźć to, czego
            potrzebujesz i doradzi w sprawie szczegółów.
            <br /> <br /> Jesteśmy do Państwa dyspozycji od poniedziałku do
            piątku od 8 do 16.
            <br />
            <br />
            Centrum Naukowo-Techniczne A2K CeNT s.c. <br /> 04-039 Warszawa{" "}
            <br /> ul. Opinogórska 2 lok. 69 <br /> <br /> NIP: 1132696648{" "}
            <br />
            REGON: 141199185
            <br /> <br /> Kom: 691 398 442 <br /> Kom: 660 421 107
            <br /> <br /> e-mail: a2kcent@a2kcent.pl
          </span>
        </div>
        <div className="contact-message-container">
          <label for="phone">Numer Telefonu </label>
          <input type="text" name="phone" id="phone" />
          <label for="company">Nazwa firmy </label>
          <input type="text" name="company" id="company" />
          <label for="email"> E-mail ( wymagane)</label>
          <input type="text" name="email" id="email" />
          <div className="textarea-container">
            <p>Wiadomość (wymagane)</p>
            <textarea></textarea>
          </div>
          <button className="button-send button-newsletter">Wyślij</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
