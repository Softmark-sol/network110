import React from "react";
import Img from "../assets/images/img.jpg"
import "../css/cards.css"

const Cards = () => {
  return (
    <div style={{width: "100%", display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row"}}>
    <div className="cards">
      <img src={Img} alt="img" />
      <h2>Internet Cable Extension</h2>
      <p>Hidden internal extension without breaking.</p>
      <ul>
        <li>Seamless extension</li>
        <li>minimal disruption</li>
      </ul>
    </div>
    {/* <div className="cards">
      <img src={Img} alt="img" />
      <h2>Internet Cable Extension</h2>
      <p>Hidden internal extension without breaking.</p>
      <ul>
        <li>Seamless extension</li>
        <li>minimal disruption</li>
      </ul>
    </div>
    <div className="cards">
      <img src={Img} alt="img" />
      <h2>Internet Cable Extension</h2>
      <p>Hidden internal extension without breaking.</p>
      <ul>
        <li>Seamless extension</li>
        <li>minimal disruption</li>
      </ul>
    </div> */}
    </div>
  );
};

export default Cards;
