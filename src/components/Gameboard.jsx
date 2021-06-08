import React from 'react';

import { Board, Row, Cell, Heading } from '../style';

const Gameboard = ({
  title,
  gameboard,
  isPlaceable = true,
  isInteractive = false,
}) => {
  const headerRow = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const board = gameboard.getBoard();

  return (
    <Board>
      <Heading>{title}</Heading>
      {isPlaceable && (
        <Row>
          {headerRow.map((cell, i) => (
            <Cell key={i}>{cell}</Cell>
          ))}
        </Row>
      )}
      {board.map((row, index) => (
        <Row key={index}>
          {isPlaceable && <Cell key={index}>{index}</Cell>}
          {row.map((_, i) => (
            <Cell isHoverable={isInteractive} hasBorder key={i} />
          ))}
        </Row>
      ))}
    </Board>
  );
};

export default Gameboard;
