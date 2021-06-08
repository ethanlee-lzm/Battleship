import React, { useState } from 'react';

import Gameboard from '../components/Gameboard';
import createGameboard from '../factories/createGameboard';
import createShip from '../factories/createShip';

import MouseTooltip from 'react-sticky-mouse-tooltip';

import { Container, Notification, Button, TooltipContainer } from '../style';

const Menu = ({ size, startGame }) => {
  const [gameboard, setGameboard] = useState(createGameboard(size));
  const [ships, setShips] = useState([5, 4, 3, 3, 2]);
  const [isHorizontal, setIsHorizontal] = useState(true);
  const [isFinishedPlacing, setIsFinishedPlacing] = useState(false);
  const [isInteractive, setIsInteractive] = useState(true);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const swapAxis = () => setIsHorizontal(!isHorizontal);

  const start = () => {
    setIsInteractive(false);
    setIsFinishedPlacing(true);
    setTimeout(() => startGame(gameboard), 1000);
  };

  const handleClick = (x, y) => {
    const tempGameboard = { ...gameboard };
    try {
      tempGameboard.place(x, y, createShip(ships[0]), isHorizontal);
      setGameboard(tempGameboard);
      setShips(ships.slice(1));
      if (ships.length === 1) start();
    } catch (e) {
      setIsTooltipVisible(true);
      setTimeout(() => setIsTooltipVisible(false), 2000);
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
      <MouseTooltip visible={isTooltipVisible} offsetX={10} offsetY={-35}>
        <TooltipContainer width="190px">
          Can't place ship here!
        </TooltipContainer>
      </MouseTooltip>
      <MouseTooltip visible={isFinishedPlacing} offsetX={10} offsetY={-35}>
        <TooltipContainer width="150px">Game Starting!</TooltipContainer>
      </MouseTooltip>
    </Container>
  );
};

export default Menu;
