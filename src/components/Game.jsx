import React, { useState, useEffect } from 'react';

import Gameboard from './Gameboard';

import createGameboard from '../factories/createGameboard';
import createPlayer from '../factories/createPlayer';
import createShip from '../factories/createShip';

import { Container, Notification, FlexibleFormat } from '../style';

const Game = ({ size, endGame, gameboard }) => {
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
    [5, 4, 3, 3, 2].forEach((length) => {
      let hasPlaced = false;
      while (!hasPlaced) {
        try {
          const x = Math.floor(Math.random() * 10);
          const y = Math.floor(Math.random() * 10);
          const isHor = Math.random() > 0.5;
          gameboards.robot.place(x, y, createShip(length), isHor);
          hasPlaced = true;
        } catch (e) {}
      }
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
