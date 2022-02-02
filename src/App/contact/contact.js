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
      <div className="contact-message-container">
        <label for="phone">Numer Telefonu </label>
        <input type="text" name="phone" id="phone" />
        <label for="email"> E-mail ( wymagane)</label>
        <input type="text" name="email" id="email" />
        <div className="textarea-container">
          <p>Wiadomość (wymagane)</p>
          <textarea></textarea>
        </div>
        <button className="button-send text-title-button-green">Wyślij</button>
      </div>
    </div>
  );
};

export default Contact;
