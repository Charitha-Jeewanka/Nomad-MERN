import React from "react";
import "../styles/Cards.css";

export default function HomeCards(props) {
  return (
    <div className="card">
      <img src={props.img} alt="charitha" />
      <div className="card-body">
        <h2>{props.title}</h2>

        <div className="blocks-container">
          <div className="block">
            <h4>price</h4>
            <h5>{props.price}</h5>
          </div>
          <div className="block">
            <h4>duration</h4>
            <h5>{props.duration}</h5>
          </div>
          <div className="block">
            <h4>ratings</h4>
            <h5>{props.ratings}</h5>
          </div>
        </div>
        <div className="btn-center">
          <button className="secondary-btn">View more</button>
        </div>
      </div>
    </div>
  );
}
