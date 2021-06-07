import createShip from '../factories/createShip';

test('Throw error if length is not a number', () => {
  expect(() => createShip()).toThrow('Length must be a number');
  expect(() => createShip(undefined)).toThrow('Length must be a number');
  expect(() => createShip(null)).toThrow('Length must be a number');
  expect(() => createShip(true)).toThrow('Length must be a number');
  expect(() => createShip([])).toThrow('Length must be a number');
  expect(() => createShip({})).toThrow('Length must be a number');
  expect(() => createShip('')).toThrow('Length must be a number');
  expect(() => createShip(() => {})).toThrow('Length must be a number');
});

test('Throw error if length is not in the array [5, 4, 3, 3, 2]', () => {
  expect(() => createShip(1)).toThrow('Length can only be 2, 3, 4 or 5');
  expect(() => createShip(-100)).toThrow('Length can only be 2, 3, 4 or 5');
  expect(() => createShip(0.980394)).toThrow('Length can only be 2, 3, 4 or 5');
  expect(() => createShip(5 / 2)).toThrow('Length can only be 2, 3, 4 or 5');
});

test('createShip returns an object', () => {
  expect(typeof createShip(2)).toBe('object');
  expect(typeof createShip(3)).toBe('object');
  expect(typeof createShip(4)).toBe('object');
  expect(typeof createShip(5)).toBe('object');
});

test('Returned object contains 3 properties', () => {
  expect(Object.keys(createShip(2)).length).toBe(3);
  expect(Object.keys(createShip(3)).length).toBe(3);
  expect(Object.keys(createShip(4)).length).toBe(3);
  expect(Object.keys(createShip(5)).length).toBe(3);
});

test('Returned object should have length property equal to passed argument', () => {
  expect(createShip(2)).toHaveProperty('length', 2);
  expect(createShip(3)).toHaveProperty('length', 3);
  expect(createShip(4)).toHaveProperty('length', 4);
  expect(createShip(5)).toHaveProperty('length', 5);
});

test('Returned object should have a property containing the hit method', () => {
  expect(createShip(2)).toHaveProperty('hit');
  expect(createShip(3)).toHaveProperty('hit');
  expect(createShip(4)).toHaveProperty('hit');
  expect(createShip(5)).toHaveProperty('hit');

  expect(typeof createShip(2).hit).toBe('function');
  expect(typeof createShip(3).hit).toBe('function');
  expect(typeof createShip(4).hit).toBe('function');
  expect(typeof createShip(5).hit).toBe('function');
});

test('Hit method throws error if position is not a number', () => {
  expect(() => createShip(5).hit()).toThrow('Position must be a number');
  expect(() => createShip(5).hit(undefined)).toThrow(
    'Position must be a number',
  );
  expect(() => createShip(5).hit(null)).toThrow('Position must be a number');
  expect(() => createShip(5).hit(true)).toThrow('Position must be a number');
  expect(() => createShip(5).hit([])).toThrow('Position must be a number');
  expect(() => createShip(5).hit({})).toThrow('Position must be a number');
  expect(() => createShip(5).hit('')).toThrow('Position must be a number');
  expect(() => createShip(5).hit(() => {})).toThrow(
    'Position must be a number',
  );
});

test('Hit method throws error if position is not a positive integer', () => {
  expect(() => createShip(5).hit(-1)).toThrow(
    'Position must be a positive integer',
  );
  expect(() => createShip(5).hit(0.8)).toThrow(
    'Position must be a positive integer',
  );
});

test('Hit method throws error if position is greater or equal to length', () => {
  expect(() => createShip(5).hit(5)).toThrow(
    'Position must be less than length',
  );
  expect(() => createShip(5).hit(100)).toThrow(
    'Position must be less than length',
  );
});

test('Hit method returns an Array', () => {
  expect(createShip(5).hit(3)).toBeInstanceOf(Array);
});

test('Hit method updates the ship array state', () => {
  expect(createShip(2).hit(0)).toEqual([1, 0]);
  expect(createShip(2).hit(1)).toEqual([0, 1]);
  expect(createShip(3).hit(0)).toEqual([1, 0, 0]);
  expect(createShip(3).hit(1)).toEqual([0, 1, 0]);
  expect(createShip(3).hit(2)).toEqual([0, 0, 1]);
  expect(createShip(4).hit(0)).toEqual([1, 0, 0, 0]);
  expect(createShip(4).hit(1)).toEqual([0, 1, 0, 0]);
  expect(createShip(4).hit(2)).toEqual([0, 0, 1, 0]);
  expect(createShip(4).hit(3)).toEqual([0, 0, 0, 1]);
  expect(createShip(5).hit(0)).toEqual([1, 0, 0, 0, 0]);
  expect(createShip(5).hit(1)).toEqual([0, 1, 0, 0, 0]);
  expect(createShip(5).hit(2)).toEqual([0, 0, 1, 0, 0]);
  expect(createShip(5).hit(3)).toEqual([0, 0, 0, 1, 0]);
  expect(createShip(5).hit(4)).toEqual([0, 0, 0, 0, 1]);
});

test('Returned object should have a property containing the isSunk method', () => {
  expect(createShip(2)).toHaveProperty('isSunk');
  expect(createShip(3)).toHaveProperty('isSunk');
  expect(createShip(4)).toHaveProperty('isSunk');
  expect(createShip(5)).toHaveProperty('isSunk');

  expect(typeof createShip(2).isSunk).toBe('function');
  expect(typeof createShip(3).isSunk).toBe('function');
  expect(typeof createShip(4).isSunk).toBe('function');
  expect(typeof createShip(5).isSunk).toBe('function');
});

test('isSunk method should return a boolean', () => {
  expect(typeof createShip(2).isSunk()).toBe('boolean');
});

describe('isSunk returns false if not hit', () => {
  const ship = createShip(2);

  it('isSunk returns false if not hit', () => {
    expect(ship.isSunk()).toBe(false);
  });
});

describe('isSunk returns false if hit but not sunk', () => {
  const ship = createShip(2);
  ship.hit(0);

  it('isSunk returns false if hit but not sunk', () => {
    expect(ship.isSunk()).toBe(false);
  });
});

describe('isSunk returns true if sunk', () => {
  const ship = createShip(2);
  ship.hit(0);
  ship.hit(1);

  it('isSunk returns true if sunk', () => {
    expect(ship.isSunk()).toBe(true);
  });
});
