import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  margin: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  width: 100px;
  height: 150px;
  background-color: ${(props) => props.color};
  margin: 10px;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  transform: ${(props) => (props.flipped ? 'rotateY(180deg)' : 'rotateY(0)')};
  transition: transform 0.5s;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props) => (props.flipped ? 'block' : 'none')};
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardGame = ({ onCardClick }) => {
  const [cards, setCards] = useState([
    { id: 1, color: 'red', number: 1, flipped: false, imageUrl: '/red.png' },
    { id: 2, color: 'red', number: 2, flipped: false, imageUrl: '/red.png' },
    { id: 3, color: 'red', number: 3, flipped: false, imageUrl: '/red.png' },
    { id: 4, color: 'blue', number: 1, flipped: false, imageUrl: '/blue.png' },
    { id: 5, color: 'blue', number: 2, flipped: false, imageUrl: '/blue.png' },
    { id: 6, color: 'blue', number: 3, flipped: false, imageUrl: '/blue.png' },
    { id: 7, color: 'red', number: 41, flipped: false, imageUrl: '/red.png' },
    { id: 8, color: 'red', number: 51, flipped: false, imageUrl: '/red.png' },
    { id: 9, color: 'red', number: 61, flipped: true, imageUrl: '/red.png' },
    { id: 10, color: 'blue', number: 41, flipped: false, imageUrl: '/blue.png' },
    { id: 11, color: 'blue', number: 51, flipped: false, imageUrl: '/blue.png' },
    { id: 12, color: 'blue', number: 61, flipped: true, imageUrl: '/blue.png' },
  ]);

  useEffect(() => {
    const flippedRedCards = cards.filter((card) => card.color === 'red' && card.flipped);
    const flippedBlueCards = cards.filter((card) => card.color === 'blue' && card.flipped);

    flippedRedCards.forEach((redCard) => {
      const matchingBlueCard = flippedBlueCards.find((blueCard) => blueCard.number === redCard.number);

      if (matchingBlueCard) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === redCard.id || card.id === matchingBlueCard.id
              ? { ...card, flipped: true }
              : card
          )
        );
      }
    });
  }, [cards]);

  const handleCardClick = (id) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, flipped: !card.flipped } : card
      )
    );

    onCardClick(id);
  };

  return (
    <Container>
      <CardContainer>
        {cards
          .filter((card) => card.color === 'red' && card.number <= 3)
          .map((card) => (
            <Card
              key={card.id}
              color={card.flipped ? 'transparent' : 'red'}
              onClick={() => handleCardClick(card.id)}
            >
              <CardImage src={card.imageUrl} alt={`Red ${card.number}`} flipped={card.flipped} />
              <CardBack style={{ display: card.flipped ? 'none' : 'flex' }}>{card.number}</CardBack>
            </Card>
          ))}
      </CardContainer>
      <CardContainer>
        {cards
          .filter((card) => card.color === 'red' && card.number > 3)
          .map((card) => (
            <Card
              key={card.id}
              color={card.flipped ? 'transparent' : 'red'}
              onClick={() => handleCardClick(card.id)}
            >
              <CardImage src={card.imageUrl} alt={`Red ${card.number}`} flipped={card.flipped} />
              <CardBack style={{ display: card.flipped ? 'none' : 'flex' }}>{card.number}</CardBack>
            </Card>
          ))}
      </CardContainer>
      <CardContainer>
        {cards
          .filter((card) => card.color === 'blue' && card.number <= 3)
          .map((card) => (
            <Card
              key={card.id}
              color={card.flipped ? 'transparent' : 'blue'}
              onClick={() => handleCardClick(card.id)}
            >
              <CardImage src={card.imageUrl} alt={`Blue ${card.number}`} flipped={card.flipped} />
              <CardBack style={{ display: card.flipped ? 'none' : 'flex' }}>{card.number}</CardBack>
            </Card>
          ))}
      </CardContainer>
      <CardContainer>
        {cards
          .filter((card) => card.color === 'blue' && card.number > 3)
          .map((card) => (
            <Card
              key={card.id}
              color={card.flipped ? 'transparent' : 'blue'}
              onClick={() => handleCardClick(card.id)}
            >
              <CardImage src={card.imageUrl} alt={`Blue ${card.number}`} flipped={card.flipped} />
              <CardBack style={{ display: card.flipped ? 'none' : 'flex' }}>{card.number}</CardBack>
            </Card>
          ))}
      </CardContainer>
    </Container>
  );
};

export default CardGame;
