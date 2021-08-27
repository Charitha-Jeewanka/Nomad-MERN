import React, { useState } from "react";
import axios from "axios";

const Experiences = () => {
  const [card, setCard] = useState({
    url: "",
    title: "",
    price: "",
    duration: "",
    ratings: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setCard((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function addCard(e) {
    e.preventDefault();
    alert("Card created");
    const newCard = {
      url: card.url,
      title: card.title,
      price: card.price,
      duration: card.duration,
      ratings: card.ratings,
    };
    axios.post("createCard", newCard);
  }

  return (
    <article>
      <form className="form-container">
        <div className="form-control">
          <label htmlFor="url">Image URL: </label>
          <input name="url" value={card.url} onChange={handleChange} />
        </div>
        <div className="form-control">
          <label htmlFor="title">Title: </label>
          <input name="title" value={card.title} onChange={handleChange} />
        </div>
        <div className="form-control">
          <label htmlFor="price">Price: </label>
          <input name="price" value={card.price} onChange={handleChange} />
        </div>
        <div className="form-control">
          <label htmlFor="duration">Duration: </label>
          <input
            name="duration"
            value={card.duration}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="ratings">Ratings: </label>
          <input name="ratings" value={card.ratings} onChange={handleChange} />
        </div>
        <button className="primary-btn" onClick={addCard}>
          Test
        </button>
      </form>
    </article>
  );
};

export default Experiences;
