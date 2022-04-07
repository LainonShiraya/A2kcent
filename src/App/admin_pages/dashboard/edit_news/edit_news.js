import React from "react";
import "../add_news/add_news.css";
const Add_news = () => {
  return (
    <div className="addNews-container">
      <div className="contact-message-container-admin">
        <div className="input-title-container">
          <p>Tytuł aktualności (wymagane)</p>
          <input type="text" name="title" id="title" />
        </div>
        <div className="contact-select-container">
          <select name="images" id="images">
            <option value="image_1">image_1</option>
            <option value="image_2">image_2</option>
            <option value="image_3">image_3</option>
            <option value="image_4">image_4</option>
          </select>
          <div className="image-container-news">
            <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" />
          </div>
        </div>
        <div className="textarea-container">
          <p>Tekst/Opis (wymagane)</p>
          <textarea></textarea>
        </div>
        <button className="button-newsletter admin-button-margin">
          Wyślij
        </button>
      </div>
    </div>
  );
};

export default Add_news;
