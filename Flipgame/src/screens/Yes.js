import React from "react";
import { useNavigate } from "react-router-dom"; 
import background from "../imgs/bg.png";
import monkeyhappy from "../imgs/mh.png";
import yesButton from '../imgs/ybtn.png'
import BackButton from "./Back";


function YesButton() {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate("/play-page"); 
  };

  return (
    <div>
      <img className="img1" src={background} alt="" />
      <img className="img2" src={monkeyhappy} alt="" />
      <button className="btn" onClick={handlePlayClick}>
        <img src={yesButton} alt="Yes-button" />
      </button>
      <BackButton />
    </div>
  );
}

export default YesButton;
