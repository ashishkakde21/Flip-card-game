import React from 'react';
import startButtonImage from '../imgs/strt.png'; 
import { useNavigate } from 'react-router-dom'; 

const StartButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/next-page'); 
  };

  return (
    <button className='btn' onClick={handleClick}>
      <img src={startButtonImage} alt="Start-button" />
    </button>
  );
};

export default StartButton;
