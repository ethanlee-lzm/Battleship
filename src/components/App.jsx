import React, { useState } from 'react';

import Header from './Header';
import Game from './Game';

import { GlobalStyle } from '../style';
import GameOver from './GameOver';

const App = () => {
  const [gameState, setGameState] = useState({
    start: false,
    game: true,
    end: false,
    isHumanWinner: undefined,
  });

  const endGame = (isHumanWinner) => {
    setGameState({
      start: false,
      game: true,
      end: true,
      isHumanWinner,
    });
  };

  const startGame = () => {
    setGameState({
      start: false,
      game: true,
      end: false,
      isHumanWinner: undefined,
    });
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      {gameState.game && <Game size={10} endGame={endGame} />}
      {gameState.end && (
        <GameOver
          isHumanWinner={gameState.isHumanWinner}
          startGame={startGame}
        />
      )}
    </React.Fragment>
  );
};

export default App;
