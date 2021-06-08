import React, { useState, useEffect } from 'react';

import Gameboard from './Gameboard';

import createGameboard from '../factories/createGameboard';
import createPlayer from '../factories/createPlayer';
import createShip from '../factories/createShip';

import { Container, Notification, FlexibleFormat } from '../style';

const Game = ({ size, endGame, gameboard }) => {
  const initialPositions = [
    { x: 0, y: 0, len: 5, isHor: true },
    { x: 1, y: 2, len: 4, isHor: false },
    { x: 9, y: 9, len: 3, isHor: true },
    { x: 5, y: 5, len: 3, isHor: true },
    { x: 0, y: 9, len: 2, isHor: false },
  ];

  const [gameboards, setGameboards] = useState({
    human: gameboard ?? createGameboard(size),
    robot: createGameboard(size),
  });

  const { human, robot } = {
    human: createPlayer(gameboards.human, 'Your Waters', false),
    robot: createPlayer(gameboards.robot, 'Enemy Waters', true),
  };

  const [isHumanTurn, setIsHumanTurn] = useState(true);

  const [attacks, setAttacks] = useState({ human: [], robot: [] });

  useEffect(() => {
    initialPositions.forEach(({ x, y, len, isHor }) => {
      gameboards.robot.place(x, y, createShip(len), isHor);
    });
    setGameboards({
      human: gameboards.human,
      robot: gameboards.robot,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkGameOver = () => {
    if (gameboards.human.allShipsSunk()) endGame(false);
    if (gameboards.robot.allShipsSunk()) endGame(true);
  };

  const robotMove = () => {
    setTimeout(() => {
      human.takeAttack();
      setAttacks({
        human: gameboards.human.getAttacks(),
        robot: gameboards.robot.getAttacks(),
      });
      setIsHumanTurn(true);
    }, 1000);
  };

  const clickHandler = (i, j) => {
    if (!isHumanTurn) return;
    robot.takeAttack(i, j);
    setAttacks({
      human: gameboards.human.getAttacks(),
      robot: gameboards.robot.getAttacks(),
    });
    setIsHumanTurn(false);
    robotMove();
    checkGameOver();
  };

  return (
    <Container>
      <Notification>
        {isHumanTurn
          ? 'It is your turn, fire a shot at enemy waters!'
          : 'The enemy is taking their shot!'}
      </Notification>
      <FlexibleFormat>
        <Gameboard
          size={size}
          title={human.getName()}
          board={gameboards.human.getBoard()}
          receivedAttacks={attacks.human}
          clickHandler={clickHandler}
        />
        <Gameboard
          size={size}
          title={robot.getName()}
          board={gameboards.robot.getBoard()}
          receivedAttacks={attacks.robot}
          areShipsHidden={true}
          isInteractive={true}
          clickHandler={clickHandler}
        />
      </FlexibleFormat>
    </Container>
  );
};

export default Game;
