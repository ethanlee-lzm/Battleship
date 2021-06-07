import createGameboard from '../factories/createGameboard';
import createShip from '../factories/createShip';

let gameboard, board;

beforeAll(() => {
  gameboard = createGameboard(10);
  board = gameboard.getBoard();
});

test('Returns a 10x10 gameboard', () => {
  expect(board.length).toBe(10);
  board.forEach((row) => {
    expect(row.length).toBe(10);
  });
});

test("Throw error if coordinates and ship aren't passed", () => {
  expect(() => gameboard.place()).toThrow('Arguments x, y & ship are required');
  expect(() => gameboard.place(0)).toThrow(
    'Arguments x, y & ship are required',
  );
  expect(() => gameboard.place(0, 0)).toThrow(
    'Arguments x, y & ship are required',
  );
});

test('Throw error if x coordinate is not an integer between 0-9', () => {
  expect(() => gameboard.place(null, 0, 2)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(true, 0, 2)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place([], 0, 2)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place({}, 0, 2)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place('', 0, 2)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(() => {}, 0, 2)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(-1, 0, 2)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(0.8, 0, 2)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(20, 0, 2)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
});

test('Throw error if y coordinate is not an integer between 0-9', () => {
  expect(() => gameboard.place(0, null, 2)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(0, true, 2)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(0, [], 2)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(0, {}, 2)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(0, '', 2)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(0, () => {}, 2)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(0, -1, 2)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(0, 0.8, 2)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(0, 20, 2)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
});

test('Throw error if ship argument is not a ship object', () => {
  expect(() => gameboard.place(0, 0, null)).toThrow(
    'ship must be a ship object',
  );
  expect(() => gameboard.place(0, 0, true)).toThrow(
    'ship must be a ship object',
  );
  expect(() => gameboard.place(0, 0, [])).toThrow('ship must be a ship object');
  expect(() => gameboard.place(0, 0, '')).toThrow('ship must be a ship object');
  expect(() => gameboard.place(0, 0, 0)).toThrow('ship must be a ship object');
  expect(() => gameboard.place(0, 0, () => {})).toThrow(
    'ship must be a ship object',
  );
  expect(() =>
    gameboard.place(0, 0, { not: 'not', a: 'a', ship: 'ship' }),
  ).toThrow('ship must be a ship object');
  expect(() =>
    gameboard.place(0, 0, { length: 'not', hit: 'a', isSunk: 'ship' }),
  ).toThrow('ship must be a ship object');
});

test('Throw error if isHorizontal is passed and not a boolean', () => {
  const ship = createShip(2);

  expect(() => gameboard.place(0, 0, ship, null)).toThrow(
    'isHorizontal must be a boolean',
  );
  expect(() => gameboard.place(0, 0, ship, [])).toThrow(
    'isHorizontal must be a boolean',
  );
  expect(() => gameboard.place(0, 0, ship, {})).toThrow(
    'isHorizontal must be a boolean',
  );
  expect(() => gameboard.place(0, 0, ship, '')).toThrow(
    'isHorizontal must be a boolean',
  );
  expect(() => gameboard.place(0, 0, ship, 0)).toThrow(
    'isHorizontal must be a boolean',
  );
  expect(() => gameboard.place(0, 0, ship, () => {})).toThrow(
    'isHorizontal must be a boolean',
  );
});

test('Adding a ship horizontally of length 2 at (0, 0)', () => {
  const gameboard = createGameboard(10);
  const ship = createShip(2);
  expect(gameboard.place(0, 0, ship, true)).toEqual([
    [ship, ship, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('Adding a ship vertically of length 2 at (0, 0)', () => {
  const gameboard = createGameboard(10);
  const ship = createShip(2);
  expect(gameboard.place(0, 0, ship, false)).toEqual([
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('Adding a ship horizontally of length 3 at (0, 0)', () => {
  const gameboard = createGameboard(10);
  const ship = createShip(3);
  expect(gameboard.place(0, 0, ship, true)).toEqual([
    [ship, ship, ship, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('Adding a ship vertically of length 3 at (0, 0)', () => {
  const gameboard = createGameboard(10);
  const ship = createShip(3);
  expect(gameboard.place(0, 0, ship, false)).toEqual([
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('Adding a ship horizontally of length 4 at (0, 0)', () => {
  const gameboard = createGameboard(10);
  const ship = createShip(4);
  expect(gameboard.place(0, 0, ship, true)).toEqual([
    [ship, ship, ship, ship, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('Adding a ship vertically of length 4 at (0, 0)', () => {
  const gameboard = createGameboard(10);
  const ship = createShip(4);
  expect(gameboard.place(0, 0, ship, false)).toEqual([
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('Adding a ship horizontally of length 5 at (0, 0)', () => {
  const gameboard = createGameboard(10);
  const ship = createShip(5);
  expect(gameboard.place(0, 0, ship, true)).toEqual([
    [ship, ship, ship, ship, ship, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('Adding a ship vertically of length 5 at (0, 0)', () => {
  const gameboard = createGameboard(10);
  const ship = createShip(5);
  expect(gameboard.place(0, 0, ship, false)).toEqual([
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('Adding a ship vertically of length 5 at (9, 9)', () => {
  const gameboard = createGameboard(10);
  const ship = createShip(5);
  expect(gameboard.place(9, 9, ship, false)).toEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, ship],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, ship],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, ship],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, ship],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, ship],
  ]);
});

test('Adding a ship horizontally of length 5 at (9, 9)', () => {
  const gameboard = createGameboard(10);
  const ship = createShip(5);
  expect(gameboard.place(9, 9, ship, true)).toEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, ship, ship, ship, ship, ship],
  ]);
});

test('Adding 5 ships in distinct positions and directions', () => {
  const gameboard = createGameboard(10);

  const ship2 = createShip(2);
  gameboard.place(0, 0, ship2, false);
  const ship3a = createShip(3);
  gameboard.place(6, 5, ship3a, true);
  const ship3b = createShip(3);
  gameboard.place(5, 7, ship3b, false);
  const ship4 = createShip(4);
  gameboard.place(2, 9, ship4, false);
  const ship5 = createShip(5);
  gameboard.place(9, 1, ship5, true);

  expect(gameboard.getBoard()).toEqual([
    [ship2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship2, 0, 0, 0, 0, ship5, ship5, ship5, ship5, ship5],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, ship3a, ship3a, ship3a, 0],
    [0, 0, ship4, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, ship4, 0, 0, ship3b, 0, 0, 0, 0],
    [0, 0, ship4, 0, 0, ship3b, 0, 0, 0, 0],
    [0, 0, ship4, 0, 0, ship3b, 0, 0, 0, 0],
  ]);
});

test('Adding overlapping ships throws an error', () => {
  const gameboard = createGameboard(10);

  const ship2 = createShip(2);
  gameboard.place(0, 0, ship2, false);
  const ship3 = createShip(3);

  expect(() => gameboard.place(0, 1, ship3, true)).toThrow(
    'This ship overlaps another already placed',
  );
});

test('Throw error if incorrect number of coordinates are passed', () => {
  expect(() => gameboard.receiveAttack()).toThrow(
    'Arguments x & y are required',
  );
  expect(() => gameboard.receiveAttack(0)).toThrow(
    'Arguments x & y are required',
  );
});

test('Throw error if x coordinate for receiveAttack is not an integer between 0-9', () => {
  expect(() => gameboard.receiveAttack(null, 0)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.receiveAttack(true, 0)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.receiveAttack([], 0)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.receiveAttack({}, 0)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.receiveAttack('', 0)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.receiveAttack(() => {}, 0)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.receiveAttack(-1, 0)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.receiveAttack(0.8, 0)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.receiveAttack(20, 0)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
});

test('Throw error if y coordinate for receiveAttack is not an integer between 0-9', () => {
  expect(() => gameboard.receiveAttack(0, null)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.receiveAttack(0, true)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.receiveAttack(0, [])).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.receiveAttack(0, {})).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.receiveAttack(0, '')).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.receiveAttack(0, () => {})).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.receiveAttack(0, -1)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.receiveAttack(0, 0.8)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.receiveAttack(0, 20)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
});

test('receiveAttack used on a ship successfully activates its hit method', () => {
  const gameboard = createGameboard(10);
  const ship = createShip(2);

  gameboard.place(0, 0, ship, false);

  expect(gameboard.receiveAttack(0, 0)).toBe(true);
  expect(ship.isSunk()).toBe(false);
  expect(gameboard.receiveAttack(0, 1)).toBe(true);
  expect(ship.isSunk()).toBe(true);
});

test('receiveAttack used on an empty cell updates the missedShots array', () => {
  const gameboard = createGameboard(10);
  const ship = createShip(2);

  gameboard.place(0, 0, ship, false);

  expect(gameboard.receiveAttack(0, 2)).toBe(false);
  expect(gameboard.getMissedShots()).toEqual([{ x: 0, y: 2 }]);
  expect(gameboard.receiveAttack(4, 8)).toBe(false);
  expect(gameboard.getMissedShots()).toEqual([
    { x: 0, y: 2 },
    { x: 4, y: 8 },
  ]);
});

test('allShipsSunk should return a boolean', () => {
  const gameboard = createGameboard(10);

  expect(typeof gameboard.allShipsSunk()).toBe('boolean');
});

test('allShipsSunk returns the expected output', () => {
  const gameboard = createGameboard(10);

  gameboard.place(0, 0, createShip(2), false);
  gameboard.place(2, 7, createShip(4), true);

  expect(gameboard.allShipsSunk()).toBe(false);

  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(0, 1);

  expect(gameboard.allShipsSunk()).toBe(false);

  gameboard.receiveAttack(2, 7);
  gameboard.receiveAttack(3, 7);
  gameboard.receiveAttack(4, 7);
  gameboard.receiveAttack(5, 7);

  expect(gameboard.allShipsSunk()).toBe(true);
});
