import createPlayer from '../factories/createPlayer';
import createGameboard from '../factories/createGameboard';
import createShip from '../factories/createShip';

const gameboard = createGameboard(10);

test('Passing no parameters throws an error"', () => {
  expect(() => createPlayer()).toThrow('A gameboard is required');
  expect(() => createPlayer(undefined)).toThrow('A gameboard is required');
});

test('Throw error if passed gameboard is not an object', () => {
  expect(() => createPlayer(null)).toThrow('The gameboard must be an object');
  expect(() => createPlayer(true)).toThrow('The gameboard must be an object');
  expect(() => createPlayer(0)).toThrow('The gameboard must be an object');
  expect(() => createPlayer([])).toThrow('The gameboard must be an object');
  expect(() => createPlayer(() => {})).toThrow(
    'The gameboard must be an object',
  );
});

test('Throw error if gameboard is not a Gamboard object', () => {
  expect(() => createPlayer({})).toThrow(
    'gameboard must be a Gameboard object',
  );
  expect(() => createPlayer({ prop1: '', prop2: '' })).toThrow(
    'gameboard must be a Gameboard object',
  );
  expect(() => createPlayer({ prop1: () => {}, prop2: () => {} })).toThrow(
    'gameboard must be a Gameboard object',
  );
  expect(() =>
    createPlayer({
      getBoard: '',
      getMissedShots: '',
      place: '',
      receiveAttack: '',
      allShipsSunk: '',
    }),
  ).toThrow('gameboard must be a Gameboard object');
});

test('Player factory throws error if passed player name is not a string', () => {
  expect(() => createPlayer(gameboard, null)).toThrow(
    'Player name must be a string',
  );
  expect(() => createPlayer(gameboard, true)).toThrow(
    'Player name must be a string',
  );
  expect(() => createPlayer(gameboard, 0)).toThrow(
    'Player name must be a string',
  );
  expect(() => createPlayer(gameboard, [])).toThrow(
    'Player name must be a string',
  );
  expect(() => createPlayer(gameboard, {})).toThrow(
    'Player name must be a string',
  );
  expect(() => createPlayer(gameboard, () => {})).toThrow(
    'Player name must be a string',
  );
});

test('Throw error if isRobot is not a boolean', () => {
  expect(() => createPlayer(gameboard, 'Player', null)).toThrow(
    'isRobot must be a boolean',
  );
  expect(() => createPlayer(gameboard, 'Player', '')).toThrow(
    'isRobot must be a boolean',
  );
  expect(() => createPlayer(gameboard, 'Player', 0)).toThrow(
    'isRobot must be a boolean',
  );
  expect(() => createPlayer(gameboard, 'Player', [])).toThrow(
    'isRobot must be a boolean',
  );
  expect(() => createPlayer(gameboard, 'Player', {})).toThrow(
    'isRobot must be a boolean',
  );
  expect(() => createPlayer(gameboard, 'Player', () => {})).toThrow(
    'isRobot must be a boolean',
  );
});

const { takeTurn } = createPlayer(gameboard);

test('Throw error if takeTurn x coordinate is not an integer between 0-9', () => {
  expect(() => takeTurn()).toThrow('Arguments x & y are required');
  expect(() => takeTurn(null, 0)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => takeTurn(true, 0)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => takeTurn('', 0)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => takeTurn([], 0)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => takeTurn({}, 0)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => takeTurn(() => {}, 0)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => takeTurn(-10, 0)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => takeTurn(0.5, 0)).toThrow(
    'x coordinate must be an integer between 0-9',
  );

  expect(() => takeTurn(100, 0)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
});

test('Throw error if takeTurn y coordinate is not an integer between 0-9', () => {
  expect(() => takeTurn(0)).toThrow('Arguments x & y are required');
  expect(() => takeTurn(0, true)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => takeTurn(0, '')).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => takeTurn(0, [])).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => takeTurn(0, {})).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => takeTurn(0, () => {})).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => takeTurn(0, -10)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => takeTurn(0, 0.5)).toThrow(
    'y coordinate must be an integer between 0-9',
  );

  expect(() => takeTurn(0, 100)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
});

test('Non-robot takeTurn returns a boolean depending on if a ship is hit or not', () => {
  const gameboard = createGameboard(10);
  gameboard.place(0, 0, createShip(4), true);
  const player = createPlayer(gameboard);
  expect(player.takeTurn(9, 9)).toBe(false);
  expect(player.takeTurn(0, 0)).toBe(true);

  const testCells = [];
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      if (!(x === 0 && y === 0) && !(x === 9 && y === 9)) {
        testCells.push({ x, y });
      }
    }
  }

  expect(player.getCells()).toEqual(testCells);
});
