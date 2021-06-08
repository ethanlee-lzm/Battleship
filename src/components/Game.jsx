import React from 'react';

import Gameboard from './Gameboard';

import { Container, Notification, FlexFormat } from '../style';

import createGameboard from '../Factories/createGameboard';

const Game = ({ size }) => {
  return (
    <Container>
      <Notification>
        It is your turn, fire a shot into enemy waters!
      </Notification>
      <FlexFormat>
        <Gameboard
          title="Your Waters"
          gameboard={createGameboard(size)}
          isPlaceable={false}
        />
        <Gameboard
          title="Enemy Waters"
          gameboard={createGameboard(size)}
          isPlaceable={false}
          isInteractive={true}
        />
      </FlexFormat>
    </Container>
  );
};

export default Game;