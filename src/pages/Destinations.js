import React from "react";
import { useState, useEffect } from "react";
// import SearchForm from "../components/SearchForm";

// cards
import HomeCards from "../components/HomeCards"; //structure
// import Loading from "../components/Loading";

//styling
import "../styles/Dest.css";
import noMad from "../logov2.svg";

export default function Destinations() {
  const [cards, setCards] = useState([
    {
      url: "",
      title: "",
      price: "",
      duration: "",
      ratings: "",
    },
  ]);

  useEffect(() => {
    fetch("/cards")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setCards(jsonRes));
  });
  return (
    <div>
      <div className="dest-hero">
        <div className="dest-container">
          <img src={noMad} alt="logo" />
          <h1>Search Form</h1>
        </div>
      </div>
      <div className="cards">
        {cards.map((item) => {
          return (
            <HomeCards
              key={item.id}
              img={item.url}
              title={item.title}
              price={item.price}
              duration={item.duration}
              ratings={item.ratings}
            />
          );
        })}
      </div>
    </div>
  );
}
