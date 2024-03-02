import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../App.css"; 
import button from '../imgs/btn1.png'

function BackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); 
  };

  return (
    <>
      <button className="back-btn" onClick={handleClick}>
        <img src={button} alt="Back button with arrow" />{" "}
      </button>
    </>
  );
}

export default BackButton;
