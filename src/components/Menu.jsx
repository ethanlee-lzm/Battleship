import React, { useState } from 'react';

import Gameboard from '../components/Gameboard';
import createGameboard from '../factories/createGameboard';
import createShip from '../factories/createShip';

import { Container, Notification, Button } from '../style';

const Menu = ({ size, startGame }) => {
  const [gameboard, setGameboard] = useState(createGameboard(size));
  const [ships, setShips] = useState([5, 4, 3, 3, 2]);
  const [isHorizontal, setIsHorizontal] = useState(true);
  const [isInteractive, setIsInteractive] = useState(true);

  const swapAxis = () => setIsHorizontal(!isHorizontal);

  const start = () => {
    setIsInteractive(false);
    setTimeout(() => startGame(gameboard), 1000);
  };

  const handleClick = (x, y) => {
    try {
      gameboard.place(x, y, createShip(ships[0]), isHorizontal);
      setGameboard(gameboard);
      setShips(ships.slice(1));
      if (ships.length === 1) start();
    } catch (e) {
      console.log('Ship already placed here.');
    }
  };

  return (
    <Container>
      <Notification>Set up your Game Board!</Notification>
      <Gameboard
        size={size}
        board={gameboard.getBoard()}
        isLabelled={true}
        isInteractive={isInteractive}
        clickHandler={handleClick}
        areShipsHidden={false}
      />
      <Button margin="0 0 0.5em 0" onClick={swapAxis}>
        {isHorizontal ? 'Vertical' : 'Horizontal'}
      </Button>
    </Container>
  );
};

export default Menu;
