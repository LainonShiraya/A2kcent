import React, { useState } from "react";
import "../add_news/add_news.css";
const Add_news = () => {
  const [image, setImage] = useState("");
  return (
    <div className="addNews-container">
      <div className="contact-message-container-admin">
        <div className="input-title-container">
          <p>Tytuł aktualności (wymagane)</p>
          <input type="text" name="title" id="title" />
        </div>
        <div className="input-title-container">
          <p>Link do podstrony (wymagane)</p>
          <input type="text" name="subpage-link" id="subpage-link" />
        </div>
        <div className="contact-select-container">
          <select
            name="images"
            id="images"
            onChange={e => setImage(e.target.value)}
          >
            <option value="image_1">image_1</option>
            <option value="image_2">image_2</option>
            <option value="image_3">image_3</option>
            <option value="image_4">image_4</option>
          </select>
          <div className="image-container-news">
            <img src={image} alt={image} />
          </div>
        </div>
        <div className="textarea-container-admin">
          <p>Tekst/Opis (wymagane)</p>
          <textarea></textarea>
        </div>
        <button className="button-newsletter admin-button-margin">
          Edytuj
        </button>
      </div>
    </div>
  );
};

export default Add_news;
