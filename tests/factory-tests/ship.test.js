import { Ship } from '../../src/factories/ship.js';

/// Ship Facotry Function Testing
test('Ship factory returns an object with correct values', () => {
  const carrier = Ship('sub', 5, false);

  expect(carrier).toHaveProperty('length', 5);
  expect(carrier).toHaveProperty('sunk', false);
  expect(carrier).toHaveProperty('HP', [
    '0,sub',
    '1,sub',
    '2,sub',
    '3,sub',
    '4,sub',
  ]);
});

test('Ship.hit() updates proper array index to "hit"', () => {
  const carrier = Ship('sub', 5, false);
  carrier.hit(4);
  expect(carrier.HP[4]).toEqual('hit');
});

test('Ship.isSunk() returns true if ship is sunk otherwise false', () => {
  const carrier = Ship('sub', 2, false);
  carrier.hit(0);
  carrier.hit(1);
  carrier.sunk = carrier.isSunk(carrier.HP);

  const submarine = Ship('sub', 5, false);
  submarine.sunk = submarine.isSunk(submarine.HP);

  expect(carrier.sunk).toBe(true);
  expect(submarine.sunk).toBe(false);
});
/// ------
