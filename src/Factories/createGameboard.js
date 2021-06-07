const createGameboard = (size) => {
	let gameboard = Array.from({ length: size }, () =>
	  Array.from({ length: size }, () => 0),
	);
  
	const ships = [];
	const missedShots = [];
  
	const getBoard = () => gameboard;
	const getMissedShots = () => missedShots;
  
	const place = (x, y, ship, isHorizontal = true) => {
	  if ([x, y, ship].includes(undefined)) {
		throw new Error('Arguments x, y & ship are required');
	  }
  
	  if (typeof x !== 'number' || x !== parseInt(x) || x < 0 || x > size - 1) {
		throw new Error('x coordinate must be an integer between 0-9');
	  }
  
	  if (typeof y !== 'number' || y !== parseInt(y) || y < 0 || y > size - 1) {
		throw new Error('y coordinate must be an integer between 0-9');
	  }
  
	  if (
		ship === null ||
		typeof ship !== 'object' ||
		ship.length === undefined ||
		ship.hit === undefined ||
		ship.isSunk === undefined ||
		typeof ship.length !== 'number' ||
		typeof ship.hit !== 'function' ||
		typeof ship.isSunk !== 'function'
	  ) {
		throw new Error('ship must be a ship object');
	  }
  
	  if (typeof isHorizontal !== 'boolean') {
		throw new Error('isHorizontal must be a boolean');
	  }
  
	  // if ship placed horizontally & it overflows the gameboard, shift it left
	  // by the required number of places
	  let xx = isHorizontal
		? x + ship.length > size
		  ? size - ship.length
		  : x
		: x;
  
	  // if ship placed vertically & it overflows the gameboard, shift it up by
	  // the required number of places
	  let yy = !isHorizontal
		? y + ship.length > size
		  ? size - ship.length
		  : y
		: y;
  
	  const tempBoard = gameboard;
	  for (let i = 0; i < ship.length; i++) {
		if (tempBoard[yy][xx]) {
		  throw new Error('This ship overlaps another already placed');
		}
		tempBoard[yy][xx] = ship;
		isHorizontal ? xx++ : yy++;
	  }
  
	  gameboard = tempBoard;
	  ships.push(ship);
  
	  return gameboard;
	};
  
	const getShipPosition = (x, y, ship) => {
	  let i = 0;
	  let j = 0;
	  // count ship cells to right of passed coordinates
	  while (gameboard[y][x + i] === ship) i++;
  
	  if (i > 1) return ship.length - i;
  
	  // count ship cells below passed coordinates if cell exists at y + j
	  while (gameboard[y + j] && gameboard[y + j][x] === ship) j++;
  
	  if (j > 1) return ship.length - j;
  
	  // otherwise (x, y) is the final cell of the ship
	  return ship.length - 1;
	};
  
	const receiveAttack = (x, y) => {
	  if ([x, y].includes(undefined)) {
		throw new Error('Arguments x & y are required');
	  }
	  if (typeof x !== 'number' || x !== parseInt(x) || x < 0 || x > size - 1) {
		throw new Error('x coordinate must be an integer between 0-9');
	  }
	  if (typeof y !== 'number' || y !== parseInt(y) || y < 0 || y > size - 1) {
		throw new Error('y coordinate must be an integer between 0-9');
	  }
  
	  const ship = gameboard[y][x];
  
	  if (typeof ship === 'object') {
		ship.hit(getShipPosition(x, y, ship));
		return true;
	  }
	  missedShots.push({ x, y });
	  return false;
	};
  
	const allShipsSunk = () => ships.every((ship) => ship.isSunk());
  
	return { getBoard, getMissedShots, place, receiveAttack, allShipsSunk };
  };
  
  export default createGameboard;
  