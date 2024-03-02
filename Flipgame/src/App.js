import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import background from './imgs/bg.png'; 
import monkeyhappy from './imgs/mh.png'; 
import './App.css';
import BackButton from './screens/Back.js'; 
import StartButton from './screens/Start.js'; 

function App() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('home'); 

  const handleStartClick = () => {
    setCurrentPage('next');
    navigate('/next-page'); 
  };

  return (
    <div className="image">
      <img className='img1' src={background} alt="" />
      <img className='img2' src={monkeyhappy} alt="" />
      {currentPage === 'home' && <StartButton onClick={handleStartClick} />}
      {(currentPage === 'next' || currentPage === 'yes') && <BackButton />} 
    </div>
  );
}

export default App;
