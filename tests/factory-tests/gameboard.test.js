import { Gameboard } from '../../src/factories/gameboard.js';

/// Gameboard Factory Fcuntion Testing
test('Board factory returns an object with correct values', () => {
  const board = Gameboard();

  expect(board).toHaveProperty('ships');
  expect(board).toHaveProperty('board');
  expect(board).toHaveProperty('allShipsSunk', false);
});

test('Board.placeShip() places a ship on the board array at correct coordinates', () => {
  const board = Gameboard();
  // horizontal testing
  board.placeShip(0, 0, 'submarine', 3, 'horizontal');
  expect(board.board[0][0]).toEqual('0,submarine');
  expect(board.board[0][1]).toEqual('1,submarine');
  expect(board.board[0][2]).toEqual('2,submarine');

  // vertical testing
  board.placeShip(0, 0, 'submarine', 3, 'vertical');
  expect(board.board[0][0]).toEqual('0,submarine');
  expect(board.board[1][0]).toEqual('1,submarine');
  expect(board.board[2][0]).toEqual('2,submarine');
});

test('Board.validateMove() compares provided coordinates to board.attackHistory to determine if move has already been made', () => {
  const board = Gameboard();
  board.receiveAttack(0, 0);
  expect(board.validateMove(0, 0)).toBe(false);
});

test('Board.recieveAttack() - if miss update board coordinates with "miss"', () => {
  const board = Gameboard();
  board.placeShip(0, 0, 'submarine', 3, 'horizontal');
  board.receiveAttack(1, 0);
  board.receiveAttack(0, 0);
  const target = board.board[1][0];

  expect(target).toEqual('miss');
  expect(board.receiveAttack(0, 0)).toBe(false);
});

test('Board.recieveAttack() - if hit update board coordinates and proper ship array index with "hit"', () => {
  const board = Gameboard();
  board.placeShip(0, 0, 'submarine', 3, 'horizontal');
  board.receiveAttack(0, 0);
  const target = board.board[0][0];
  const hitShip = board.ships[0];

  expect(target).toEqual('hit');
  expect(hitShip.HP[0]).toEqual('hit');
});

test('Board.checkIfAllShipsSunk() - if all ships sunk return true else false', () => {
  const board = Gameboard();
  board.placeShip(0, 0, 'submarine', 3, 'horizontal');
  board.placeShip(1, 0, 'carrier', 5, 'horizontal');

  /// not all ships sunk
  expect(board.checkIfAllShipsSunk()).toBe(false);

  /// all ships sunk
  board.ships.forEach((ship) => (ship.sunk = true));
  expect(board.checkIfAllShipsSunk()).toBe(true);
});

/// ------
