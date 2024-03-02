import React from 'react';
import background from '../imgs/bg.png';
import card from '../imgs/card.png'
import BackButton from './Back'; 
import playbtn from '../imgs/pybtn.png'
import { useNavigate } from 'react-router-dom'; 
import '../App.css';

function PlayPage() {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate('/card-page'); 
  };

  return (
    <div> 
      <img className='img1' src={background} alt="" />
      <button className='btn' onClick={handlePlayClick}>
        <img src={playbtn} alt="" />
        </button> 
      <BackButton onClick={handlePlayClick}/>
      <div className="card-holder"> 
      <img src={card} alt="" />
      <img src={card} alt="" />
      <img src={card} alt="" />
      </div>
    </div>
  );
}

export default PlayPage;
