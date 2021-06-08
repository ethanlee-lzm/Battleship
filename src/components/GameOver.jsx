import React from 'react';

import {
  BlurBackground,
  Container,
  Notification,
  Button,
  Text,
} from '../style';

const GameOver = ({ isHumanWinner, startGame }) => {
  return (
    <BlurBackground>
      <Container>
        <Notification>Game Over</Notification>
        <Text>
          {isHumanWinner
            ? 'Congratulations - You are the winner!'
            : 'Unlucky - The enemy won!'}
        </Text>
        <Button onClick={startGame} margin="0 0 0.5em 0">
          New Game
        </Button>
      </Container>
    </BlurBackground>
  );
};

export default GameOver;
