import React, { useState } from 'react';

import Header from './Header';
import Game from './Game';
import Menu from './Menu';

import { GlobalStyle } from '../style';
import GameOver from './GameOver';
import Footer from './Footer';

const App = () => {
  const [gameState, setGameState] = useState({
    start: true,
    game: false,
    end: false,
    gameboard: undefined,
    isHumanWinner: undefined,
  });

  const startMenu = () => {
    setGameState({
      start: true,
      game: false,
      end: false,
      gameboard: undefined,
      isHumanWinner: undefined,
    });
  };

  const startGame = (gameboard) => {
    setGameState({
      start: false,
      game: true,
      end: false,
      gameboard,
      isHumanWinner: undefined,
    });
  };

  const endGame = (isHumanWinner) => {
    setGameState({
      start: false,
      game: true,
      end: true,
      isHumanWinner,
    });
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      {gameState.start && <Menu size={10} startGame={startGame} />}
      {gameState.game && (
        <Game size={10} endGame={endGame} gameboard={gameState.gameboard} />
      )}
      {gameState.end && (
        <GameOver
          isHumanWinner={gameState.isHumanWinner}
          startGame={startMenu}
        />
      )}
      <Footer />
    </React.Fragment>
  );
};

export default App;
