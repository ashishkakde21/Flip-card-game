import React from "react";
import background from "../imgs/bg.png"; 
import monkeyhappy from "../imgs/mh.png"; 
import nextbutton from "../imgs/nxt.png"
import BackButton from "./Back"; 
import { useNavigate } from "react-router-dom"; 

function NextPage() {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/yes-page");  
  };

  return (
    <div>
      <img className="img1" src={background} alt="" />
      <img className="img2" src={monkeyhappy} alt="" />
      <button className="btn" onClick={handleNextClick}>
        <img src={nextbutton} alt="next-button" />
      </button>
      <BackButton />
    </div>
  );
}

export default NextPage;
