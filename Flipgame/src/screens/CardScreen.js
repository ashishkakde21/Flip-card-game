import React from 'react';
import background from '../imgs/bg.png'; 
import BackButton from './Back'; 
import { useNavigate } from 'react-router-dom'; 
import Card from './Card';

const cardData = [
  { id: 1, color: 'red', number: 1, flipped: false, imageUrl: '/red.png' },
  { id: 2, color: 'red', number: 2, flipped: false, imageUrl: '/red.png' },
  { id: 3, color: 'red', number: 3, flipped: false, imageUrl: '/red.png' },
  { id: 4, color: 'blue', number: 1, flipped: false, imageUrl: '/blue.png' },
  { id: 5, color: 'blue', number: 2, flipped: false, imageUrl: '/blue.png' },
  { id: 6, color: 'blue', number: 3, flipped: false, imageUrl: '/blue.png' },
];

function CardPage() {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate(''); 
  };

  return (
    <div> 
      <img className='img1' src={background} alt="" />
      <BackButton onClick={handlePlayClick}/>
      <div className="card-container">
        {cardData.map((card) => (
          <Card key={card.id} /> 
        ))}
      </div>
    </div>
  );
}

export default CardPage;
