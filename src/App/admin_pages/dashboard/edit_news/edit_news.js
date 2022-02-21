import React from "react";
import "../add_news/add_news.css";
const Add_news = () => {
  return (
    <div className="addNews-container">
      <div className="contact-message-container-admin">
        <label for="title">Tytuł </label>
        <input type="text" name="title" id="title" />
        <div className="contact-select-container">
          <select name="images" id="images">
            <option value="image_1">image_1</option>
            <option value="image_2">image_2</option>
            <option value="image_3">image_3</option>
            <option value="image_4">image_4</option>
          </select>
        </div>
        <div className="textarea-container">
          <p>Tekst/Opis (wymagane)</p>
          <textarea></textarea>
        </div>
        <button className="button-send text-title-button-green">Wyślij</button>
      </div>
    </div>
  );
};

export default Add_news;
