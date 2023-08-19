import React from "react";
import "./wheelDeal.css";
import Logo from "../../assets/Logo.png";

const WheelDeal = () => {
  return (
    <div className="wheelDeal-container">
      <img src={Logo} alt="Logo" className="logo" />
      <h1 className="title">Wheel Deal</h1>
      <p>Car rental and sharing platform</p>
    </div>
  );
};

export default WheelDeal;
